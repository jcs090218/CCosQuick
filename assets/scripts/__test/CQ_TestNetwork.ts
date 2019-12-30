/**
 * $File: CQ_TestNetwork.ts $
 * $Date: 2019-12-30 17:04:57 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const {ccclass, property} = cc._decorator;

@ccclass
export default class CQ_TestNetwork extends cc.Component {
    /* Variables */

    @property
    public websocket : WebSocket = undefined;

    /* Setter & Getter */

    /* Functions */

    protected onLoad() : void {
        this.websocket = new WebSocket("ws://localhost:5001/");
    }

    protected start() : void {
        this.websocket.onopen = function (message) {
            cc.log("On open");
        };
        this.websocket.onmessage = function (message) {
            cc.log("On message");
        };
        this.websocket.onclose = function (message) {
            cc.log("On close");
        };
        this.websocket.onerror = function (message) {
            cc.log("On error");
        };
    }
}
