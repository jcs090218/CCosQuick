/**
 * $File: CQ_Debug.ts $
 * $Date: 2020-01-08 10:13:21 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */

/**
 * @desc Provide debug and logger utilities.
 */
export class CQ_Debug {
    /* Variables */

    /* Setter & Getter */

    /* Functions */

    /**
     * @desc Log the information message.
     */
    public static get log() : Function {
        if (cc.debug)
            return console.log.bind(console, '[INFO]');
        return function () { };
    }

    /**
     * @desc Log the warning message.
     */
    public static get warn () {
        if (cc.debug)
            return console.log.bind(console, '[WARNING]');
        return function () { };
    }

    /**
     * @desc Log the error message.
     */
    public static get error() {
        if (cc.debug)
            return console.log.bind(console, '[ERROR]');
        return function () { };
    }
}
