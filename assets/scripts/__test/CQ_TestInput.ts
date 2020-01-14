/**
 * $File: CQ_TestInput.ts $
 * $Date: 2020-01-14 09:42:52 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property, requireComponent } = cc._decorator;

import { CQ_Input } from '../util/CQ_Input';
import { CQ_KeyCode } from '../enum/CQ_KeyCode';
import { CQ_MouseButtonType } from "../enum/CQ_MouseButtonType";
import { CQ_Debug } from '../util/CQ_Debug';

/**
 * @desc Test of any input devices.
 */
@ccclass
export default class CQ_TestInput extends cc.Component {
    /* Variables */

    @property({
        tooltip: 'Flag to print out the mouse position every frame.',
    })
    public showMousePosition : boolean = true;

    /* Setter & Getter */

    /* Functions */

    protected update(dt : number) : void {
        if (this.showMousePosition) {
            let mousePos : cc.Vec2 = CQ_Input.mousePosition;
            CQ_Debug.log('Mouse Position: ' + mousePos.x + ' : ' + mousePos.y);
        }

        if (CQ_Input.getKey(CQ_KeyCode.Q)) {
            CQ_Debug.log("Pressed Q");
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.W)) {
            CQ_Debug.log("Down W");
        }

        if (CQ_Input.getKeyUp(CQ_KeyCode.E)) {
            CQ_Debug.log("Up E");
        }

        if (CQ_Input.getMouseButton(CQ_MouseButtonType.LEFT)) {
            CQ_Debug.log("Pressed left");
        }

        if (CQ_Input.getMouseButtonDown(CQ_MouseButtonType.LEFT)) {
            CQ_Debug.log("Down left");
        }

        if (CQ_Input.getMouseButtonUp(CQ_MouseButtonType.LEFT)) {
            CQ_Debug.log("Up left");
        }
    }
}
