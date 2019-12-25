/**
 * $File: CQ_Input.ts $
 * $Date: 2019-12-25 10:29:36 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */

import { CQ_KeyCode } from "../enum/CQ_KeyCode";

/**
 * @desc nput handle.
 */
export class CQ_Input {
    private static _keysDown : CQ_KeyCode[] = [];
    private static _keysReleaseThisFrame : CQ_KeyCode[] = [];
    private static _keysPressedThisFrame : CQ_KeyCode[] = [];

    private static _frameIdCounter : number = 0;
    private static _frameId : number = 0;

    /**
     * @desc Initialize for input module to get ready to work.
     */
    public static init() : void {
        CQ_Input.initKeyboard();
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

        CQ_Input._keysReleaseThisFrame = [];
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
                if (CQ_Input._frameIdCounter == CQ_Input._frameId)
                    return true;
                return false;
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
        if (CQ_Input.containsKey(CQ_Input._keysPressedThisFrame, keyCode))
            return true;
        return false;
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

    public static keyDownEvent(evt) : void {
        let key : CQ_KeyCode = <CQ_KeyCode>evt.keyCode;
        CQ_Input.safePushKey(CQ_Input._keysPressedThisFrame, key);
    }

    public static keyUpEvent(evt) : void {
        let key : CQ_KeyCode = <CQ_KeyCode>evt.keyCode;

        CQ_Input.safePushKey(CQ_Input._keysReleaseThisFrame, key);

        // Remove the key down list.
        CQ_Input.removeKeyFromList(CQ_Input._keysDown, key);
        CQ_Input.removeKeyFromList(CQ_Input._keysPressedThisFrame, key);
    }

    /**
     * @desc Initialize the keyboard receiver.
     * @param keyCode Key code.
     * @returns True, key is up. False, key is not up.
     */
    private static initKeyboard() {
        // Keyboard handle.
        document.addEventListener("keydown", CQ_Input.keyDownEvent);
        document.addEventListener("keyup", CQ_Input.keyUpEvent);
    }

    /**
     * @desc Check if key is contains in the list.
     */
    private static containsKey(list : CQ_KeyCode[], key : CQ_KeyCode) {
        return (list.indexOf(key) > -1);
    }

    /**
     * @desc Prevent pushing duplicate keycode.
     * @param list List of keycode.
     * @param key Key code value.
     */
    public static safePushKey(list : CQ_KeyCode[], key : CQ_KeyCode) {
        // If contain.
        if (CQ_Input.containsKey(list, key))
            return;
        list.push(key);
    }

    /**
     * @desc Remove a key from a list.
     * @param list List of keycode.
     * @param key Target key code you want to remove.
     */
    private static removeKeyFromList(list : CQ_KeyCode[], key : CQ_KeyCode) {
        const searchIndex = list.indexOf(key, 0);
        if (searchIndex > -1) {
            // Remove it.
            list.splice(searchIndex, 1);
        }
    }
}
