/**
 * $File: CQ_InputManager.ts $
 * $Date: 2019-12-25 10:38:35 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const {ccclass, property} = cc._decorator;

import { CQ_Input } from "../util/CQ_Input";
import { CQ_KeyCode } from "../enum/CQ_KeyCode";

@ccclass
export default class CQ_InputManager extends cc.Component {
    /* Variables */

    /* Setter & Getter */

    /* Functions */

    protected start() : void {
        CQ_Input.init();

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    protected lateUpdate() : void {
        CQ_Input.cleanInputBuffer();
    }

    private onKeyDown(event) : void {
        CQ_Input.keyDownEvent(event);
    }

    private onKeyUp(event) : void {
        CQ_Input.keyUpEvent(event);
    }
}
