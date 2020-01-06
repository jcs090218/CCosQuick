/**
 * $File: CQ_TestNetwork.ts $
 * $Date: 2019-12-30 17:04:57 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const { ccclass, property } = cc._decorator;

import { CQ_Input } from '../util/CQ_Input';
import { CQ_KeyCode } from '../enum/CQ_KeyCode';
import CQ_TestPlayer from './CQ_TestPlayer';
import CQ_TestFakePlayer from './CQ_TestFakePlayer';

@ccclass
export default class CQ_TestNetwork extends cc.Component {
    /* Variables */
    public static instance : CQ_TestNetwork = undefined;

    public static SERVER_CONNECTED : boolean = false;

    private port : number = 5001;
    private host : string = "localhost";

    @property
    public websocket : WebSocket = undefined;

    // TODO: This should be inside a player manager class.
    @property({
        tooltip: '',
    })
    public players : Array<CQ_TestFakePlayer> = new Array<CQ_TestFakePlayer>();

    @property({
        tooltip: "Fake player that will use to display on the screen.",
    })
    public fakePlayer : CQ_TestFakePlayer = undefined;

    private _timer : number = 0;
    private _fps : number = 15;
    // Time to tell server to update my position.
    private _refreshRate : number = 1 / this._fps;

    /* Setter & Getter */

    /* Functions */

    protected onLoad() : void {
        CQ_TestNetwork.instance = this;
        this.websocket = new WebSocket(this.formAddress());
    }

    protected start() : void {
        let self = this;
        this.websocket.onopen = function (msg) {
            CQ_TestNetwork.SERVER_CONNECTED = true;
            cc.log("onopen, %s", msg);
        };
        this.websocket.onmessage = function (msg) {
            let json = JSON.parse(msg.data);
            self.identifyPacket(json);
        };
        this.websocket.onclose = function (msg) {
            CQ_TestNetwork.SERVER_CONNECTED = false;
            cc.log("onclose, %s", msg);
        };
        this.websocket.onerror = function (msg) {
            cc.error("onerror, %s", msg);
        };
    }

    protected update(dt : number) : void {
        /* Refresh server position. */
        this.doSendUpdatePos(dt);
    }

    /**
     * @desc Form the target address to connect to.
     * @return { string } : Address as string.
     */
    private formAddress () : string {
        return "ws://" + this.host + ":" + this.port + "/";
    }

    public sendNewPlayerPacket(position : cc.Vec2) : void {
        let msg : string = JSON.stringify({
            id: 0x11,
            x: position.x,
            y: position.y,
        });
        this.websocket.send(msg);
    }

    public sendUpdateMapPacket() : void {
        let msg : string = JSON.stringify({
            id: 0x12,
            name: 'hello'
        });
        this.websocket.send(msg);
    }

    public sendDelPlayerPacket(name : string) : void {
        let msg : string = JSON.stringify({
            id: 0x13,
            name: name,
        });
        this.websocket.send(msg);
    }

    public sendUpdatePosPacket(name : string, pos : cc.Vec2) : void {
        let msg : string = JSON.stringify({
            id: 0x15,
            name: name,
            x: pos.x,
            y: pos.y,
        });
        this.websocket.send(msg);
    }

    private identifyPacket(packet) : void {
        switch (packet.id) {
            case 0x11:
                {
                    CQ_TestPlayer.instance.labelName.string = packet.name;
                }
                break;
            case 0x13:  /* Update Map */
                {
                    this.correctMap(packet);
                }
                break;
            default:
                {
                    cc.warn("[WARNING] Unauthorized packet id. We could be under attacked...");
                }
                break;
        }
    }

    /**
     * @desc Correct map with the current information.
     * @param { typename } packet : Packet should contain map information.
     */
    private correctMap(packet : any) : void {
        let infoPlayers = packet.players;
        for (let index = 0; index < infoPlayers.length; ++index) {
            let pf = infoPlayers[index];
            // Ignore the current player.
            if (CQ_TestPlayer.instance.labelName.string == pf.name)
                continue;
            let cp : CQ_TestFakePlayer = this.findPlayerByName(pf.name);
            let pos = new cc.Vec2(pf.x, pf.y);
            if (cp) {
                cp.updatePosition = pos;
            } else {
                let fp : CQ_TestFakePlayer = CQ_TestFakePlayer.spwanFakePlayer(pos);
                fp.labelName.string = pf.name;
                fp.enabled = true;
                this.players.push(fp);
            }
        }
    }

    /**
     * @desc Find the player by their name.
     * @param { string } name : Name of that player.
     * @return { CQ_TestFakePlayer } : Return player object that matched by name.
     * Return null if not found.
     */
    private findPlayerByName(name : string) : CQ_TestFakePlayer {
        for (let index = 0; index < this.players.length; ++index) {
            let fp = this.players[index];
            if (fp.labelName.string == name)
                return fp;
        }
        return null;
    }

    /**
     * @desc Send the current play information with `_refreshRate` interval of time.
     * @param { number } dt : Delta time.
     */
    private doSendUpdatePos(dt : number) : void {
        if (!CQ_TestNetwork.SERVER_CONNECTED)
            return;

        this._timer += dt;
        if (this._timer <  this._refreshRate)
            return;
        this.sendUpdatePosPacket(CQ_TestPlayer.instance.labelName.string,
                                 CQ_TestPlayer.instance.node.position);
        this._timer = 0;
    }

}
