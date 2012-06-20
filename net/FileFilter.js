/**
 * @namespace net 
 * @requires 
 * @class FileFilter
 * @author Yehia Shouman
 */
var FileFilter = function(description, extension, macType) {
	
	this.__getClassType = function() {
		return "FileFilter";
	};
	this.__extension= extension? extension.split(" ").join(""): "";
	this.__extension_arr = this.__extension.split(";");
	this.__extensionMAC = macType? macType.split(" ").join("") : "";
	this.description = description;
};
FileFilter.prototype = new Object();
FileFilter.constructor = FileFilter;
//public property description setter and getter
defineAccessorProperty(FileFilter, "extension", function(val) {
	this.__extension= val.split(" ").join("");
	this.__extension_arr = this.__extension.split(";");
}, function() {
	return this.__extension;
});
//public property description setter and getter
defineAccessorProperty(FileFilter, "macType", function(val) {
	this.__extensionMac = val.split(" ").join("");
}, function() {
	return this.__extensionMac;
});
