/**
 * $File: CQ_InputManager.ts $
 * $Date: 2019-12-25 10:38:35 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const { ccclass, property } = cc._decorator;

import { CQ_Input } from "../util/CQ_Input";

@ccclass
export default class CQ_InputManager extends cc.Component {
    /* Variables */

    public static instance : CQ_InputManager = undefined;

    /* Setter & Getter */

    /* Functions */

    protected onLoad() : void {
        CQ_InputManager.instance = this;
    }

    protected start() : void {
        CQ_Input.init();

        this.initKeyboard();
        this.initMouse();
        this.initTouch();
    }

    protected lateUpdate() : void {
        CQ_Input.cleanInputBuffer();
    }

    /**
     * @desc Initialize the keyboard device and setup the event handler.
     */
    private initKeyboard() : void {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, CQ_Input.keyDownEvent, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, CQ_Input.keyUpEvent, this);
    }

    /**
     * @desc Initialize the mouse device and setup the event handler.
     */
    private initMouse() : void {
        this.node.on(cc.Node.EventType.MOUSE_UP, CQ_Input.mouseUpEvent);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, CQ_Input.mouseDownEvent);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, CQ_Input.mouseMoveEvent);
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, CQ_Input.mouseWheelEvent);
    }

    /**
     * @desc Initialize the touch sensor device and setup the event handler.
     */
    private initTouch() : void {
        this.node.on(cc.Node.EventType.TOUCH_START, CQ_Input.touchStartEvent);
        this.node.on(cc.Node.EventType.TOUCH_END, CQ_Input.touchEndEvent);
    }

}
