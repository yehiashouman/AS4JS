/**
 * @namespace utils
 * @requires 
 * @class BitmapData
 * @author Hayato Araki - http://www.arahaya.com/
 */

function ByteArray()
{
    this.float_pbias = Math.pow(2, 126);
    this.float_psgnd = Math.pow(2, 23);
    this.FLOAT_POSITIVE_INFINITY = (2 - Math.pow(2, -23)) * Math.pow(2, 127);
    this.FLOAT_NEGATIVE_INFINITY = -this.FLOAT_POSITIVE_INFINITY;
    this.double_pbias = Math.pow(2, 1022);
    this.double_psgnd = Math.pow(2, 52);
    this.DOUBLE_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    this.DOUBLE_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    
    /*
     * http://with-love-from-siberia.blogspot.com/2009/11/ieee754-converter.html
     */
    this.floatToBytes=function(n)
    {
        if (isNaN(n)) {
            return [0xff, 0xff, 0xff, 0xff];
        }
        if (n >= this.FLOAT_POSITIVE_INFINITY) {
            return [0x7f, 0x80, 0x00, 0x00];
        }
        if (n <= this.FLOAT_NEGATIVE_INFINITY) {
            return [0xff, 0x80, 0x00, 0x00];
        }
        if (n === 0) {
            return [0x00, 0x00, 0x00, 0x00];
        }
        
        var s = n < 0 ? 0x80 : 0;
        var t = Math.log((s ? -n : n)) / 0.6931471805599453;
        var p = Math.floor(t);
        var e, m;

        if (p < -126) {
            e = 0;
            m = this.float_psgnd * n * this.float_pbias;
        }
        else {
            e = p + 127;
            m = this.float_psgnd * (Math.pow(2, t - p) - 1);
        }

        var result = [0, 0, 0, 0];
        for (var i = 3; i > 0; --i)
        {
            var x = Math.floor(m / 0x100);
            result[i] = m - x * 0x100;
            m = x;
        }

        result[3]  = (result[3] + 0.5) | 0;
        result[1] += (e & 0x01) << 7;
        result[0]  = (e >> 1) + s;
        
        return result;
    }
    
    this.doubleToBytes=function (n)
    {
        if (isNaN(n)) {
            return [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff];
        }
        if (n >= this.DOUBLE_POSITIVE_INFINITY) {
            return [0x7f, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
        }
        if (n <= this.DOUBLE_NEGATIVE_INFINITY) {
            return [0xff, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
        }
        if (n === 0) {
            return [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
        }
        
        var s = n < 0 ? 0x80 : 0;
        var t = Math.log((s ? -n : n)) / 0.6931471805599453;
        var p = Math.floor(t);
        var e, m;

        if (p < -1022) {
            e = 0;
            m = this.double_psgnd * n * this.double_pbias;
        }
        else {
            e = p + 1023;
            m = this.double_psgnd * (Math.pow(2, t - p) - 1);
        }

        var result = [0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 7; i > 0; --i)
        {
            var x = Math.floor(m / 0x100);
            result[i] = m - x * 0x100;
            m = x;
        }
        
        result[7]  = (result[7] + 0.5) | 0;
        result[1] += (e & 0x0f) << 4;
        result[0]  = (e >> 4) + s;
        
        return result;
    };
    
    this.bytesToNumber=function(bytes, bias, pbias, psgnd)
    {
        var n = bytes.length;
        var s = bytes[0] & 0x80;
        var e, m;
        if (n == 4) {
            e = ((bytes[0] & 0x7f) << 1) + (bytes[1] >> 7);
            m = bytes[1] & 0x7f;
        }
        else {
            e = ((bytes[0] & 0x7f) << 4) + (bytes[1] >> 4);
            m = bytes[1] & 0x0f;
        }

        for (var i = 2; i < n; i++)
        {
            m = m * 0x100 + bytes[i];
        }

        if (e == bias * 2 + 1) {
            if (m) { return 0 / 0; }
            return (s ? -1 : +1) / 0;
        }

        var result = e ?
            (m / psgnd + 1) * Math.pow(2, e - bias) :
            m / psgnd / pbias;

        return s ? -result : result;
    };
    
    this.bytesToFloat=function(bytes)
    {
        return bytesToNumber(bytes, 127, this.float_pbias, this.float_psgnd);
    };
    
    this.bytesToDouble=function(bytes)
    {
        return bytesToNumber(bytes, 1023, this.double_pbias, this.double_psgnd);
    };
    
   
   
};
ByteArray.prototype = new Array();
ByteArray.constructor = ByteArray;

ByteArray.prototype.__init__ = function()
{
    this.__bigEndian = true;
    this.__position = 0;
};
ByteArray.prototype.compress = function()
{
};
ByteArray.prototype.uncompress = function()
{
};
ByteArray.prototype.readBoolean = function()
{
    var start = this.__position;
    var end = start + 1;
    if (end > this.length) { throwCustomError(this,2030,"Error");}
    
    var value = this[start];
    this.__position = end;
    return (value) ? true : false;
};
ByteArray.prototype.readByte = function()
{
    var start = this.__position;
    var end = start + 1;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    
    var value = this[start];
    this.__position = end;
    return (value & 0x80) ? -((value ^ 0xFF) + 1) : value;
};
ByteArray.prototype.readUnsignedByte = function()
{
    var start = this.__position;
    var end = start + 1;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    
    var value = this[start];
    this.__position = end;
    return value;
};
ByteArray.prototype.__readShortB = function()
{
    var start = this.__position;
    var end = start + 2;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = this[start] << 8 | (this[start+1] & 0xFF);
    this.__position = end;
    return (value & 0x8000) ? -((value ^ 0xFFFF) + 1) : value;
};
ByteArray.prototype.__readShortL = function()
{
    var start = this.__position;
    var end = start + 2;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = this[end] << 8 | (this[end-1] & 0xFF);
    this.__position = end;
    return (value & 0x8000) ? -((value ^ 0xFFFF) + 1) : value;
};
ByteArray.prototype.readShort = this.__readShortB;
ByteArray.prototype.__readUnsignedShortB = function()
{
    var start = this.__position;
    var end = start + 2;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = this[start] << 8 | (this[start+1] & 0xFF);
    this.__position = end;
    return value;
};
ByteArray.prototype.__readUnsignedShortL = function()
{
    var start = this.__position;
    var end = start + 2;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = this[start] << 8 | (this[start+1] & 0xFF);
    this.__position = end;
    return value;
};
ByteArray.prototype.readUnsignedShort = this.__readUnsignedShortB;
this.__readIntB = function()
{
    var start = this.__position;
    var end = start + 4;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = (this[start] << 24 | (0xFF & this[start+1]) << 16 | (0xFF & this[start+2]) << 8 | (0xFF & this[start+3])) >>> 0;
    this.__position = end;
    return  (value & 0x80000000) ? -((value ^ 0xFFFFFFFF) + 1) : value;
};
ByteArray.prototype.__readIntL = function()
{
    var start = this.__position;
    var end = start + 4;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = (this[end] << 24 | (0xFF & this[end-1]) << 16 | (0xFF & this[end-2]) << 8 | (0xFF & this[end-3])) >>> 0;
    this.__position = end;
    return  (value & 0x80000000) ? -((value ^ 0xFFFFFFFF) + 1) : value;
};
ByteArray.prototype.readInt = this.__readIntB;
ByteArray.prototype.__readUnsignedIntB = function()
{
    var start = this.__position;
    var end = start + 4;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = (this[start] << 24 | (0xFF & this[start+1]) << 16 | (0xFF & this[start+2]) << 8 | (0xFF & this[start+3])) >>> 0;
    this.__position = end;
    return value;
};
ByteArray.prototype.__readUnsignedIntL = function()
{
    var start = this.__position;
    var end = start + 4;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = (this[end] << 24 | (0xFF & this[end-1]) << 16 | (0xFF & this[end-2]) << 8 | (0xFF & this[end-3])) >>> 0;
    this.__position = end;
    return value;
};
ByteArray.prototype.readUnsignedInt = this.__readUnsignedIntB;
ByteArray.prototype.__readFloatB = function()
{
    var start = this.__position;
    var end = start + 4;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = bytesToFloat(this.slice(start, end));
    this.__position = end;
    return value;
};
ByteArray.prototype.__readFloatL = function()
{
    var start = this.__position;
    var end = start + 4;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = bytesToFloat(this.slice(start, end).reverse());
    this.__position = end;
    return value;
};
ByteArray.prototype.readFloat = this.__readFloatB;
ByteArray.prototype.__readDoubleB = function()
{
    var start = this.__position;
    var end = start + 8;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = bytesToDouble(this.slice(start, end));
    this.__position = end;
    return value;
};
ByteArray.prototype.__readDoubleL = function()
{
    var start = this.__position;
    var end = start + 8;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    var value = bytesToDouble(this.slice(start, end).reverse());
    this.__position = end;
    return value;
};
ByteArray.prototype.readDouble = this.__readDoubleB;
ByteArray.prototype.readMultiByte = function(length, charset)
{
    //probably not going to support
    return this.readUTFBytes(length);
};
ByteArray.prototype.readObject = function()
{
    //someday
};
ByteArray.prototype.readUTF = function()
{
    var length = this.readShort();
    return this.readUTFBytes(length);
};
ByteArray.prototype.readUTFBytes = function(length)
{
    var start = this.__position;
    var end = start + length;
    if (end > this.length) { throwCustomError(this,2030,"Error"); }
    
    var chars = [];
    for (var i = start, c = 0; i < end;)
    {
        chars[c++] = String.fromCharCode(this[i++]);
    }
    this.__position = end;
    
    var s = chars.join("");
    return decodeURIComponent(escape(s));
};
ByteArray.prototype.writeByte = function(value)
{
    var position = this.__position;
    this[position++] = value & 0xFF;
    this.__position = position;
    if (position > this.length) { this.length = position; }
};
ByteArray.prototype.writeBoolean = this.writeByte;
ByteArray.prototype.writeBytes = function(bytes, offset, length)
{
    offset = offset | 0;
    length = length | 0 || bytes.length - offset;
    
    var position = this.__position;
    for (var i = offset; i < length; ++i)
    {
        this[position++] = bytes[i];
    }
    this.__position = position;
    if (position > this.length) { this.length = position; }
};
ByteArray.prototype.__writeShortB = function(value)
{
    var position = this.__position;
    this[position++] = value >> 8 & 0xFF;
    this[position++] = value      & 0xFF;
    this.__position = position;
    if (position > this.length) { this.length = position; }
};
ByteArray.prototype.__writeShortL = function(value)
{
    var position = this.__position;
    this[position++] = value      & 0xFF;
    this[position++] = value >> 8 & 0xFF;
    this.__position = position;
    if (position > this.length) { this.length = position; }
};
ByteArray.prototype.writeShort = this.__writeShortB;
ByteArray.prototype.__writeIntB = function(value)
{
    var position = this.__position;
    this[position++] = value >> 24 & 0xFF;
    this[position++] = value >> 16 & 0xFF;
    this[position++] = value >> 8  & 0xFF;
    this[position++] = value       & 0xFF;
    this.__position = position;
    if (position > this.length) { this.length = position; }
};
ByteArray.prototype.__writeIntL = function(value)
{
    var position = this.__position;
    this[position++] = value       & 0xFF;
    this[position++] = value >> 8  & 0xFF;
    this[position++] = value >> 16 & 0xFF;
    this[position++] = value >> 24 & 0xFF;
    this.__position = position;
    if (position > this.length) { this.length = position; }
};
ByteArray.prototype.writeInt = this.__writeIntB;
ByteArray.prototype.writeUnsignedInt = function(value)
{
    this.writeInt(value >>> 0);
};
ByteArray.prototype.__writeFloatB = function(value)
{
    var bytes = floatToBytes(value);
    var position = this.__position;
    this[position++] = bytes[0];
    this[position++] = bytes[1];
    this[position++] = bytes[2];
    this[position++] = bytes[3];
    this.__position = position;
    if (position > this.length) { this.length = position; }
};
ByteArray.prototype.__writeFloatL = function(value)
{
    var bytes = floatToBytes(value);
    var position = this.__position;
    this[position++] = bytes[3];
    this[position++] = bytes[2];
    this[position++] = bytes[1];
    this[position++] = bytes[0];
    this.__position = position;
    if (position > this.length) { this.length = position; }
};
ByteArray.prototype.writeFloat = this.__writeFloatB;
ByteArray.prototype.__writeDoubleB = function(value)
{
    var bytes = doubleToBytes(value);
    var position = this.__position;
    this[position++] = bytes[0];
    this[position++] = bytes[1];
    this[position++] = bytes[2];
    this[position++] = bytes[3];
    this[position++] = bytes[4];
    this[position++] = bytes[5];
    this[position++] = bytes[6];
    this[position++] = bytes[7];
    this.__position = position;
    if (position > this.length) { this.length = position; }
};
ByteArray.prototype.__writeDoubleL = function(value)
{
    var bytes = doubleToBytes(value);
    var position = this.__position;
    this[position++] = bytes[7];
    this[position++] = bytes[6];
    this[position++] = bytes[5];
    this[position++] = bytes[4];
    this[position++] = bytes[3];
    this[position++] = bytes[2];
    this[position++] = bytes[1];
    this[position++] = bytes[0];
    this.__position = position;
    if (position > this.length) { this.length = position; }
};
ByteArray.prototype.writeDouble = this.__writeDoubleB;
ByteArray.prototype.writeMultiByte = function(value, charSet)
{
    //probably not going to support
    this.writeUTFBytes(value);
};
ByteArray.prototype.writeObject = function(value)
{
    //someday
};
ByteArray.prototype.writeUTF = function(value)
{
    var str = unescape(encodeURIComponent(value));
    var length = str.length;
    
    if (length > 0xFFFF) {
        throw new RangeError('Error #2006 : The supplied index is out of bounds.');
    }
    
    this.writeShort(length);
    
    var position = this.__position;
    for (var i = 0; i < length; ++i)
    {
        this[position++] = str.charCodeAt(i);
    }
    this.__position = position;
    if (position > this.length) { this.length = position; }
};
ByteArray.prototype.writeUTFBytes = function(value)
{
    var str = unescape(encodeURIComponent(value));
    var length = str.length;
    
    var position = this.__position;
    for (var i = 0; i < length; ++i)
    {
        this[position++] = str.charCodeAt(i);
    }
    this.__position = position;
    if (position > this.length) { this.length = position; }
};

ByteArray.prototype.__get__bytesAvailable = function()
{
    return this.length - this.__position;
};
ByteArray.prototype.__get__endian = function()
{
    return (this.__bigEndian) ? Endian.BIG_ENDIAN : Endian.LITTLE_ENDIAN;
};
ByteArray.prototype.__set__endian = function(v)
{
    this.__bigEndian = (v == Endian.BIG_ENDIAN);
    var suffix = (this.__bigEndian) ? 'B' : 'L';
    this.readShort = this['__readShort' + suffix];
    this.readUnsignedShort = this['__readUnsignedShort' + suffix];
    this.readInt = this['__readInt' + suffix];
    this.readUnsignedInt = this['__readUnsignedInt' + suffix];
    this.readFloat = this['__readFloat' + suffix];
    this.readDouble = this['__readDouble' + suffix];
    this.writeShort = this['__writeShort' + suffix];
    this.writeInt = this['__writeInt' + suffix];
    this.writeFloat = this['__writeFloat' + suffix];
    this.writeDouble = this['__writeDouble' + suffix];
};
ByteArray.prototype.__get__position = function()
{
    return this.__position;
};
ByteArray.prototype.__set__position = function(v)
{
    if (v > this.length) {
        //fill the array with zeros until length == position
        var len = v - this.length;
        for (var i = 0; i < len; ++i)
        {
            this.push(0);
        }
    }
    this.__position = v | 0;
};

ByteArray.prototype.toString = function()
{
    return this.map(function(element, index, array)
    {
        return String.fromCharCode(element);
    }, this).join("");
};

ByteArray.prototype.toArray = function()
{
    return this.splice(0);
};