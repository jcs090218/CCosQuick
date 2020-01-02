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

    private port : number = 5001;
    private host : string = "localhost";

    @property
    public websocket : WebSocket = undefined;

    @property({
        tooltip: "Fake player that will use to display on the screen.",
        type: CQ_TestFakePlayer,
    })
    public fakePlayer : CQ_TestFakePlayer = undefined;

    /* Setter & Getter */

    /* Functions */

    protected onLoad() : void {
        CQ_TestNetwork.instance = this;
        this.websocket = new WebSocket(this.formAddress());
    }

    protected start() : void {
        let self = this;
        this.websocket.onopen = function (msg) {
            cc.log("onopen, %s", msg);
        };
        this.websocket.onmessage = function (msg) {
            cc.log("onmessage, %s", msg);
            let json = JSON.parse(msg.data);
            self.identifyPacket(json);
        };
        this.websocket.onclose = function (msg) {
            cc.log("onclose, %s", msg);
        };
        this.websocket.onerror = function (msg) {
            cc.error("onerror, %s", msg);
        };
    }

    protected update(dt : number) : void {
        if (CQ_Input.getKeyDown(CQ_KeyCode.S)) {
            let msg : string = JSON.stringify({
                id: 0x01,
                position: cc.Vec2.ZERO,
            });
            this.websocket.send(msg);
            console.log('sent!');
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.D)) {
            this.sendNewPlayerPacket('some name', cc.Vec2.ZERO);
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.A)) {
            this.sendUpdateMapPacket();
        }
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

    private identifyPacket(packet) : void {
        switch (packet.id) {
            case 0x11:
                {
                    CQ_TestPlayer.instance.labelName = packet.name;
                }
                break;
            case 0x12:  /* Update Map */
                {
                    console.log(packet.players);
                }
                break;
        }
    }
}
