var root = this;
root.$events = [];
EventDispatcher.call(this);

var $as4js____core_____Timeline = function() {
	this.$CORE_ELAPSED_TIME = 0;
	var ref = this;
	this.$registeredEnterFrames = [];
	this.$runEnterFrames = function() {
		var evt;
		for ( var i = 0; i < ref.$registeredEnterFrames.length; i++) {
			evt = new Event("enterFrame");
			evt.target = ref.$registeredEnterFrames[i];
			try {
				(ref.$registeredEnterFrames[i]).dispatchEvent(evt);

				// TODO global.js should fix this leak by removing from stack
				// when objects are removed
			} catch (e) {
			}
			;
		}
		;
	};
	this.debug = true;
	this.registerEnterFrame = function(obj) {
		this.$registeredEnterFrames.push(obj);

	};

	this.$autoDeclareIDs = function() {
		alert("here");
		var allTags = document.getElementsByTagName('*');
		var ids = [];
		for ( var i = 0; i < allTags.length; i++) {
			var tag = allTags[i];
			if (tag.id) {
				root[tag.id] = new DisplayObjectContainer(tag.id);
			}
			;
		}
		;
	};

	this.incrementTime = function() {
		ref.$CORE_ELAPSED_TIME++;
		ref.$runEnterFrames();
	};
	this.frameRate = 1 / 15;
	this.intervalID = setInterval(this.incrementTime, this.frameRate * 1000);
	this.errorCodes = {
		1000 : "The system is out of memory.",
		1001 : "The method %m is not implemented.",
		1002 : "The precision argument must be between 0 and 20; got %d	",
		1003 : "The radix argument must be between 2 and 36; got %d",
		1004 : "A method of '%t' was invoked on an incompatible object.	",
		1005 : "Array index is not an integer (%f) ",
		1006 : "Call attempted on an object that is not a function.",
		1007 : "Instantiation attempted on a non-constructor.	",
		1008 : "%n is ambiguous; more than one binding matches.	",
		1009 : "null has no properties.	",
		1010 : "undefined has no properties.	",
		1011 : "Method %m contained illegal opcode %d at offset %d.",
		1012 : "The last instruction exceeded code size. ",
		1013 : "Cannot call OP_findproperty when scopeDepth is 0.",
		1014 : "Class %n could not be found.	",
		1015 : "Method %m cannot set default xml namespace ",
		1017 : "Scope stack overflow.	",
		1018 : "Scope stack underflow.	",
		1019 : "Getscopeobject %d is out of bounds. ",
		1020 : "Code cannot fall off the end of a method. ",
		1021 : "At least one branch target was not on a valid instruction in the method	",
		1023 : "Stack overflow.	",
		1024 : "Stack underflow. ",
		1025 : "An invalid register %d was accessed.	",
		1026 : "Slot %d exceeds slotCount=%d of %t. ",
		1027 : "Method_info %d exceeds method_count=%d.	",
		1028 : "Disp_id %d exceeds max_disp_id=%d of %t. ",
		1029 : "Disp_id %d is undefined on %t.	",
		1030 : "Stack depth unbalanced. %d != %d. ",
		1031 : "Scope depth unbalanced. %d != %d. ",
		1032 : "Cpool index %d out of range %d.	",
		1033 : "Cpool entry %d wrong type. ",
		1034 : "Type Coercion failed: cannot convert %a to %t 	",
		1035 : "Illegal super expression in method %m 	",
		1037 : "Cannot assign to a method %n on %t ",
		1038 : "%n is already defined 	",
		1039 : "Cannot verify method until it is referenced ",
		1040 : "RHS of instanceof must be a Class or Function 	",
		1041 : "RHS of operator must be a Class 	",
		1042 : "Not an ABC file. major_version=%d minor_version=%d",
		1043 : "Invalid code_length=%d 	",
		1044 : "MethodInfo-%d unsupported flags=%d ",
		1045 : "Unsupported traits kind=%d ",
		1046 : "MethodInfo-%d referenced before definition ",
		1047 : "No Entry Point Found 	",
		1049 : "Prototype objects must be vanilla Objects ",
		1050 : "Cannot convert %o to primitive.	",
		1051 : "Illegal early binding access to %t ",
		1052 : "Invalid URI passed to %s function. ",
		1053 : "Illegal override of %n in %t 	",
		1054 : "Illegal range or target offsets in exception handler	",
		1055 : "%S has no properties 	",
		1056 : "Cannot create property %n on %t 	",
		1057 : "%t may only contain methods ",
		1058 : "Illegal operand type: %t must be %t ",
		1059 : "ClassInfo-%d referenced before definition ",
		1060 : "ClassInfo %d exceeds class_count=%d.	",
		1061 : "The value %1 cannot be converted to %2 without losing precision.",
		1063 : "Argument count mismatch on %m. Expected %d, got %d",
		1064 : "Cannot call method %m as constructor 	",
		1065 : "Variable %n is not defined ",
		1066 : "Function('function body') is not supported ",
		1067 : "Native method %m has illegal method body ",
		1068 : "%t and %t cannot be reconciled 	",
		1069 : "Property %n not found on %t and there is no default value",
		1070 : "Method %n not found on %t ",
		1071 : "Function %m has already been bound to %t ",
		1072 : "Disp_id 0 is illegal.	",
		1073 : "Non-override method %m replaced because of duplicate disp_id %d	",
		1075 : "Math is not a function 	",
		1076 : "Math is not a constructor ",
		1077 : "Illegal read of write-only property %n on %t 	",
		1078 : "Illegal opcode/multiname combination: %d <%n> 	",
		1079 : "Native methods not allowed in loaded code ",
		1080 : "Illegal value for namespace ",
		1082 : "No default namespace has been set ",
		1083 : "The prefix '%S' for element '%w' is not bound.	",
		1084 : "Element or attribute ('%w') do not match QName production: QName::=(NCName':')?NCName	",
		1085 : "The element type '%S' must be terminated by the matching end-tag ''.	",
		1086 : "The %s method works only on lists containing one item.	",
		1087 : "Assignment to indexed XML is not allowed. ",
		1088 : "The markup in the document following the root element must be well-formed.",
		1089 : "Assignment to lists with more than one item is not supported	",
		1090 : "XML parser failure: element is malformed ",
		1091 : "XML parser failure: Unterminated CDATA section 	",
		1092 : "XML parser failure: Unterminated XML declaration",
		1093 : "XML parser failure: Unterminated DOCTYPE declaration	",
		1094 : "XML parser failure: Unterminated comment ",
		1095 : "XML parser failure: Unterminated attribute ",
		1096 : "XML parser failure: Unterminated element ",
		1097 : "XML parser failure: Unterminated processing instruction	",
		1098 : "Illegal prefix '%S' for 'no namespace'.	",
		1100 : "Cannot supply flags when constructing one RegExp from another.	",
		1101 : "Cannot verify method %m with unknown scope ",
		1102 : "Illegal default value for type %n ",
		1103 : "Class %n cannot extend final base class 	",
		1104 : "Attribute '%S' was already specified for element '%S'.	",
		1107 : "The ABC data is corrupt, attempt to read out of bounds	",
		1108 : "The OP_newclass opcode was used with the incorrect base class	",
		1109 : "Attempt to directly call unbound function %m from method %m",
		1110 : "%n cannot extend %t ",
		1111 : "%n cannot implement %t 	",
		1112 : "Argument count mismatch on class coercion. Expected 1, got %d	",
		1113 : "OP_newactivation used in method without NEED_ACTIVATION flag	",
		1114 : "OP_getglobalslot or OP_setglobalslot used with no global scope	",
		1115 : "%n is not a constructor 	",
		1116 : "second argument to Function.prototype.apply must be an array	",
		1500 : "Error opening file '%S'. ",
		1501 : "Error writing to file '%S'. ",
		1502 : "A script has executed for longer than 15 seconds.",
		1503 : "A script did not exit in a timely fashion and was terminated.	",
		1504 : "End of file ",
		1505 : "The string index %d is out of bounds; must be in range %d to %d.",
		1506 : "The range specified is invalid.	",
		1507 : "Argument '%s' may not be null.	",
		1508 : "The value specified for argument '%s' is invalid.",
		1509 : "There was an error decompressing the data. ",
		1510 : "When the callback argument is a method of a class, the optional argument must be null.	",
		2000 : "No active security context. ",
		2001 : "Too few arguments were specified; got %1, %2 expected.	",
		2002 : "Operation attempted on invalid socket.	",
		2003 : "Invalid socket port number specified.	",
		2004 : "One of the parameters is invalid. ",
		2005 : "Parameter %1 is of the incorrect type. Should be type %2.",
		2006 : "The supplied index is out of bounds.	",
		2007 : "Parameter %1 must be non-null.	",
		2008 : "Parameter %1 must be one of the accepted values.",
		2009 : "This method cannot be used on a text field with a style sheet.	",
		2010 : "Local-with-filesystem SWF files are not permitted to use sockets.",
		2011 : "Socket connection failed to %1:%2. ",
		2012 : "%1 class cannot be instantiated. ",
		2013 : "Feature can only be used in Flash Authoring.	",
		2014 : "Feature is not available at this time.	",
		2015 : "Invalid BitmapData. ",
		2017 : "Only trusted local files may cause the Flash Player to exit.	",
		2018 : "System.exit is only available in the standalone Flash Player.	",
		2019 : "Depth specified is invalid. ",
		2020 : "MovieClips objects with different parents cannot be swapped.	",
		2021 : "Object creation failed.	",
		2022 : "Class %1 must inherit from DisplayObject to link to a symbol.	",
		2023 : "Class %1 must inherit from Sprite to link to the root.	",
		2024 : "An object cannot be added as a child of itself.	",
		2025 : "The supplied DisplayObject must be a child of the caller.",
		2026 : "An error occurred navigating to the URL %1. ",
		2027 : "Parameter %1 must be a non-negative number; got %2.",
		2028 : "Local-with-filesystem SWF file %1 cannot access Internet URL %2.",
		2029 : "This URLStream object does not have a stream opened.	",
		2030 : "End of file was encountered.	",
		2031 : "Socket Error.	",
		2032 : "Stream Error.	",
		2033 : "Key Generation Failed.	",
		2034 : "An invalid digest was supplied.	",
		2035 : "URL Not Found.	",
		2036 : "Load Never Completed.	",
		2037 : "Functions called in incorrect sequence, or earlier call was unsuccessful.",
		2038 : "File I/O Error.This error occurs when an application can't get file size, creation date or modification data using the FileReference API.",
		2039 : "Invalid remote URL protocol. The remote URL protocol must be HTTP or HTTPS.",
		2041 : "Only one file browsing session may be performed at a time.",
		2042 : "The digest property is not supported by this load operation.	",
		2044 : "Unhandled File I/O Error.",
		2046 : "The loaded file did not have a valid signature.	",
		2047 : "Security sandbox violation: %1: %2 cannot access %3.	",
		2048 : "Security sandbox violation: %1 cannot load data from %2.",
		2049 : "Security sandbox violation: %1 cannot upload data to %2.",
		2051 : "Security sandbox violation: %1 cannot evaluate scripting URLs within %2 (allowScriptAccess is %3). Attempted URL was %4.",
		2052 : "Only String arguments are permitted for allowDomain and allowInsecureDomain.	",
		2053 : "Security sandbox violation: %1 cannot clear an interval timer set by %2.",
		2054 : "The value of Security.exactSettings cannot be changed after it has been used.	",
		2055 : "The print job could not be started. ",
		2056 : "The print job could not be sent to the printer.	",
		2057 : "The page could not be added to the print job.	",
		2058 : "There was an error decompressing the data. ",
		2059 : "Security sandbox violation: %1 cannot overwrite an ExternalInterface callback added by %2.",
		2060 : "Security sandbox violation: ExternalInterface caller %1 cannot access %2.",
		2061 : "No ExternalInterface callback %1 registered.	",
		2062 : "Children of Event must override clone() {return new MyEventClass (...);}.",
		2063 : "Error attempting to execute IME command. ",
		2065 : "The focus cannot be set for this target. ",
		2066 : "The Timer delay specified is out of range. ",
		2067 : "The ExternalInterface is not available in this container. ExternalInterface requires Internet Explorer ActiveX, Firefox, Mozilla 1.7.5 and greater, or other browsers that support NPRun",
		2068 : "Invalid sound.	",
		2069 : "The Loader class does not implement this method.",
		2070 : "Security sandbox violation: caller %1 cannot access Stage owned by %2.	",
		2071 : "The Stage class does not implement this property or method.",
		2073 : "There was a problem saving the application to disk.",
		2074 : "The stage is too small to fit the download ui.	",
		2075 : "The downloaded file is invalid.	",
		2077 : "This filter operation cannot be performed with the specified input parameters.	",
		2078 : "The name property of a Timeline-placed object cannot be modified.",
		2079 : "Classes derived from Bitmap can only be associated with defineBits characters (bitmaps).",
		2082 : "Connect failed because the object is already connected.	",
		2083 : "Close failed because the object is not connected.",
		2084 : "The AMF encoding of the arguments cannot exceed 40K.	",
		2085 : "Parameter %1 must be non-empty string.	",
		2086 : "A setting in the mms.cfg file prohibits this FileReference request.",
		2087 : "The FileReference.download() file name contains prohibited characters.	",
		2088 : "The Proxy class does not implement getProperty. It must be overridden by a subclass.	",
		2089 : "The Proxy class does not implement setProperty. It must be overridden by a subclass.	",
		2090 : "The Proxy class does not implement callProperty. It must be overridden by a subclass.	",
		2091 : "The Proxy class does not implement hasProperty. It must be overridden by a subclass.	",
		2092 : "The Proxy class does not implement deleteProperty. It must be overridden by a subclass.	",
		2093 : "The Proxy class does not implement getDescendants. It must be overridden by a subclass.	",
		2094 : "Event dispatch recursion overflow. ",
		2095 : "%1 was unable to invoke callback %2.	",
		2096 : "The HTTP request header %1 cannot be set via ActionScript.",
		2097 : "The FileFilter Array is not in the correct format.",
		2098 : "The loading object is not a .swf file, you cannot request SWF properties from it.",
		2099 : "The loading object is not sufficiently loaded to provide this information.",
		2100 : "The ByteArray parameter in Loader.loadBytes() must have length greater than 0.	",
		2101 : "The String passed to URLVariables.decode() must be a URL-encoded query string containing name/value pairs.",
		2102 : "The before XMLNode parameter must be a child of the caller.",
		2103 : "XML recursion failure: new child would create infinite loop.	",
		2105 : "The Proxy class does not implement nextNameIndex. It must be overridden by a subclass.	",
		2106 : "The Proxy class does not implement nextName. It must be overridden by a subclass.",
		2107 : "The Proxy class does not implement nextValue. It must be overridden by a subclass.",
		2108 : "Scene %1 was not found.	",
		2109 : "Frame label %1 not found in scene %2.	",
		2110 : "The value of Security.disableAVM1Loading cannot be set unless the caller can access the stage and is in an ActionScript 3.0 SWF file.	",
		2111 : "Security.disableAVM1Loading is true so the current load of the ActionScript 1.0/2.0 SWF file has been blocked.	",
		2112 : "Provided parameter LoaderContext.ApplicationDomain is from a disallowed domain.	",
		2113 : "Provided parameter LoaderContext.SecurityDomain is from a disallowed domain.	",
		2114 : "Parameter %1 must be null. ",
		2115 : "Parameter %1 must be false. ",
		2116 : "Parameter %1 must be true. ",
		2118 : "The LoaderInfo class does not implement this method.	",
		2119 : "Security sandbox violation: caller %1 cannot access LoaderInfo.applicationDomain owned by %2.	",
		2121 : "Security sandbox violation: %1: %2 cannot access %3. This may be worked around by calling Security.allowDomain.	",
		2122 : "Security sandbox violation: %1: %2 cannot access %3. A policy file is required, but the checkPolicyFile flag was not set when this media was loaded.	",
		2123 : "Security sandbox violation: %1: %2 cannot access %3. No policy files granted access.	",
		2124 : "Loaded file is an unknown type.	",
		2125 : "Security sandbox violation: %1 cannot use Runtime Shared Library %2 because crossing the boundary between ActionScript 3.0 and ActionScript 1.0/2.0 objects is not allowed.",
		2126 : "NetConnection object must be connected.	",
		2127 : "FileReference POST data cannot be type ByteArray.",
		2129 : "Connection to %1 failed. ",
		2130 : "Unable to flush SharedObject.	",
		2131 : "Definition %1 cannot be found.	",
		2132 : "NetConnection.connect cannot be called from a netStatus event handler.	",
		2133 : "Callback %1 is not registered.	",
		2134 : "Cannot create SharedObject. ",
		2136 : "The SWF file %1 contains invalid data.	",
		2137 : "Security sandbox violation: %1 cannot navigate window %2 within %3 (allowScriptAccess is %4). Attempted URL was %5.",
		2138 : "Rich text XML could not be parsed. ",
		2139 : "SharedObject could not connect.	",
		2140 : "Security sandbox violation: %1 cannot load %2. Local-with-filesystem and local-with-networking SWF files cannot load each other.",
		2141 : "Only one PrintJob may be in use at a time. ",
		2142 : "Security sandbox violation: local SWF files cannot use the LoaderContext.securityDomain property. %1 was attempting to load %2.	",
		2143 : "AccessibilityImplementation.get_accRole() must be overridden from its default.	",
		2144 : "AccessibilityImplementation.get_accState() must be overridden from its default.	",
		2145 : "Cumulative length of requestHeaders must be less than 8192 characters.	",
		2146 : "Security sandbox violation: %1 cannot call %2 because the HTML/container parameter allowNetworking has the value %3.	",
		2147 : "Forbidden protocol in URL %1.	",
		2148 : "SWF file %1 cannot access local resource %2. Only local-with-filesystem and trusted local SWF files may access local resources.	",
		2149 : "Security sandbox violation: %1 cannot make fscommand calls to %2 (allowScriptAccess is %3).",
		2150 : "An object cannot be added as a child to one of it's children (or children's children, etc.).	",
		2151 : "You cannot enter full screen mode when the settings dialog is visible.	",
		2152 : "Full screen mode is not allowed. ",
		2153 : "The URLRequest.requestHeaders array must contain only non-NULL URLRequestHeader objects.",
		2154 : "The NetStream Object is invalid. This may be due to a failed NetConnection.",
		2155 : "The ExternalInterface.call functionName parameter is invalid. Only alphanumeric characters are supported.",
		2156 : "Port %1 may not be accessed using protocol %2. Calling SWF was %3.",
		2157 : "Rejecting URL %1 because the 'asfunction:' protocol may only be used for link targets, not for networking APIs.	",
		2158 : "The NetConnection Object is invalid. This may be due to a dropped NetConnection.",
		2159 : "The SharedObject Object is invalid. ",
		2160 : "The TextLine is INVALID and cannot be used to access the current state of the TextBlock.",
		2161 : "An internal error occured while laying out the text.	",
		2162 : "The Shader output type is not compatible for this operation.	",
		2163 : "The Shader input type %1 is not compatible for this operation.	",
		2164 : "The Shader input %1 is missing or an unsupported type.	",
		2165 : "The Shader input %1 does not have enough data.	",
		2166 : "The Shader input %1 lacks valid dimensions. ",
		2167 : "The Shader does not have the required number of inputs for this operation.",
		2168 : "Static text lines have no atoms and no reference to a text block.",
		2169 : "The method %1 may not be used for browser scripting. The URL %2 requested by %3 is being ignored. If you intend to call browser script, use navigateToURL instead.",
		2170 : "Security sandbox violation: %1 cannot send HTTP headers to %2.	",
		2171 : "The Shader object contains no byte code to execute.",
		2172 : "The ShaderJob is already running or finished.	",
		2173 : "Unable to read object in stream. The class %1 does not implement flash.utils.IExternalizable but is aliased to an externalizable class.	",
		2174 : "Only one download, upload, load or save operation can be active at a time on each FileReference.",
		2175 : "One or more elements of the content of the TextBlock has a null ElementFormat.	",
		2176 : "Certain actions, such as those that display a pop-up window, may only be invoked upon user interaction, for example by a mouse click or button press.	",
		2177 : "The Shader input %1 is too large. ",
		2178 : "The Clipboard.generalClipboard object must be used instead of creating a new Clipboard.	",
		2179 : "The Clipboard.generalClipboard object may only be read while processing a flash.events.Event.PASTE event.",
		2180 : "It is illegal to move AVM1 content (AS1 or AS2) to a different part of the displayList when it has been loaded into AVM2 (AS3) content.	",
		2181 : "The TextLine class does not implement this property or method.	",
		2182 : "Invalid fieldOfView value. The value must be greater than 0 and less than 180.	",
		2183 : "Scale values must not be zero.	",
		2184 : "The ElementFormat object is locked and cannot be modified.",
		2185 : "The FontDescription object is locked and cannot be modified.	",
		2186 : "Invalid focalLength %1.	",
		2187 : "Invalid orientation style %1. Value must be one of 'Orientation3D.EULER_ANGLES', 'Orientation3D.AXIS_ANGLE', or 'Orientation3D.QUATERNION'.",
		2188 : "Invalid raw matrix. Matrix must be invertible.	",
		2189 : "A Matrix3D can not be assigned to more than one DisplayObject.	",
		2190 : "The attempted load of %1 failed as it had a Content-Disposition of attachment set.",
		2191 : "The Clipboard.generalClipboard object may only be written to as the result of user interaction, for example by a mouse click or button press.	",
		2192 : "An unpaired Unicode surrogate was encountered in the input.",
		2193 : "Security sandbox violation: %1: %2 cannot access %3.	",
		2200 : "The SystemUpdater class is not supported by this player.",
		2201 : "The requested update type is not supported on this operating system.	",
		2202 : "Only one SystemUpdater action is allowed at a time.",
		2203 : "The requested SystemUpdater action cannot be completed.	",
		2204 : "This operation cannot be canceled because it is waiting for user interaction.	",
		2205 : "Invalid update type %1.	",
		3000 : "Illegal path name. ",
		3001 : "File or directory access denied. ",
		3002 : "File or directory exists. ",
		3003 : "File or directory does not exist. ",
		3004 : "Insufficient file space. ",
		3005 : "Insufficient system resources.	",
		3006 : "Not a file. ",
		3007 : "Not a directory. ",
		3008 : "Read-only or write-protected media. ",
		3009 : "Cannot move file or directory to a different device.	",
		3010 : "Directory is not empty.	",
		3011 : "Move or copy destination already exists. ",
		3012 : "Cannot delete file or directory. ",
		3013 : "File or directory is in use.	",
		3014 : "Cannot copy or move a file or directory to overwrite a containing directory.	",
		3015 : "Loader.loadBytes() is not permitted to load content with executable code.",
		3016 : "No application was found that can open this file.",
		3100 : "A SQLConnection cannot be closed while statements are still executing.	",
		3101 : "Database connection is already open.	",
		3102 : "Name argument specified was invalid. It must not be null or empty.",
		3103 : "Operation cannot be performed while there is an open transaction on this connection.	",
		3104 : "A SQLConnection must be open to perform this operation.	",
		3105 : "Operation is only allowed if a connection has an open transaction.",
		3106 : "Property cannot be changed while SQLStatement.executing is true.",
		3107 : "%1 may not be called unless SQLResult.complete is false.",
		3108 : "Operation is not permitted when the SQLStatement.text property is not set.",
		3109 : "Operation is not permitted when the SQLStatement.sqlConnection property is not set.",
		3110 : "Operation cannot be performed while SQLStatement.executing is true.",
		3111 : "An invalid schema type was specified.	",
		3112 : "An invalid transaction lock type was specified.",
		3113 : "Reference specified is not of type File. ",
		3114 : "An invalid open mode was specified.	",
		3115 : "SQL Error. ",
		3116 : "An internal logic error occurred. ",
		3117 : "Access permission denied. ",
		3118 : "Operation aborted. ",
		3119 : "Database file is currently locked. ",
		3120 : "Table is locked. ",
		3121 : "Out of memory.	",
		3122 : "Attempt to write a readonly database.	",
		3123 : "Database disk image is malformed. ",
		3124 : "Insertion failed because database is full. ",
		3125 : "Unable to open the database file. ",
		3126 : "Database lock protocol error.	",
		3127 : "Database is empty. ",
		3128 : "Disk I/O error occurred. ",
		3129 : "The database schema changed.	",
		3130 : "Too much data for one row of a table.	",
		3131 : "Abort due to constraint violation. ",
		3132 : "Data type mismatch. ",
		3133 : "An internal error occurred. ",
		3134 : "Feature not supported on this operating system.	",
		3135 : "Authorization denied.	",
		3136 : "Auxiliary database format error. ",
		3137 : "An index specified for a parameter was out of range.	",
		3138 : "File opened is not a database file. ",
		3139 : "The page size specified was not valid for this operation.",
		3140 : "The encryption key size specified was not valid for this operation. Keys must be exactly 16 bytes in length",
		3141 : "The requested database configuration is not supported.	",
		3143 : "Unencrypted databases may not be reencrypted.	",
		3200 : "Cannot perform operation on closed window. ",
		3201 : "Adobe Reader cannot be found.	",
		3202 : "Adobe Reader 8.1 or later cannot be found. ",
		3203 : "Default Adobe Reader must be version 8.1 or later.",
		3204 : "An error ocurred trying to load Adobe Reader.	",
		3205 : "Only application-sandbox content can access this feature.",
		3206 : "Caller %1 cannot set LoaderInfo property %2.	",
		3207 : "Application-sandbox content cannot access this feature.	",
		3208 : "Attempt to access invalid clipboard.	",
		3209 : "Attempt to access dead clipboard. ",
		3210 : "The application attempted to reference a JavaScript object in a HTML page that is no longer loaded.",
		3211 : "Drag and Drop File Promise error: %1 	",
		3212 : "Cannot perform operation on a NativeProcess that is not running.",
		3213 : "Cannot perform operation on a NativeProcess that is already running.	",
		3214 : "NativeProcessStartupInfo.executable does not specify a valid executable file.	",
		3215 : "NativeProcessStartupInfo.workingDirectory does not specify a valid directory.	",
		3216 : "Error while reading data from NativeProcess.standardOutput.",
		3217 : "Error while reading data from NativeProcess.standardError.",
		3218 : "Error while writing data to NativeProcess.standardInput.",
		3219 : "The NativeProcess could not be started. '%1' 	",
		3220 : "Action '%1' not allowed in current security context '%2'.",
		3221 : "Adobe Flash Player cannot be found. ",
		3222 : "The installed version of Adobe Flash Player is too old.	",
		3223 : "DNS lookup error: platform error %1 ",
		3224 : "Socket message too long 	",
		3225 : "Cannot send data to a location when connected.	",
		3226 : "Cannot import a SWF file when LoaderContext.allowCodeImport is false.	",
		3300 : "Voucher is invalid. ",
		3301 : "User authentication failed. ",
		3302 : "Flash Access server does not support SSL. ",
		3303 : "Content expired. ",
		3304 : "User authorization failed (for example, the user has not purchased the content).",
		3305 : "Can't connect to the server.	",
		3306 : "Client update required (Flash Access server requires new client).",
		3307 : "Generic internal Flash Access failure.	",
		3308 : "Wrong voucher key. ",
		3309 : "Video content is corrupted. ",
		3310 : "The AIR application or Flash Player SWF does not match the one specified in the DRM policy.",
		3311 : "The version of the application does not match the one specified in the DRM policy.",
		3312 : "Verification of voucher failed.	",
		3313 : "Write to the file system failed. ",
		3314 : "Verification of FLV/F4V header file failed. ",
		3315 : "The current security context does not allow this operation.	",
		3316 : "The value of LocalConnection.isPerUser cannot be changed because it has already been locked by a call to LocalConnection.connect, .send, or .close.",
		3317 : "Failed to load Flash Access module.	",
		3318 : "Incompatible version of Flash Access module found.",
		3319 : "Missing Flash Access module API entry point.	",
		3320 : "Generic internal Flash Access failure.	",
		3321 : "Individualization failed. ",
		3322 : "Device binding failed.	",
		3323 : "The internal stores are corrupted. ",
		3324 : "Reset license files and the client will fetch a new machine token.",
		3325 : "Internal stores are corrupt.	",
		3326 : "Call customer support.	",
		3327 : "Clock tampering detected. ",
		3328 : "Server error; retry the request. ",
		3329 : "Error in application-specific namespace. ",
		3330 : "Need to authenticate the user and reacquire the voucher.",
		3331 : "Content is not yet valid. ",
		3332 : "Cached voucher has expired. Reacquire the voucher from the server.",
		3333 : "The playback window for this policy has expired.",
		3334 : "This platform is not allowed to play this content.",
		3335 : "Invalid version of Flash Access module. Upgrade AIR or Flash Access module for the Flash Player.",
		3336 : "This platform is not allowed to play this content.",
		3337 : "Upgrade Flash Player or AIR and retry playback.	",
		3338 : "Unknown connection type. ",
		3339 : "Can't play back on analog device. Connect to a digital device.	",
		3340 : "Can't play back because connected analog device doesn't have the correct capabilities.	",
		3341 : "Can't play back on digital device. ",
		3342 : "The connected digital device doesn't have the correct capabilities.",
		3343 : "Internal Error. ",
		3344 : "Missing Flash Access module.	",
		3345 : "This operation is not permitted with content protected using Flash Access.",
		3400 : "An error occured while executing JavaScript code.",
		3401 : "Security sandbox violation: An object with this name has already been registered from another security domain.	",
		3402 : "Security sandbox violation: Bridge caller %1 cannot access %2."
	};

};

$as4js____core_____Timeline.prototype = new Object();
$as4js____core_____Timeline.constructor = $as4js____core_____Timeline;
var $as4js____core_____timeline = new $as4js____core_____Timeline();
root.$as4js____core_____timeline = $as4js____core_____timeline;
/*
 * Returns the class name of the argument or undefined if it's not a valid
 * JavaScript object.
 */
function throwCustomError(obj, errorCode, extraMessage) {

	var errorText = "IOErrorEvent"
			+ ": Error #"
			+ errorCode
			+ ": "
			+ $as4js____core_____timeline.errorCodes[errorCode].split("%1")
					.join("IOErrorEvent");
	errorText += "\n    at MainTimeline/" + printStackTrace().join("\n    ");
	if (extraMessage)
		errorText += "Runtime Error Details: " + extraMessage;
	if (obj)
		obj.dispatchEvent.call(obj, (new IOErrorEvent(IOErrorEvent.IO_ERROR,
				errorCode, errorText)));
	console.log(errorText);

};
window.requestAnimFrame = (function(callback) {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame || window.oRequestAnimationFrame
			|| window.msRequestAnimationFrame || function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
})();
var isIE = function() {
	return navigator.appName == 'Microsoft Internet Explorer';
};
var isXMLName = function(str) {
	// TODO global isXMLName;

};
var uint = function(value) {
	return Math.abs(Number(value));
};
function viewport() {
	var e = window, a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	;
	return {
		width : e[a + 'Width'],
		height : e[a + 'Height']
	};
};

function navigateToURL(urlReq, targetWindow, winOptionsObj) {

	var strOptions = "";
	if (winOptionsObj) {
		var strArr = [];
		for ( var i in winOptionsObj) {

			strArr.push(i + "=" + parseInt(winOptionsObj[i]));

		}
		;
		strOptions = strArr.join(",");
	}
	;
	return window.open(urlReq.url, targetWindow, strOptions);

}

function getStyle(el, style) {
	if (!document.getElementById)
		return;

	var value = el.style[toCamelCase(style)];

	if (!value)
		if (document.defaultView)
			value = document.defaultView.getComputedStyle(el, "")
					.getPropertyValue(style);

		else if (el.currentStyle)
			value = el.currentStyle[toCamelCase(style)];

	return value;
};
function setStyle(objId, style, value) {
	document.getElementById(objId).style[style] = value;
};
function toCamelCase(sInput) {
	var oStringList = sInput.split('-');
	if (oStringList.length == 1)
		return oStringList[0];
	var ret = sInput.indexOf("-") == 0 ? oStringList[0].charAt(0).toUpperCase()
			+ oStringList[0].substring(1) : oStringList[0];
	for ( var i = 1, len = oStringList.length; i < len; i++) {
		var s = oStringList[i];
		ret += s.charAt(0).toUpperCase() + s.substring(1);
	}
	return ret;
};

var defineAccessorProperty = function(classRef, propName, setter, getter,
		isStatic) {
	var defineOn = isStatic ? classRef : classRef.prototype;
	try {
		if (Object.defineProperty) {

			Object.defineProperty(defineOn, propName, {
				get : getter ? getter : function() {
					return null;
				},
				set : setter ? setter : function(val) {
				}

			});

		} else {

			defineOn.__defineSetter__(propName, setter ? setter
					: function(val) {
					});
			defineOn.__defineGetter__(propName, getter ? getter : function() {
				return null;
			});
		}
	} catch (e) {

		alert(e);
	}

};

function listen(evnt, elem, func) {
	if (elem.addEventListener) // W3C DOM
		elem.addEventListener(evnt, func, false);
	else if (elem.attachEvent) { // IE DOM
		var r = elem.attachEvent("on" + evnt, func);
		return r;
	} else
		window.alert('I\'m sorry Dave, I\'m afraid I can\'t do that.');
}
listen("load", window, function() {
	alert("load");
	$as4js____core_____timeline.$autoDeclareIDs();
	// $as4js____core_____timeline.registerEnterFrame(this);
	// INTERNAL DECLARATIONS

});
listen("mousemove", window, function(e) {
	if (document.body) {
		var event = e || window.event;
		var dbody = document.body;
		var padding = dbody.style["padding"];
		window.mouseX = event.pageX - parseInt(padding) || event.clientX
				+ dbody.scrollLeft;
		window.mouseY = event.pageY - parseInt(padding) || event.clientY
				+ dbody.scrollTop;
	}
	;

});

function trace() {
	var str = "";
	var i = 0;
	while (i < arguments.length) {
		str += arguments[i] + " ";
		i++;

	}
	;
	output(str);

}
function traceObj(obj) {
	var str = "";
	var separator = "\n";
	for ( var i in obj) {
		try {
			str += separator + i + ":=" + obj[i];
		} catch (e) {
		}
		;
	}
	;
	output(str);

};
function traceObjStartsWith(obj, withStr) {
	var str = "";
	var separator = "\n";
	for ( var i in obj) {
		if (i.indexOf(withStr) != -1) {
			str += separator + i + "=" + obj[i];
		}

	}
	;
	output(str);

};
function output(txt) {
	if ($as4js____core_____timeline.debug) {
		console.log(txt);
	} else {
		alert(txt);

	}
};