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
import { CQ_MouseButtonType } from "../enum/CQ_MouseButtonType";
import { CQ_EnumValue } from "../util/CQ_EnumValue";

@ccclass
export default class CQ_InputManager extends cc.Component {
    /* Variables */

    // Position of the mouse.
    public mousePosition : cc.Vec2 = undefined;

    private _mousePressedLeft : boolean = false;
    private _mousePressedCenter : boolean = false;
    private _mousePressedRight : boolean = false;


    /* Setter & Getter */

    /* Functions */

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
        let self = this;

        this.node.on(cc.Node.EventType.MOUSE_UP, function (evt) {
            self.setMouseButtonState(CQ_EnumValue.getKey_CQ_MouseButtonType(evt._buttom), true);
        });

        this.node.on(cc.Node.EventType.MOUSE_DOWN, function (evt) {
            self.setMouseButtonState(CQ_EnumValue.getKey_CQ_MouseButtonType(evt._buttom), false);
        });

        this.node.on(cc.Node.EventType.MOUSE_WHEEL, function () {
            console.log("mouse wheel");
        });

        this.node.on(cc.Node.EventType.MOUSE_MOVE, function (evt) {
            self.mousePosition = evt.getLocation();
        });
    }

    /**
     * @desc Initialize the touch sensor device and setup the event handler.
     */
    private initTouch() : void {
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            console.log("touch start");
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            console.log("touch end");
        });
    }

    private setMouseButtonState(buttonType : CQ_MouseButtonType, act : boolean) : void {
        switch (buttonType) {
            case CQ_MouseButtonType.LEFT: this._mousePressedLeft = act;
            case CQ_MouseButtonType.CENTER: this._mousePressedCenter = act;
            case CQ_MouseButtonType.RIGHT: this._mousePressedRight = act;
        }
    }
}
