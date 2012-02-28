/**
 * @namespace ui 
 * @requires 
 * @class Keyboard
 * @author Yehia Shouman
 */
var Keyboard = function() {

	this.__getClassType = function() {
		return "Keyboard";
	};
};
Keyboard.prototype = new Object();
Keyboard.constructor = Keyboard;
//TODO keyboard methods and properties
Keyboard.isAccessible = function(){};
Keyboard.capsLock = false;
Keyboard.hasVirtualKeyboard=false;
Keyboard.numLock = false;
Keyboard.physicalKeyboardType = "alphanumeric";
Keyboard.BACKSPACE  = 8;
//[static] Constant associated with the key code value for the Backspace key (8).
Keyboard.CAPS_LOCK  = 20;
//[static] Constant associated with the key code value for the Caps Lock key (20).
Keyboard.CONTROL  = 17;
//[static] Constant associated with the key code value for the Control key (17).
Keyboard.DELETE  = 46;
//[static] Constant associated with the key code value for the Delete key (46).
Keyboard.DOWN  = 40;
//[static] Constant associated with the key code value for the Down Arrow key (40).
Keyboard.END  = 35;
//[static] Constant associated with the key code value for the End key (35).
Keyboard.ENTER  = 13;
//[static] Constant associated with the key code value for the Enter key (13).
Keyboard.ESCAPE  = 27;
//[static] Constant associated with the key code value for the Escape key (27).
Keyboard.F1  = 112;
//[static] Constant associated with the key code value for the F1 key (112).
Keyboard.F10  = 121;
//[static] Constant associated with the key code value for the F10 key (121).
Keyboard.F11  = 122;
//[static] Constant associated with the key code value for the F11 key (122).
Keyboard.F12  = 123;
//[static] Constant associated with the key code value for the F12 key (123).
Keyboard.F13  = 124;
//[static] Constant associated with the key code value for the F13 key (124).
Keyboard.F14  = 125;
//[static] Constant associated with the key code value for the F14 key (125).
Keyboard.F15  = 126;
//[static] Constant associated with the key code value for the F15 key (126).
Keyboard.F2  = 113;
//[static] Constant associated with the key code value for the F2 key (113).
Keyboard.F3  = 114;
//[static] Constant associated with the key code value for the F3 key (114).
Keyboard.F4  = 115;
//[static] Constant associated with the key code value for the F4 key (115).
Keyboard.F5  = 116;
//[static] Constant associated with the key code value for the F5 key (116).
Keyboard.F6  = 117;
//[static] Constant associated with the key code value for the F6 key (117).
Keyboard.F7  = 118;
//[static] Constant associated with the key code value for the F7 key (118).
Keyboard.F8  = 119;
//[static] Constant associated with the key code value for the F8 key (119).
Keyboard.F9  = 120;
//[static] Constant associated with the key code value for the F9 key (120).
Keyboard.G  = 71;
//[static] Constant associated with the key code value for the G key (71).
Keyboard.HOME  = 36;
//[static] Constant associated with the key code value for the Home key (36).
Keyboard.INSERT  = 45;
//[static] Constant associated with the key code value for the Insert key (45).
Keyboard.LEFT  = 37;
//[static] Constant associated with the key code value for the Left Arrow key (37).
Keyboard.NUMPAD_0  = 96;
//[static] Constant associated with the key code value for the number 0 key on the number pad (96).
Keyboard.NUMPAD_1  = 97;
//[static] Constant associated with the key code value for the number 1 key on the number pad (97).
Keyboard.NUMPAD_2  = 98;
//[static] Constant associated with the key code value for the number 2 key on the number pad (98).
Keyboard.NUMPAD_3  = 99;
//[static] Constant associated with the key code value for the number 3 key on the number pad (99).
Keyboard.NUMPAD_4  = 100;
//[static] Constant associated with the key code value for the number 4 key on the number pad (100).
Keyboard.NUMPAD_5  = 101;
//[static] Constant associated with the key code value for the number 5 key on the number pad (101).
Keyboard.NUMPAD_6  = 102;
//[static] Constant associated with the key code value for the number 6 key on the number pad (102).
Keyboard.NUMPAD_7  = 103;
//[static] Constant associated with the key code value for the number 7 key on the number pad (103).
Keyboard.NUMPAD_8  = 104;
//[static] Constant associated with the key code value for the number 8 key on the number pad (104).
Keyboard.NUMPAD_9  = 105;
//[static] Constant associated with the key code value for the number 9 key on the number pad (105).
Keyboard.NUMPAD_ADD  = 107;
//[static] Constant associated with the key code value for the addition key on the number pad (107).
Keyboard.NUMPAD_DECIMAL  = 110;
//[static] Constant associated with the key code value for the decimal key on the number pad (110).
Keyboard.NUMPAD_DIVIDE  = 111;
//[static] Constant associated with the key code value for the division key on the number pad (111).
Keyboard.NUMPAD_ENTER  = 108;
//[static] Constant associated with the key code value for the Enter key on the number pad (108).
Keyboard.NUMPAD_MULTIPLY  = 106;
//[static] Constant associated with the key code value for the multiplication key on the number pad (106).
Keyboard.NUMPAD_SUBTRACT  = 109;
//[static] Constant associated with the key code value for the subtraction key on the number pad (109).
Keyboard.PAGE_DOWN  = 34;
//[static] Constant associated with the key code value for the Page Down key (34).
Keyboard.PAGE_UP  = 33;
//[static] Constant associated with the key code value for the Page Up key (33).
Keyboard.RIGHT  = 39;
//[static] Constant associated with the key code value for the Right Arrow key (39).
Keyboard.SHIFT  = 16;
//[static] Constant associated with the key code value for the Shift key (16).
Keyboard.SPACE  = 32;
//[static] Constant associated with the key code value for the Spacebar (32).
Keyboard.TAB  = 9;
//[static] Constant associated with the key code value for the Tab key (9).
Keyboard.UP  = 38;
//[static] Constant associated with the key code value for the Up Arrow key (38).