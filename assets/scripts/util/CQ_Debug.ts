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

    public static log : any = console.log.bind(console, "[INFO] ");
    public static warn : any = console.log.bind(console, "[WARNING] ");
    public static error : any = console.log.bind(console, "[ERROR] ");

    /* Setter & Getter */

    /* Functions */

}
