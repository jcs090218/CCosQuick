/**
 * $File: CQ_Random.ts $
 * $Date: 2019-12-24 18:14:06 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */

/**
 * @desc Random utility class.
 */
export class CQ_Random {
    /**
     * Returns a random floating point number between `min` (inclusive)
     * and `max` (exclusive).
     *
     * @param { number } min : Mininum number.
     * @param { number } max : Maxinum number.
     * @returns { number } : Random number between mininum and maxinum number.
     */
    public static rangeFloat(min : number, max : number) : number {
        return Math.random() * (max - min) + min;
    }

    /**
     * Returns a random floating point number between `min` (inclusive)
     * and `max` (inclusive).
     *
     * @param { number } min : Mininum number.
     * @param { number } max : Maxinum number.
     * @returns { number } : Random number between mininum and maxinum number.
     */
    public static rangeFloatInclude(min : number, max : number) : number {
        return Math.random() * (max - min + 1) + min;
    }

    /**
     * Returns a random integer between `min` (inclusive)
     * and `max` (exclusive).
     *
     * @param { number } min : Mininum number.
     * @param { number } max : Maxinum number.
     * @returns { number } : Random number between mininum and maxinum number.
     */
    public static rangeInt(min : number, max : number) : number {
        return Math.floor(CQ_Random.rangeFloat(min, max));
    }

    /**
     * Returns a random integer between `min` (inclusive)
     * and `max` (inclusive).
     *
     * @param { number } min : Mininum number.
     * @param { number } max : Maxinum number.
     * @returns { number } : Random number between mininum and maxinum number.
     */
    public static randIncludeInt(min : number, max : number) : number {
        return Math.floor(CQ_Random.rangeFloatInclude(min, max));
    }
}
