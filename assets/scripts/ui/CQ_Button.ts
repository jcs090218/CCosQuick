/**
 * $File: CQ_Button.ts $
 * $Date: 2020-01-06 18:32:18 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property } = cc._decorator;

/**
 * Base button for easier implementation.
 */
@ccclass
export default abstract class CQ_Button extends cc.Component {
    /* Variables */

    /* Setter & Getter */

    /* Functions */

    protected onLoad(): void {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = this.constructor.name;
        clickEventHandler.handler = 'onclick';

        let button = this.node.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
    }

    /**
     * @desc When click on this button.
     */
    public abstract onclick() : void;
}
