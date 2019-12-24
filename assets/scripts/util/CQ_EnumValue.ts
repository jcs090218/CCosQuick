/**
 * $File: CQ_EnumValue.ts $
 * $Date: 2019-12-24 13:58:59 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
import { CQ_Sign } from "../enum/CQ_Sign";

/**
 * @desc List of set of function that returns the actual valeu from
 * each enum in the library. Anyway, the issue is pretty obvious
 * that JavaScript doesn't allow the negative value in the enumerator.
 *
 * See these links below.
 * @link https://discuss.cocos2d-x.org/t/1-already-defined-in-enum/44223/3
 * @link https://mrsmellypotato.wordpress.com/2019/04/02/negative-value-in-enum/
 */
export class CQ_EnumValue {
    /** @desc Get value from `CQ_Sign`. */
    public static getValue(sign : CQ_Sign) : number {
        switch (sign) {
            case CQ_Sign.POSITIVE: return 1;
            case CQ_Sign.NEGATIVE: return -1;
        }
    }
}
