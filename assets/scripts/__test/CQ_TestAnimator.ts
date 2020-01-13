/**
 * $File: CQ_TestAnimator.ts $
 * $Date: 2020-01-13 10:09:15 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property, requireComponent } = cc._decorator;

import CQ_Animator from "../animation/CQ_Animator";
import { CQ_Debug } from "../util/CQ_Debug";
import { CQ_Input } from "../util/CQ_Input";
import { CQ_KeyCode } from "../enum/CQ_KeyCode";

/**
 * @desc Unit test for `CQ_Animator`.
 */
@ccclass
export default class CQ_TestAnimator extends cc.Component {
    /* Variables */

    @property({
        tooltip: 'Animator that going to be out testing target.',
        type: CQ_Animator,
    })
    public animator : CQ_Animator = undefined;

    /* Setter & Getter */

    /* Functions */

    protected update(dt : number) : void {
        if (this.animator == null) {
            CQ_Debug.warn("Can't test animation without the animation reference");
            return;
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.Q)) {
            let index : number = 0;
            this.animator.playAnimation(index);
            CQ_Debug.log("Play animation with index:", index);
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.W)) {
            let index : number = 1;
            this.animator.playAnimation(index);
            CQ_Debug.log("Play animation with index:", index);
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.E)) {
            let index : number = 2;
            this.animator.playAnimation(index);
            CQ_Debug.log("Play animation with index:", index);
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.R)) {
            let index : number = 2;
            this.animator.playOnShot(index);
            CQ_Debug.log("Play one shot animation with index:", index);
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.A)) {
            this.animator.stopAnimation();
            CQ_Debug.log("Stop animation!");
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.S)) {
            this.animator.pauseAnimation();
            CQ_Debug.log("Pause animation!");
        }
    }
}
