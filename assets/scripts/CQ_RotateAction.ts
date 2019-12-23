/**
 * $File: CQ_RotateAction.ts $
 * $Date: 2019-12-23 16:59:46 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const {ccclass, property} = cc._decorator;

@ccclass
export default class CQ_RotateAction extends cc.Component {

    /* Variables */

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    /* Setter & Getter */

    /* Functions */

    /**
     * @desc Initialize time in game.
     */
    protected start() : void {

    }

    /**
     * @desc Update called every frame.
     * @param { number } dt : Delta time.
     */
    protected update(dt) : void {

    }
}
