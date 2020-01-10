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
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.Q)) {
            this.animation.playAnimation();
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.W)) {
            this.animation.stopAnimation();
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.E)) {
            this.animation.pauseAnimation();
        }
    }

}
