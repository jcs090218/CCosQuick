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
import { CQ_Debug } from '../util/CQ_Debug';

/**
 * @desc Handle multiple animations (CQ_Animation) object for
 * controlling the flow/display from each animations that have been
 * manage by this class.
 */
@ccclass
export default class CQ_Animator extends cc.Component {
    /* Variables */

    @property({
        tooltip: 'List of animation that this animator controls.',
        type: [CQ_Animation],
    })
    public animations : CQ_Animation[] = [];

    private _currentAnimation : CQ_Animation = undefined;

    /* Setter & Getter */

    public get currentAnimation() : CQ_Animation { return this._currentAnimation; }

    /* Functions */

    protected onLoad() : void {
        this.playAnimation(0);  // Play the first animation as default.
    }

    /**
     * @desc Play the animation by index in the array.
     * @param { number } index : Index number.
     */
    public playAnimation(index : number) : void {
        this.setEnabledAnimation(false);
        let targetAnim : CQ_Animation = this.animations[index];
        if (targetAnim == null) {
            CQ_Debug.warn("Animation you are targeting is not allowed with index:", index);
            return;
        }
        this._currentAnimation = targetAnim;  // Update the current animation.
        this._currentAnimation.enabled = true;
    }

    public playOnShot(index : number) : void {
        // TODO: ..
    }

    /**
     * @desc Stop the animation at point/moment and reset the frame
     * the first frame of the animation.
     */
    public stopAnimation() : void {
        if (this._currentAnimation == null) {
            CQ_Debug.warn("Can't stop animation with null references...");
            return;
        }
        this._currentAnimation.playAnimation(0);
        this._currentAnimation.enabled = false;
    }

    /**
     * @desc Pause the animation at point/moment.
     */
    public pauseAnimation() : void {
        if (this._currentAnimation == null) {
            CQ_Debug.warn("Can't pause animation with null references...");
            return;
        }
        this._currentAnimation.pauseAnimation();
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
