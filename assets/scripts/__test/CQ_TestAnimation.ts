/**
 * $File: CQ_TestAnimation.ts $
 * $Date: 2020-01-10 18:45:19 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property, requireComponent } = cc._decorator;

import CQ_Animation from "../animation/CQ_Animation";
import { CQ_Debug } from "../util/CQ_Debug";
import { CQ_Input } from "../util/CQ_Input";
import { CQ_KeyCode } from "../enum/CQ_KeyCode";

/**
 * @desc Unit test for `CQ_Animation` class.
 */
@ccclass
export default class CQ_TestAnimation extends cc.Component {
    /* Variables */

    @property({
        tooltip: 'Animation that going to be our testing target.',
        type: CQ_Animation,
    })
    public animation : CQ_Animation = undefined;

    /* Setter & Getter */

    /* Functions */

    protected update(dt : number) : void {
        if (this.animation == null) {
            CQ_Debug.warn("Can't test animation without the animation reference");
            return;
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.Q)) {
            this.animation.play();
            CQ_Debug.log("Animation Played.");
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.W)) {
            this.animation.stop();
            CQ_Debug.log("Animation Stopped.");
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.E)) {
            this.animation.pause();
            CQ_Debug.log("Animation Paused.");
        }
    }

}
