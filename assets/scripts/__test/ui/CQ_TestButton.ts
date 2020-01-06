/**
 * $File: CQ_TestButton.ts $
 * $Date: 2020-01-06 18:38:41 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property } = cc._decorator;

import CQ_Button from '../../ui/CQ_Button';

@ccclass
export default class CQ_TestButton extends CQ_Button {
    /* Variables */

    /* Setter & Getter */

    /* Functions */

    public onclick() : void {
        console.log("[INFO] On click!!");
    }

}
