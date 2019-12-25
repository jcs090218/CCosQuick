/**
 * $File: CQ_KeyCode.ts $
 * $Date: 2019-12-25 10:44:29 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */

/**
 * @desc Keycode.
 *
 * @source https://keycode.info/
 * @source https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
 */
export enum CQ_KeyCode {
    BACKSPACE       = 8,
    TAB             = 9,
    CLEAR           = 12,
    RETURN          = 13,
    ESCAPE          = 27,
    SPACE           = 32,
    EXCLAIM         = 33,   /* Exclamation mark key '!'.  */
    DOUBLE_QUOTE    = 34,   /* Double quote key '"'.      */
    HASH            = 35,   /* Hash key '#'.              */
    DOLLAR          = 36,   /* Dollar sign key '$'.       */
    AMPERSAND       = 38,   /* Ampersand key '&'.         */
    QUOTE           = 39,   /* Quote key '.               */
    LEFT_PAREN      = 40,   /* Left Parenthesis key '('.  */
    RIGHT_PAREN     = 41,   /* Right Parenthesis key ')'. */
    ASTERISK        = 42,   /* Asterisk key '*'.          */
    PLUS            = 187,  /* Plus key '+'.              */
    COMMA           = 188,  /* Comma ',' key.             */
    MINUS           = 189,  /* Minus '-' key.             */
    PERIOD          = 190,  /* Period '.' key.            */
    SLASH           = 191,  /* Slash '/' key.             */

    ALPHA_0         = 48,   /* The '0' key on the top of the alphanumeric keyboard. */
    ALPHA_1         = 49,   /* The '1' key on the top of the alphanumeric keyboard. */
    ALPHA_2         = 50,   /* The '2' key on the top of the alphanumeric keyboard. */
    ALPHA_3         = 51,   /* The '3' key on the top of the alphanumeric keyboard. */
    ALPHA_4         = 52,   /* The '4' key on the top of the alphanumeric keyboard. */
    ALPHA_5         = 53,   /* The '5' key on the top of the alphanumeric keyboard. */
    ALPHA_6         = 54,   /* The '6' key on the top of the alphanumeric keyboard. */
    ALPHA_7         = 55,   /* The '7' key on the top of the alphanumeric keyboard. */
    ALPHA_8         = 56,   /* The '8' key on the top of the alphanumeric keyboard. */
    ALPHA_9         = 57,   /* The '9' key on the top of the alphanumeric keyboard. */

    COLON           = 58,   /* Colon ':' key.                */
    SEMICOLON       = 59,   /* Semicolon ';' key.            */
    LESS            = 60,   /* Less than '<' key.            */
    EQUALS          = 61,   /* Equals '=' key.               */
    GREATER         = 62,   /* Greater than '>' key.         */
    QUESTION        = 63,   /* Question mark '?' key.        */
    AT              = 64,   /* At key '@'.                   */
    LEFT_BRACKET    = 91,   /* Left square bracket key '['.  */
    BACKSLASH       = 92,   /* Backslash key '\'.            */
    RIGHTBTACKET    = 93,   /* Right square bracket key ']'. */
    CARET           = 94,   /* Caret key '^'.                */
    UNDERSCORE      = 95,   /* Underscore '_' key.           */
    BACK_QUOTE      = 96,   /* Back quote key '`'.           */

    A               = 65,
    B               = 66,
    C               = 67,
    D               = 68,
    E               = 69,
    F               = 70,
    G               = 71,
    H               = 72,
    I               = 73,
    J               = 74,
    K               = 75,
    L               = 76,
    M               = 77,
    N               = 78,
    O               = 79,
    P               = 80,
    Q               = 81,
    R               = 82,
    S               = 83,
    T               = 84,
    U               = 85,
    V               = 86,
    W               = 87,
    X               = 88,
    Y               = 89,
    Z               = 90,

    DELETE          = 46,   /* The forward delete key. */

    KEYPAD_0        = 96,   /* Numeric keypad 0.     */
    KEYPAD_1        = 97,   /* Numeric keypad 1.     */
    KEYPAD_2        = 98,   /* Numeric keypad 2.     */
    KEYPAD_3        = 99,   /* Numeric keypad 3.     */
    KEYPAD_4        = 100,  /* Numeric keypad 4.     */
    KEYPAD_5        = 101,  /* Numeric keypad 5.     */
    KEYPAD_6        = 102,  /* Numeric keypad 6.     */
    KEYPAD_7        = 103,  /* Numeric keypad 7.     */
    KEYPAD_8        = 104,  /* Numeric keypad 8.     */
    KEYPAD_9        = 105,  /* Numeric keypad 9.     */
    KEYPAD_PERIOD   = 110,  /* Numeric keypad '.'.    */
    KEYPAD_DIVIDE   = 111,  /* Numeric keypad '/'.   */
    KEYPAD_MULTIPLY = 106,  /* Numeric keypad '*'.   */
    KEYPAD_MINUS    = 109,  /* Numeric keypad '-'.   */
    KEYPAD_PLUS     = 107,  /* Numeric keypad '+'.   */
    KEYPAD_ENTER    = 13,   /* Numeric keypad enter. */
    KEYPAD_EQUALS   = 272,  /* Numeric keypad ' ='.   */

    UP_ARROW        = 38,
    DOWN_ARROW      = 40,
    RIGHT_ARROW     = 39,
    LEFT_ARROW      = 37,
    INSERT          = 45,
    HOME            = 36,
    END             = 35,
    PAGE_UP         = 33,
    PAGE_DOWN       = 34,

    F1              = 112,
    F2              = 113,
    F3              = 114,
    F4              = 115,
    F5              = 116,
    F6              = 117,
    F7              = 118,
    F8              = 119,
    F9              = 120,
    F10             = 121,
    F11             = 122,
    F12             = 123,
    F13             = 124,
    F14             = 125,
    F15             = 126,

    NUM_LOCK        = 144,
    CAPS_LOCK       = 301,
    SCROLL_LOCK     = 302,

    RIGHT_SHIFT     = 16,
    LEFT_SHIFT      = 16,
    RIGHT_CONTROL   = 17,
    LEFT_CONTROL    = 17,
    RIGHT_ALT       = 18,
    LEFT_ALT        = 18,
    RIGHT_COMMAND   = 309,
    LEFT_COMMAND    = 310,
    LEFT_APPLE      = 310,
    LEFT_WINDOWS    = 91,
    RIGHT_WINDOWS   = 91,
    ALT_GR          = 313,
    HELP            = 315,
    PRINT           = 316,
    SYS_REQ         = 317,
    BREAK           = 318,
    MENU            = 319,
}
