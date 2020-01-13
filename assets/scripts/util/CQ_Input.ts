/**
 * $File: CQ_Input.ts $
 * $Date: 2019-12-25 10:29:36 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */

import { CQ_KeyCode } from "../enum/CQ_KeyCode";
import { CQ_MouseButtonType } from "../enum/CQ_MouseButtonType";

/**
 * @desc Input handle.
 */
export class CQ_Input {
    private static _keysDown : CQ_KeyCode[] = [];
    private static _keysReleaseThisFrame : CQ_KeyCode[] = [];
    private static _keysPressedThisFrame : CQ_KeyCode[] = [];

    private static _frameIdCounter : number = 0;
    private static _frameId : number = 0;

    // Position of the mouse.
    public static mousePosition : cc.Vec2 = cc.Vec2.ZERO;

    private static _mouseDown : CQ_MouseButtonType[] = [];
    private static _mouseReleaseThisFrame : CQ_MouseButtonType[] = [];
    private static _mousePressedThisFrame : CQ_MouseButtonType[] = [];


    /**
     * @desc Initialize for input module to get ready to work.
     */
    public static init() : void {
        //CQ_Input.initMouse();
        CQ_Input.initKeyboard();
        //CQ_Input.initTouch();
    }

    /**
     * @desc Clean the input buffer every frame.
     */
    public static cleanInputBuffer() : void {
        /* Do frame counter, in order to check if the same frame
         * pressed the same button multiple different places/files. */
        {
            ++CQ_Input._frameIdCounter;

            /* NOTE: Not sure javascript will go up to what certain limit.
             * Just set it to something that would not be easily reach.
             * In theory, 2 is good enough. [Default: 1000]
             */
            if (CQ_Input._frameIdCounter > 1000)
                CQ_Input._frameIdCounter = 0;
        }

        CQ_Input._mouseReleaseThisFrame = [];
        CQ_Input._keysReleaseThisFrame = [];
    }

    /**
     * @desc Check if a mouse button click is up this frame.
     * @param { CQ_MouseButtonType } mbt : Type of the mouse button.
     * @return { boolean } : Ture, if click up this frame. False, vice versa.
     */
    public static getMouseButtonUp(mbt : CQ_MouseButtonType) : boolean {
        for (let index = 0;
             index < CQ_Input._mouseReleaseThisFrame.length;
             ++index )
        {
            let key = CQ_Input._mouseReleaseThisFrame[index];
            if (key == mbt)
                return true;
        }
        return false;
    }

    /**
     * @desc Check if a mouse button click in this frame.
     * @param { CQ_MouseButtonType } mbt : Type of the mouse button.
     * @return { boolean } : Ture, if click this frame. False, vice versa.
     */
    public static getMouseButtonDown(mbt : CQ_MouseButtonType) : boolean {
        if (CQ_Input.getMouseButton(mbt)) {
            if (CQ_Input.containsKey(CQ_Input._mouseDown, mbt)) {
                return (CQ_Input._frameIdCounter == CQ_Input._frameId);
            } else {
                CQ_Input.safePushKey(CQ_Input._mouseDown, mbt);
                CQ_Input._frameId = CQ_Input._frameIdCounter;
                return true;
            }
        }
        return false;
    }

    /**
     * @desc Check if a mouse button is pressed at the moment.
     * @param { CQ_MouseButtonType } mbt : Type of the mouse button.
     * @return { boolean } : Ture, if pressed. False, vice versa.
     */
    public static getMouseButton(mbt : CQ_MouseButtonType) : boolean {
        return CQ_Input.containsKey(CQ_Input._mousePressedThisFrame, mbt);
    }

    /**
     * @desc Check if the key is up?
     * @param keyCode Key code.
     * @returns True, key is up. False, key is not up.
     */
    public static getKeyUp(keyCode : CQ_KeyCode) : boolean {
        for (let index = 0;
             index < CQ_Input._keysReleaseThisFrame.length;
             ++index)
        {
            let key = CQ_Input._keysReleaseThisFrame[index];
            if (key == keyCode)
                return true;
        }
        return false;
    }

    /**
     * @desc Check if the key is down?
     * @param keyCode Key code.
     * @returns True, key is down. False, key is not down.
     */
    public static getKeyDown(keyCode : CQ_KeyCode) : boolean {
        if (CQ_Input.getKey(keyCode)) {
            // Check contains.
            if (CQ_Input.containsKey(CQ_Input._keysDown, keyCode)) {
                return (CQ_Input._frameIdCounter == CQ_Input._frameId);
            } else {
                // The key is down this frame, add to the check list.
                // So when the next time it etners will return false.
                CQ_Input.safePushKey(CQ_Input._keysDown, keyCode);

                // Update it so know is the same frame.
                CQ_Input._frameId = CQ_Input._frameIdCounter;
                return true;
            }
        }
        return false;
    }

    /**
     * @desc Check if the key is held down?
     * @param keyCode Key code.
     * @returns True, key is held down. False, key is not held down.
     */
    public static getKey(keyCode : CQ_KeyCode) : boolean {
        return (CQ_Input.containsKey(CQ_Input._keysPressedThisFrame, keyCode));
    }

    /*
     * @desc Callback function that recevied the mouse up event.
     * @param { any } evt : Event result.
     */
    public static mouseUpEvent(evt : any) : void {
        let key : CQ_MouseButtonType = <CQ_MouseButtonType>evt._button;
        CQ_Input.safePushKey(CQ_Input._mouseReleaseThisFrame, key);
        // Remove the key down list.
        CQ_Input.removeKeyFromList(CQ_Input._mouseDown, key);
        CQ_Input.removeKeyFromList(CQ_Input._mousePressedThisFrame, key);
    }

    /**
     * @desc Callback function that recevied the mouse down event.
     * @param { any } evt : Event result.
     */
    public static mouseDownEvent(evt : any) : void {
        let key : CQ_MouseButtonType = <CQ_MouseButtonType>evt._button;
        CQ_Input.safePushKey(CQ_Input._mousePressedThisFrame, key);
    }

    /**
     * @desc Callback function that recevied the mouse move event.
     * @param { any } evt : Event result.
     */
    public static mouseMoveEvent(evt : any) : void {
        // Get the mouse position here.
        if ('x' in evt) {
            CQ_Input.mousePosition.x = evt.x;
        } else if ('_x' in evt) {
            CQ_Input.mousePosition.x = evt._x;
        }
        if ('y' in evt) {
            CQ_Input.mousePosition.y = evt.y;
        } else if ('_y' in evt) {
            CQ_Input.mousePosition.y = evt._y;
        }
    }

    /**
     * @desc Callback function that recevied the mouse wheel event.
     * @param { any } evt : Event result.
     */
    public static mouseWheelEvent(evt : any) : void {
        // TODO: Implement this later on.
    }

    /**
     * @desc Callback/function that received key up event.
     * @param { any } evt : Key event returns from browser.
     */
    public static keyUpEvent(evt : any) : void {
        let key : CQ_KeyCode = <CQ_KeyCode>evt.keyCode;
        CQ_Input.safePushKey(CQ_Input._keysReleaseThisFrame, key);
        // Remove the key down list.
        CQ_Input.removeKeyFromList(CQ_Input._keysDown, key);
        CQ_Input.removeKeyFromList(CQ_Input._keysPressedThisFrame, key);
    }

    /**
     * @desc Callback/function that received key down event.
     * @param { any } evt : Key event returns from browser.
     */
    public static keyDownEvent(evt : any) : void {
        let key : CQ_KeyCode = <CQ_KeyCode>evt.keyCode;
        CQ_Input.safePushKey(CQ_Input._keysPressedThisFrame, key);
    }

    /**
     * @desc Callback/function that received tocuh start event.
     * @param { any } evt : Key event returns from browser.
     */
    public static touchStartEvent(evt : any) : void {

    }

    /**
     * @desc Callback/function that received touch end event.
     * @param { any } evt : Key event returns from browser.
     */
    public static touchEndEvent(evt : any) : void {

    }

    /**
     * @desc Initialize the mouse device and setup the event handler.
     */
    private static initMouse() : void {
        // TODO: Implements event from browser and not any other engine's API.
        window.onmouseup = CQ_Input.mouseUpEvent;
        window.onmousedown = CQ_Input.mouseDownEvent;
        window.onmousemove = CQ_Input.mouseMoveEvent;
        window.onmousewheel = CQ_Input.mouseWheelEvent;
    }

    /**
     * @desc Initialize the keyboard device and setup the event handler.
     */
    private static initKeyboard() : void {
        // Keyboard handle.
        document.addEventListener("keydown", CQ_Input.keyDownEvent);
        document.addEventListener("keyup", CQ_Input.keyUpEvent);
    }

    /**
     * @desc Initialize the touch sensor device and setup the event handler.
     */
    private static initTouch() : void {
        // TODO: Implements event from browser and not any other engine's API.
        // TODO: I don't know if this exists.
    }

    /**
     * @desc  Check if the key contain in the list.
     */
    private static containsKey<T>(list : T[], key : T) : boolean {
        return (list.indexOf(key) > -1);
    }

    /**
     * @desc Prevent pushing duplicate keycode.
     * @param list List of keycode.
     * @param key Key code value.
     */
    public static safePushKey<T>(list : T[], key : T) : void {
        // If contain.
        if (CQ_Input.containsKey<T>(list, key))
            return;
        list.push(key);
    }

    /**
     * @desc Remove a key from a list.
     * @param list List of keycode.
     * @param key Target key code you want to remove.
     */
    private static removeKeyFromList<T>(list : T[], key : T) : void {
        const searchIndex = list.indexOf(key, 0);
        if (searchIndex > -1) {
            // Remove it.
            list.splice(searchIndex, 1);
        }
    }
}
