/**
 * $File: CQ_Animator.ts $
 * $Date: 2020-01-08 15:28:34 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property, requireComponent } = cc._decorator;

import CQ_Animation from './CQ_Animation';

@ccclass
export default class CQ_Animator extends cc.Component {
    /* Variables */

    @property({
        tooltip: 'List of animation that this animator controls.',
        type: [CQ_Animation],
    })
    public animations : CQ_Animation[] = [];

    /* Setter & Getter */

    /* Functions */

    protected onLoad() : void {
        this.playAnimationByIndex(0);  // Play the first animation as default.
    }

    /**
     * @desc Play the animation by index in the array.
     * @param { number } index : Index number.
     */
    private playAnimationByIndex(index : number) : void {
        this.setEnabledAnimation(false);
        let targetAnim : CQ_Animation = this.animations[index];
        if (targetAnim == null) {
            cc.log("Animation you are targeting is not allowed with index: %s", index);
            return;
        }
        targetAnim.enabled = true;
    }

    /**
     * @desc Set animation (CQ_Animation) component's enabled.
     * @param { boolean } act : Action for enable for disable.
     */
    private setEnabledAnimation(act : boolean) {
        for (let index = 0; index < this.animations.length; ++index) {
            let anim = this.animations[index];
            if (anim == null) continue;
            anim.enabled = act;
        }
    }
}
