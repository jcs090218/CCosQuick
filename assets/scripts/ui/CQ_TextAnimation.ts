/**
 * $File: CQ_TextAnimation.ts $
 * $Date: 2019-12-25 11:55:29 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const {ccclass, property} = cc._decorator;

@ccclass
export default class CQ_TextAnimation extends cc.Component {
    /* Variables */

    @property({
        tooltip: "List of text that are going to display in order.",
        type: cc.String,
    })
    public texts : string[] = [];

    public label : cc.Label = undefined;

    /* Setter & Getter */

    /* Functions */

    protected start() : void {
        this.label = this.node.getComponent(cc.);
    }

    protected update(dt) : void {

    }
}
