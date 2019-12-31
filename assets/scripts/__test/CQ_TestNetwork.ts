/**
 * $File: CQ_TestNetwork.ts $
 * $Date: 2019-12-30 17:04:57 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const {ccclass, property} = cc._decorator;

import { CQ_Input } from '../util/CQ_Input';
import { CQ_KeyCode } from '../enum/CQ_KeyCode';

@ccclass
export default class CQ_TestNetwork extends cc.Component {
    /* Variables */

    private port : number = 5001;
    private host : string = "localhost";

    @property
    public websocket : WebSocket = undefined;

    /* Setter & Getter */

    /* Functions */

    protected onLoad() : void {
        this.websocket = new WebSocket(this.formAddress());
    }

    protected start() : void {
        this.websocket.onopen = function (msg) {
            cc.log("onopen, %s", msg);
        };
        this.websocket.onmessage = function (msg) {
            cc.log("onmessage, %s", msg);
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
            this.websocket.send("Hello World");
        }
    }

    /**
     * @desc Form the target address to connect to.
     * @return { string } : Address as string.
     */
    private formAddress () : string {
        return "ws://" + this.host + ":" + this.port + "/";
    }
}
