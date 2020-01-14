/**
 * $File: CQ_TestDebug.ts $
 * $Date: 2020-01-08 15:20:46 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property, requireComponent } = cc._decorator;

import { CQ_Debug } from '../util/CQ_Debug'
import { CQ_Input } from '../util/CQ_Input'
import { CQ_KeyCode } from '../enum/CQ_KeyCode'

/**
 * @desc Test debug module (CQ_Debug) output.
 */
@ccclass
export default class CQ_TestDebug extends cc.Component {
    /* Variables */

    /* Setter & Getter */

    /* Functions */

    protected update(dt : number) : void {
        if (CQ_Input.getKeyDown(CQ_KeyCode.A)) {
            CQ_Debug.log("hello : %s", 'word');
            CQ_Debug.log("hello :", 'word');
            CQ_Debug.warn("hello :" + 3);
        }
    }
}
