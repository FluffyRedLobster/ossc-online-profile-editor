"use strict";

// TextEncoder polyfill for Edge
if (typeof window.TextEncoder === "undefined") {
    window.TextEncoder=function TextEncoder(){};
    TextEncoder.prototype.encode = function encode(str) {
        "use strict";
        var Len = str.length, resPos = -1;
        var resArr = typeof Uint8Array === "undefined" ? new Array(Len * 2) : new Uint8Array(Len * 3);
        for (var point=0, nextcode=0, i = 0; i !== Len; ) {
            point = str.charCodeAt(i), i += 1;
            if (point >= 0xD800 && point <= 0xDBFF) {
                if (i === Len) {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; break;
                }
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                nextcode = str.charCodeAt(i);
                if (nextcode >= 0xDC00 && nextcode <= 0xDFFF) {
                    point = (point - 0xD800) * 0x400 + nextcode - 0xDC00 + 0x10000;
                    i += 1;
                    if (point > 0xffff) {
                        resArr[resPos += 1] = (0x1e/*0b11110*/<<3) | (point>>>18);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>12)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/);
                        continue;
                    }
                } else {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; continue;
                }
            }
            if (point <= 0x007f) {
                resArr[resPos += 1] = (0x0/*0b0*/<<7) | point;
            } else if (point <= 0x07ff) {
                resArr[resPos += 1] = (0x6/*0b110*/<<5) | (point>>>6);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)  | (point&0x3f/*0b00111111*/);
            } else {
                resArr[resPos += 1] = (0xe/*0b1110*/<<4) | (point>>>12);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)    | ((point>>>6)&0x3f/*0b00111111*/);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)    | (point&0x3f/*0b00111111*/);
            }
        }
        if (typeof Uint8Array!=="undefined") return new Uint8Array(resArr.buffer.slice(0, resPos+1));
        else return resArr.length === resPos+1 ? resArr : resArr.slice(0, resPos+1); // IE 6-9
    };
    TextEncoder.prototype.toString = function(){return "[object TextEncoder]"};
    try { // Object.defineProperty only works on DOM prototypes in IE8
        Object.defineProperty(TextEncoder.prototype,"encoding",{
            get:function(){if(TextEncoder.prototype.isPrototypeOf(this)) return"utf-8";
                           else throw TypeError("Illegal invocation");}
        });
    } catch(e) { /*IE6-8 fallback*/ TextEncoder.prototype.encoding = "utf-8"; }
    if(typeof Symbol!=="undefined")TextEncoder.prototype[Symbol.toStringTag]="TextEncoder";
}

var Latinise={};Latinise.latin_map={
    "Á":"A",
    "Ă":"A",
    "Ắ":"A",
    "Ặ":"A",
    "Ằ":"A",
    "Ẳ":"A",
    "Ẵ":"A",
    "Ǎ":"A",
    "Â":"A",
    "Ấ":"A",
    "Ậ":"A",
    "Ầ":"A",
    "Ẩ":"A",
    "Ẫ":"A",
    "Ä":"A",
    "Ǟ":"A",
    "Ȧ":"A",
    "Ǡ":"A",
    "Ạ":"A",
    "Ȁ":"A",
    "À":"A",
    "Ả":"A",
    "Ȃ":"A",
    "Ā":"A",
    "Ą":"A",
    "Å":"A",
    "Ǻ":"A",
    "Ḁ":"A",
    "Ⱥ":"A",
    "Ã":"A",
    "Ꜳ":"AA",
    "Æ":"AE",
    "Ǽ":"AE",
    "Ǣ":"AE",
    "Ꜵ":"AO",
    "Ꜷ":"AU",
    "Ꜹ":"AV",
    "Ꜻ":"AV",
    "Ꜽ":"AY",
    "Ḃ":"B",
    "Ḅ":"B",
    "Ɓ":"B",
    "Ḇ":"B",
    "Ƀ":"B",
    "Ƃ":"B",
    "Ć":"C",
    "Č":"C",
    "Ç":"C",
    "Ḉ":"C",
    "Ĉ":"C",
    "Ċ":"C",
    "Ƈ":"C",
    "Ȼ":"C",
    "Ď":"D",
    "Ḑ":"D",
    "Ḓ":"D",
    "Ḋ":"D",
    "Ḍ":"D",
    "Ɗ":"D",
    "Ḏ":"D",
    "ǲ":"D",
    "ǅ":"D",
    "Đ":"D",
    "Ƌ":"D",
    "Ǳ":"DZ",
    "Ǆ":"DZ",
    "É":"E",
    "Ĕ":"E",
    "Ě":"E",
    "Ȩ":"E",
    "Ḝ":"E",
    "Ê":"E",
    "Ế":"E",
    "Ệ":"E",
    "Ề":"E",
    "Ể":"E",
    "Ễ":"E",
    "Ḙ":"E",
    "Ë":"E",
    "Ė":"E",
    "Ẹ":"E",
    "Ȅ":"E",
    "È":"E",
    "Ẻ":"E",
    "Ȇ":"E",
    "Ē":"E",
    "Ḗ":"E",
    "Ḕ":"E",
    "Ę":"E",
    "Ɇ":"E",
    "Ẽ":"E",
    "Ḛ":"E",
    "Ꝫ":"ET",
    "Ḟ":"F",
    "Ƒ":"F",
    "Ǵ":"G",
    "Ğ":"G",
    "Ǧ":"G",
    "Ģ":"G",
    "Ĝ":"G",
    "Ġ":"G",
    "Ɠ":"G",
    "Ḡ":"G",
    "Ǥ":"G",
    "Ḫ":"H",
    "Ȟ":"H",
    "Ḩ":"H",
    "Ĥ":"H",
    "Ⱨ":"H",
    "Ḧ":"H",
    "Ḣ":"H",
    "Ḥ":"H",
    "Ħ":"H",
    "Í":"I",
    "Ĭ":"I",
    "Ǐ":"I",
    "Î":"I",
    "Ï":"I",
    "Ḯ":"I",
    "İ":"I",
    "Ị":"I",
    "Ȉ":"I",
    "Ì":"I",
    "Ỉ":"I",
    "Ȋ":"I",
    "Ī":"I",
    "Į":"I",
    "Ɨ":"I",
    "Ĩ":"I",
    "Ḭ":"I",
    "Ꝺ":"D",
    "Ꝼ":"F",
    "Ᵹ":"G",
    "Ꞃ":"R",
    "Ꞅ":"S",
    "Ꞇ":"T",
    "Ꝭ":"IS",
    "Ĵ":"J",
    "Ɉ":"J",
    "Ḱ":"K",
    "Ǩ":"K",
    "Ķ":"K",
    "Ⱪ":"K",
    "Ꝃ":"K",
    "Ḳ":"K",
    "Ƙ":"K",
    "Ḵ":"K",
    "Ꝁ":"K",
    "Ꝅ":"K",
    "Ĺ":"L",
    "Ƚ":"L",
    "Ľ":"L",
    "Ļ":"L",
    "Ḽ":"L",
    "Ḷ":"L",
    "Ḹ":"L",
    "Ⱡ":"L",
    "Ꝉ":"L",
    "Ḻ":"L",
    "Ŀ":"L",
    "Ɫ":"L",
    "ǈ":"L",
    "Ł":"L",
    "Ǉ":"LJ",
    "Ḿ":"M",
    "Ṁ":"M",
    "Ṃ":"M",
    "Ɱ":"M",
    "Ń":"N",
    "Ň":"N",
    "Ņ":"N",
    "Ṋ":"N",
    "Ṅ":"N",
    "Ṇ":"N",
    "Ǹ":"N",
    "Ɲ":"N",
    "Ṉ":"N",
    "Ƞ":"N",
    "ǋ":"N",
    "Ñ":"N",
    "Ǌ":"NJ",
    "Ó":"O",
    "Ŏ":"O",
    "Ǒ":"O",
    "Ô":"O",
    "Ố":"O",
    "Ộ":"O",
    "Ồ":"O",
    "Ổ":"O",
    "Ỗ":"O",
    "Ö":"O",
    "Ȫ":"O",
    "Ȯ":"O",
    "Ȱ":"O",
    "Ọ":"O",
    "Ő":"O",
    "Ȍ":"O",
    "Ò":"O",
    "Ỏ":"O",
    "Ơ":"O",
    "Ớ":"O",
    "Ợ":"O",
    "Ờ":"O",
    "Ở":"O",
    "Ỡ":"O",
    "Ȏ":"O",
    "Ꝋ":"O",
    "Ꝍ":"O",
    "Ō":"O",
    "Ṓ":"O",
    "Ṑ":"O",
    "Ɵ":"O",
    "Ǫ":"O",
    "Ǭ":"O",
    "Ø":"O",
    "Ǿ":"O",
    "Õ":"O",
    "Ṍ":"O",
    "Ṏ":"O",
    "Ȭ":"O",
    "Ƣ":"OI",
    "Ꝏ":"OO",
    "Ɛ":"E",
    "Ɔ":"O",
    "Ȣ":"OU",
    "Ṕ":"P",
    "Ṗ":"P",
    "Ꝓ":"P",
    "Ƥ":"P",
    "Ꝕ":"P",
    "Ᵽ":"P",
    "Ꝑ":"P",
    "Ꝙ":"Q",
    "Ꝗ":"Q",
    "Ŕ":"R",
    "Ř":"R",
    "Ŗ":"R",
    "Ṙ":"R",
    "Ṛ":"R",
    "Ṝ":"R",
    "Ȑ":"R",
    "Ȓ":"R",
    "Ṟ":"R",
    "Ɍ":"R",
    "Ɽ":"R",
    "Ꜿ":"C",
    "Ǝ":"E",
    "Ś":"S",
    "Ṥ":"S",
    "Š":"S",
    "Ṧ":"S",
    "Ş":"S",
    "Ŝ":"S",
    "Ș":"S",
    "Ṡ":"S",
    "Ṣ":"S",
    "Ṩ":"S",
    "Ť":"T",
    "Ţ":"T",
    "Ṱ":"T",
    "Ț":"T",
    "Ⱦ":"T",
    "Ṫ":"T",
    "Ṭ":"T",
    "Ƭ":"T",
    "Ṯ":"T",
    "Ʈ":"T",
    "Ŧ":"T",
    "Ɐ":"A",
    "Ꞁ":"L",
    "Ɯ":"M",
    "Ʌ":"V",
    "Ꜩ":"TZ",
    "Ú":"U",
    "Ŭ":"U",
    "Ǔ":"U",
    "Û":"U",
    "Ṷ":"U",
    "Ü":"U",
    "Ǘ":"U",
    "Ǚ":"U",
    "Ǜ":"U",
    "Ǖ":"U",
    "Ṳ":"U",
    "Ụ":"U",
    "Ű":"U",
    "Ȕ":"U",
    "Ù":"U",
    "Ủ":"U",
    "Ư":"U",
    "Ứ":"U",
    "Ự":"U",
    "Ừ":"U",
    "Ử":"U",
    "Ữ":"U",
    "Ȗ":"U",
    "Ū":"U",
    "Ṻ":"U",
    "Ų":"U",
    "Ů":"U",
    "Ũ":"U",
    "Ṹ":"U",
    "Ṵ":"U",
    "Ꝟ":"V",
    "Ṿ":"V",
    "Ʋ":"V",
    "Ṽ":"V",
    "Ꝡ":"VY",
    "Ẃ":"W",
    "Ŵ":"W",
    "Ẅ":"W",
    "Ẇ":"W",
    "Ẉ":"W",
    "Ẁ":"W",
    "Ⱳ":"W",
    "Ẍ":"X",
    "Ẋ":"X",
    "Ý":"Y",
    "Ŷ":"Y",
    "Ÿ":"Y",
    "Ẏ":"Y",
    "Ỵ":"Y",
    "Ỳ":"Y",
    "Ƴ":"Y",
    "Ỷ":"Y",
    "Ỿ":"Y",
    "Ȳ":"Y",
    "Ɏ":"Y",
    "Ỹ":"Y",
    "Ź":"Z",
    "Ž":"Z",
    "Ẑ":"Z",
    "Ⱬ":"Z",
    "Ż":"Z",
    "Ẓ":"Z",
    "Ȥ":"Z",
    "Ẕ":"Z",
    "Ƶ":"Z",
    "Ĳ":"IJ",
    "Œ":"OE",
    "ᴀ":"A",
    "ᴁ":"AE",
    "ʙ":"B",
    "ᴃ":"B",
    "ᴄ":"C",
    "ᴅ":"D",
    "ᴇ":"E",
    "ꜰ":"F",
    "ɢ":"G",
    "ʛ":"G",
    "ʜ":"H",
    "ɪ":"I",
    "ʁ":"R",
    "ᴊ":"J",
    "ᴋ":"K",
    "ʟ":"L",
    "ᴌ":"L",
    "ᴍ":"M",
    "ɴ":"N",
    "ᴏ":"O",
    "ɶ":"OE",
    "ᴐ":"O",
    "ᴕ":"OU",
    "ᴘ":"P",
    "ʀ":"R",
    "ᴎ":"N",
    "ᴙ":"R",
    "ꜱ":"S",
    "ᴛ":"T",
    "ⱻ":"E",
    "ᴚ":"R",
    "ᴜ":"U",
    "ᴠ":"V",
    "ᴡ":"W",
    "ʏ":"Y",
    "ᴢ":"Z",
    "á":"a",
    "ă":"a",
    "ắ":"a",
    "ặ":"a",
    "ằ":"a",
    "ẳ":"a",
    "ẵ":"a",
    "ǎ":"a",
    "â":"a",
    "ấ":"a",
    "ậ":"a",
    "ầ":"a",
    "ẩ":"a",
    "ẫ":"a",
    "ä":"a",
    "ǟ":"a",
    "ȧ":"a",
    "ǡ":"a",
    "ạ":"a",
    "ȁ":"a",
    "à":"a",
    "ả":"a",
    "ȃ":"a",
    "ā":"a",
    "ą":"a",
    "ᶏ":"a",
    "ẚ":"a",
    "å":"a",
    "ǻ":"a",
    "ḁ":"a",
    "ⱥ":"a",
    "ã":"a",
    "ꜳ":"aa",
    "æ":"ae",
    "ǽ":"ae",
    "ǣ":"ae",
    "ꜵ":"ao",
    "ꜷ":"au",
    "ꜹ":"av",
    "ꜻ":"av",
    "ꜽ":"ay",
    "ḃ":"b",
    "ḅ":"b",
    "ɓ":"b",
    "ḇ":"b",
    "ᵬ":"b",
    "ᶀ":"b",
    "ƀ":"b",
    "ƃ":"b",
    "ɵ":"o",
    "ć":"c",
    "č":"c",
    "ç":"c",
    "ḉ":"c",
    "ĉ":"c",
    "ɕ":"c",
    "ċ":"c",
    "ƈ":"c",
    "ȼ":"c",
    "ď":"d",
    "ḑ":"d",
    "ḓ":"d",
    "ȡ":"d",
    "ḋ":"d",
    "ḍ":"d",
    "ɗ":"d",
    "ᶑ":"d",
    "ḏ":"d",
    "ᵭ":"d",
    "ᶁ":"d",
    "đ":"d",
    "ɖ":"d",
    "ƌ":"d",
    "ı":"i",
    "ȷ":"j",
    "ɟ":"j",
    "ʄ":"j",
    "ǳ":"dz",
    "ǆ":"dz",
    "é":"e",
    "ĕ":"e",
    "ě":"e",
    "ȩ":"e",
    "ḝ":"e",
    "ê":"e",
    "ế":"e",
    "ệ":"e",
    "ề":"e",
    "ể":"e",
    "ễ":"e",
    "ḙ":"e",
    "ë":"e",
    "ė":"e",
    "ẹ":"e",
    "ȅ":"e",
    "è":"e",
    "ẻ":"e",
    "ȇ":"e",
    "ē":"e",
    "ḗ":"e",
    "ḕ":"e",
    "ⱸ":"e",
    "ę":"e",
    "ᶒ":"e",
    "ɇ":"e",
    "ẽ":"e",
    "ḛ":"e",
    "ꝫ":"et",
    "ḟ":"f",
    "ƒ":"f",
    "ᵮ":"f",
    "ᶂ":"f",
    "ǵ":"g",
    "ğ":"g",
    "ǧ":"g",
    "ģ":"g",
    "ĝ":"g",
    "ġ":"g",
    "ɠ":"g",
    "ḡ":"g",
    "ᶃ":"g",
    "ǥ":"g",
    "ḫ":"h",
    "ȟ":"h",
    "ḩ":"h",
    "ĥ":"h",
    "ⱨ":"h",
    "ḧ":"h",
    "ḣ":"h",
    "ḥ":"h",
    "ɦ":"h",
    "ẖ":"h",
    "ħ":"h",
    "ƕ":"hv",
    "í":"i",
    "ĭ":"i",
    "ǐ":"i",
    "î":"i",
    "ï":"i",
    "ḯ":"i",
    "ị":"i",
    "ȉ":"i",
    "ì":"i",
    "ỉ":"i",
    "ȋ":"i",
    "ī":"i",
    "į":"i",
    "ᶖ":"i",
    "ɨ":"i",
    "ĩ":"i",
    "ḭ":"i",
    "ꝺ":"d",
    "ꝼ":"f",
    "ᵹ":"g",
    "ꞃ":"r",
    "ꞅ":"s",
    "ꞇ":"t",
    "ꝭ":"is",
    "ǰ":"j",
    "ĵ":"j",
    "ʝ":"j",
    "ɉ":"j",
    "ḱ":"k",
    "ǩ":"k",
    "ķ":"k",
    "ⱪ":"k",
    "ꝃ":"k",
    "ḳ":"k",
    "ƙ":"k",
    "ḵ":"k",
    "ᶄ":"k",
    "ꝁ":"k",
    "ꝅ":"k",
    "ĺ":"l",
    "ƚ":"l",
    "ɬ":"l",
    "ľ":"l",
    "ļ":"l",
    "ḽ":"l",
    "ȴ":"l",
    "ḷ":"l",
    "ḹ":"l",
    "ⱡ":"l",
    "ꝉ":"l",
    "ḻ":"l",
    "ŀ":"l",
    "ɫ":"l",
    "ᶅ":"l",
    "ɭ":"l",
    "ł":"l",
    "ǉ":"lj",
    "ſ":"s",
    "ẜ":"s",
    "ẛ":"s",
    "ẝ":"s",
    "ḿ":"m",
    "ṁ":"m",
    "ṃ":"m",
    "ɱ":"m",
    "ᵯ":"m",
    "ᶆ":"m",
    "ń":"n",
    "ň":"n",
    "ņ":"n",
    "ṋ":"n",
    "ȵ":"n",
    "ṅ":"n",
    "ṇ":"n",
    "ǹ":"n",
    "ɲ":"n",
    "ṉ":"n",
    "ƞ":"n",
    "ᵰ":"n",
    "ᶇ":"n",
    "ɳ":"n",
    "ñ":"n",
    "ǌ":"nj",
    "ó":"o",
    "ŏ":"o",
    "ǒ":"o",
    "ô":"o",
    "ố":"o",
    "ộ":"o",
    "ồ":"o",
    "ổ":"o",
    "ỗ":"o",
    "ö":"o",
    "ȫ":"o",
    "ȯ":"o",
    "ȱ":"o",
    "ọ":"o",
    "ő":"o",
    "ȍ":"o",
    "ò":"o",
    "ỏ":"o",
    "ơ":"o",
    "ớ":"o",
    "ợ":"o",
    "ờ":"o",
    "ở":"o",
    "ỡ":"o",
    "ȏ":"o",
    "ꝋ":"o",
    "ꝍ":"o",
    "ⱺ":"o",
    "ō":"o",
    "ṓ":"o",
    "ṑ":"o",
    "ǫ":"o",
    "ǭ":"o",
    "ø":"o",
    "ǿ":"o",
    "õ":"o",
    "ṍ":"o",
    "ṏ":"o",
    "ȭ":"o",
    "ƣ":"oi",
    "ꝏ":"oo",
    "ɛ":"e",
    "ᶓ":"e",
    "ɔ":"o",
    "ᶗ":"o",
    "ȣ":"ou",
    "ṕ":"p",
    "ṗ":"p",
    "ꝓ":"p",
    "ƥ":"p",
    "ᵱ":"p",
    "ᶈ":"p",
    "ꝕ":"p",
    "ᵽ":"p",
    "ꝑ":"p",
    "ꝙ":"q",
    "ʠ":"q",
    "ɋ":"q",
    "ꝗ":"q",
    "ŕ":"r",
    "ř":"r",
    "ŗ":"r",
    "ṙ":"r",
    "ṛ":"r",
    "ṝ":"r",
    "ȑ":"r",
    "ɾ":"r",
    "ᵳ":"r",
    "ȓ":"r",
    "ṟ":"r",
    "ɼ":"r",
    "ᵲ":"r",
    "ᶉ":"r",
    "ɍ":"r",
    "ɽ":"r",
    "ↄ":"c",
    "ꜿ":"c",
    "ɘ":"e",
    "ɿ":"r",
    "ś":"s",
    "ṥ":"s",
    "š":"s",
    "ṧ":"s",
    "ş":"s",
    "ŝ":"s",
    "ș":"s",
    "ṡ":"s",
    "ṣ":"s",
    "ṩ":"s",
    "ʂ":"s",
    "ᵴ":"s",
    "ᶊ":"s",
    "ȿ":"s",
    "ɡ":"g",
    "ᴑ":"o",
    "ᴓ":"o",
    "ᴝ":"u",
    "ť":"t",
    "ţ":"t",
    "ṱ":"t",
    "ț":"t",
    "ȶ":"t",
    "ẗ":"t",
    "ⱦ":"t",
    "ṫ":"t",
    "ṭ":"t",
    "ƭ":"t",
    "ṯ":"t",
    "ᵵ":"t",
    "ƫ":"t",
    "ʈ":"t",
    "ŧ":"t",
    "ᵺ":"th",
    "ɐ":"a",
    "ᴂ":"ae",
    "ǝ":"e",
    "ᵷ":"g",
    "ɥ":"h",
    "ʮ":"h",
    "ʯ":"h",
    "ᴉ":"i",
    "ʞ":"k",
    "ꞁ":"l",
    "ɯ":"m",
    "ɰ":"m",
    "ᴔ":"oe",
    "ɹ":"r",
    "ɻ":"r",
    "ɺ":"r",
    "ⱹ":"r",
    "ʇ":"t",
    "ʌ":"v",
    "ʍ":"w",
    "ʎ":"y",
    "ꜩ":"tz",
    "ú":"u",
    "ŭ":"u",
    "ǔ":"u",
    "û":"u",
    "ṷ":"u",
    "ü":"u",
    "ǘ":"u",
    "ǚ":"u",
    "ǜ":"u",
    "ǖ":"u",
    "ṳ":"u",
    "ụ":"u",
    "ű":"u",
    "ȕ":"u",
    "ù":"u",
    "ủ":"u",
    "ư":"u",
    "ứ":"u",
    "ự":"u",
    "ừ":"u",
    "ử":"u",
    "ữ":"u",
    "ȗ":"u",
    "ū":"u",
    "ṻ":"u",
    "ų":"u",
    "ᶙ":"u",
    "ů":"u",
    "ũ":"u",
    "ṹ":"u",
    "ṵ":"u",
    "ᵫ":"ue",
    "ꝸ":"um",
    "ⱴ":"v",
    "ꝟ":"v",
    "ṿ":"v",
    "ʋ":"v",
    "ᶌ":"v",
    "ⱱ":"v",
    "ṽ":"v",
    "ꝡ":"vy",
    "ẃ":"w",
    "ŵ":"w",
    "ẅ":"w",
    "ẇ":"w",
    "ẉ":"w",
    "ẁ":"w",
    "ⱳ":"w",
    "ẘ":"w",
    "ẍ":"x",
    "ẋ":"x",
    "ᶍ":"x",
    "ý":"y",
    "ŷ":"y",
    "ÿ":"y",
    "ẏ":"y",
    "ỵ":"y",
    "ỳ":"y",
    "ƴ":"y",
    "ỷ":"y",
    "ỿ":"y",
    "ȳ":"y",
    "ẙ":"y",
    "ɏ":"y",
    "ỹ":"y",
    "ź":"z",
    "ž":"z",
    "ẑ":"z",
    "ʑ":"z",
    "ⱬ":"z",
    "ż":"z",
    "ẓ":"z",
    "ȥ":"z",
    "ẕ":"z",
    "ᵶ":"z",
    "ᶎ":"z",
    "ʐ":"z",
    "ƶ":"z",
    "ɀ":"z",
    "ﬀ":"ff",
    "ﬃ":"ffi",
    "ﬄ":"ffl",
    "ﬁ":"fi",
    "ﬂ":"fl",
    "ĳ":"ij",
    "œ":"oe",
    "ﬆ":"st",
    "ₐ":"a",
    "ₑ":"e",
    "ᵢ":"i",
    "ⱼ":"j",
    "ₒ":"o",
    "ᵣ":"r",
    "ᵤ":"u",
    "ᵥ":"v",
    "ₓ":"x"
};
function stringLatinize(string) {
    if (typeof string !== "string") {
        return "";
    }
    
    return string.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Latinise.latin_map[a]||""});
}

// include unchecked checkboxes
var originalSerializeArray = $.fn.serializeArray;
$.fn.extend({
    serializeArray: function () {
        var brokenSerialization = originalSerializeArray.apply(this);
        var checkboxValues = $(this).find('input[type=checkbox]').map(function () {
            return { 'name': this.name, 'value': this.checked  ? "true" : "false"};
        }).get();
        var checkboxKeys = $.map(checkboxValues, function (element) { return element.name; });
        var withoutCheckboxes = $.grep(brokenSerialization, function (element) {
            return $.inArray(element.name, checkboxKeys) == -1;
        });

        return $.merge(withoutCheckboxes, checkboxValues);
    }
});

function arrayMove(arr, old_index, new_index) {
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
}

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

class DataViewType {
    constructor(buffer, offset, size, type, arg) {
        this.type = type;
        this.hasClass = (type == "class");
        
        if (this.hasClass) {
            this.dataClass = new arg(buffer, offset);
        } else {
            this.dataView = new DataView(buffer, offset, size);
        }
    }
    
    setValue(value) {
        var little_endian = true;
        
        switch(this.type) {
            case 'uint16':
                this.dataView.setUint16(0, value, little_endian);
                break;
            case 'uint32':
                this.dataView.setUint32(0, value, little_endian);
                break;
            case 'string':
                var a = n_string(value, this.dataView.byteLength);
                for (var i=0; i < a.length; i++) {
                    this.dataView.setUint8(i, a[i]);
                }
                break;
            case 'class':
                this.dataClass.setData(value);
                break;
            default:
                this.dataView.setUint8(0, value);
        }
        
    }
    
    getValue() {
        var little_endian = true;
        
        switch(this.type) {
            case 'uint16':
                return this.dataView.getUint16(0, little_endian);
            case 'uint32':
                return this.dataView.getUint32(0, little_endian);
            case 'string':
                var chr, len = 0;
                for (var i=0; i < this.dataView.byteLength; i++) {
                    chr = this.dataView.getUint8(i);
                    if (chr == 0x00) {
                        break;
                    }
                    len++;
                }

                if (len == 0) return "";
                
                var a = new Uint8Array(this.dataView.buffer, this.dataView.byteOffset, len);
                return new TextDecoder().decode(a);
            case 'class':
                return this.dataClass.getData();
                break;
            default:
                return this.dataView.getUint8(0);
        }
        
    }
    
    hasClass() {
        return this.hasClass;
    } 
}

class DataStruct {
    constructor(struct, buffer, offset)	{
        this.struct = struct;
        this.size = DataStruct.getSize(this.struct);
        if (buffer) {
            this.array_buffer = buffer;
        } else {
            this.array_buffer = new ArrayBuffer(this.size);
        }
        this.initDataViews(offset);
    }
    
    static getSize(struct) {
        var values, type, size, bits, prev_bits = 0, total_bits = 0;
        var totalSize = 0;
        
        for (var i=0; i < struct.length; i++) {
            var name = Object.keys(struct[i])[0];
            type = Object.values(struct[i])[0];
            
            size = DataStruct.getTypeSize(type[0], type[1]);

            totalSize += size;
        }

        return totalSize;
    }
    
    static getTypeSize(type, arg) {
        var size;
        switch(type) {
            case 'uint16': size = 2; break;
            case 'uint32': size = 4; break;
            case 'string': size = arg; break;
            case 'class': size = arg.getSize(); break;
            default: size = 1;
        }
        return size;
    }
    
    initDataViews(start_offset) {
        this.dataviews = {};
        
        var offset = 0;
        if (start_offset) offset = start_offset;
        
        var name, type, arg, size, values;
        for (var i=0; i < this.struct.length; i++) {
            name = Object.keys(this.struct[i])[0];
            values = Object.values(this.struct[i])[0];
            
            type = values[0];
            arg = values[1];
            
            size = DataStruct.getTypeSize(type, arg);
            this.dataviews[name] = new DataViewType(this.array_buffer, offset, size, type, arg);
            
            offset += size;
        }
        
    }
    
    setData(data) {
        for(var prop in data) {
            if(data.hasOwnProperty(prop)) {
                if (typeof this.dataviews[prop] != "undefined") {
                    this.dataviews[prop].setValue(data[prop]);
                }
            }
        }
    }
    
    getData() {
        var data = {};
        
        for(var view in this.dataviews) {
            if(this.dataviews.hasOwnProperty(view)) {
                data[view] = this.dataviews[view].getValue();
            }
        }
        
        return data;
    }
    
    setBuffer(buffer) {
        var a = new Uint8Array(buffer);
        var b = new Uint8Array(this.array_buffer);
        
        for (var i=0; i < a.length; i++) {
            b[i] = a[i];
        }
    }
    
    
    get buffer() { 
        return this.array_buffer;
    }
}

function alt_u8(data) {
    var a = new Uint8Array(1);
    a[0] = data;
    return a;
}

function alt_u16(data) {
    var buffer = new ArrayBuffer(2);
    var dv = new DataView(buffer);
    
    // Force little endian
    var little_endian = true;
    dv.setInt16(0, data, little_endian);
    
    return new Uint16Array(buffer);
}

function alt_u32(data) {
    var buffer = new ArrayBuffer(4);
    var dv = new DataView(buffer);
    
    // Force little endian
    var little_endian = true;
    dv.setInt32(0, data, little_endian);
    
    return new Uint32Array(buffer);
}

function n_string(data, length) {
   data = stringLatinize(data);
   if (data.length >= length) {
        data = data.substring(0, length-1);
   } 
   var padding = length - data.length;
   for (var i = 0; i < padding; i++) {
       data += "\0";
   }
   return new TextEncoder().encode(data);
}

function sampler_phase_disp(v) {
    v = parseInt(v);
    return Math.floor((v*1125)/100) + " deg";
    
}

function samplerate_adj_disp(v) {
    v = parseInt(v);
    v = (v*5);
    return "." + (v < 10 ? "0"+v : v);
}

function sync_vth_disp(v) {
     v = parseInt(v);
    return Math.floor((v*1127)/100) + " mV";
}

function intclks_to_time_disp(v) {
     v = parseInt(v);
    return (Math.floor(((1000000*v)/(OSSC.TVP_INTCLK_HZ/1000))/10)/100) + " us";
}

function extclks_to_time_disp(v) {
     v = parseInt(v);
    return (Math.floor(((1000000*v)/(OSSC.TVP_EXTCLK_HZ/1000))/10)/100) + " us";
}

function sl_str_disp(v) {
    v = parseInt(v);
    return Math.floor(((v+1)*625)/100) + "%";
}

function sl_hybr_str_disp(v) {
    v = parseInt(v);
    return Math.floor((v*625)/100) + "%";
}

function sl_cust_str_disp(v) {
    v = parseInt(v);
    return Math.floor((v*625)/100) + "%";
}

function aud_db_disp(v) {
    v = parseInt(v);
    return (v-OSSC.AUDIO_GAIN_0DB) + " dB";
}

function signed_disp(v) {
    v = parseInt(v);
    return (v-OSSC.SIGNED_NUMVAL_ZERO) + "";
}

function alc_v_filter_disp(v) {
    v = parseInt(v);
    return (1<<v) + " lines";
}

function alc_h_filter_disp(v) {
    v = parseInt(v);
    return (1<<(v+1)) + " pixels";
}

function getDisplayValue(value, function_name) {
    if (typeof window[function_name] === "function") {
        return window[function_name](value);
    } else {
        return value;
    }
    
}

function countProperties(obj) {
    var count = 0;

    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }

    return count;
}

function mergeArrayBuffers(buffers) {
    var buffersLengths = buffers.map(function(b) { return b.byteLength; }),
        totalBufferlength = buffersLengths.reduce(function(p, c) { return p+c; }, 0),
        unit8Arr = new Uint8Array(totalBufferlength);
    buffersLengths.reduce(function (p, c, i) {
        unit8Arr.set(new Uint8Array(buffers[i]), p);
        return p+c;
    }, 0);
    return unit8Arr.buffer;
}

function showVideoMode(modes, mode_index) {
    modes.each(function(i, vmode) {
        $(this).toggleClass('hidden', mode_index != i);
    });
        
}

function initProfileSelect(container) {

    for (var i = 0; i <= OSSC.MAX_PROFILE; i++) {
        var el = $('<span>').addClass('profile').text(i);
        el.click(function(e) {
            var index = $(this).index();
            
            selectProfile(index, true);
        });
        el.appendTo(container);
    }
}

function selectProfile(index, fade) {
    profile_select.children().each(function(i, profile) {
        $(this).toggleClass('selected', index == i);
    })

    if (fade) {
        settings_container.one('transitionend', function() {
            toggleProfiles(index);
            settings_container.removeClass('fadeOut');
        });
        
        settings_container.addClass('fadeOut');
    } else {
        toggleProfiles(index);
    }
}

function initMoveProfileSelect() {
    $('<option value=""></option>').appendTo(move_profile_select);
        
    for (var i = 0; i <= OSSC.MAX_PROFILE; i++) {
        $('<option>', {
            value: i
        })
        .text('#'+i)
        .appendTo(move_profile_select);
    }
    
    move_profile_select.off('change');
    move_profile_select.change(function(e) {
        var new_index = $(e.target).val();
        var old_index = getCurrentProfileIndex();
        
        moveProfile(old_index, new_index);
    });
}

function moveProfile(old_index, new_index) {
    if (old_index === "" || new_index === "" || old_index == new_index) {
        return;
    }
    
    setLoader(true);
    
    if (new_index > OSSC.MAX_PROFILE) {
        new_index = OSSC.MAX_PROFILE;
    }
    
    setTimeout(function() {
        var data = exportAllData();
    
        arrayMove(data.export_json.main, old_index, new_index);
        arrayMove(data.export_json.timing_tweaker, old_index, new_index);
        importJSONData(data.export_json);
        selectProfile(new_index, true);
        move_profile_select.val('');
        setLoader(false);
    }, 500);
}

function getCurrentProfileIndex() {
    var index = 0;
    var p;
    
    profile_select.children().each(function(i, profile) {
        p = $(profile);
        if (p.hasClass('selected')) {
            index = p.index();
        }
    });
    
    return index;
}

function toggleProfiles(index) {
    settings_container.find('.settings').each(function(i, vmode) {
        $(this).toggleClass('hidden', index != i);
    });
}

function checkProfilesExportEnabled() {
    var inputs = settings_container.find('input[name="export_enabled"]');
    
    inputs.each(function(i, input) {
        profile_select.children('.profile').eq(i).toggleClass('disabled', !input.checked);
    });
}

function initSettings(container) {
    var form = $('<form>').addClass('main');
    
    $('<label>', { class:"export_enabled", text: "Enabled" })
            .append(
                $('<div>', { class: "switch"}) 
                    .append( $('<input>', { name: "export_enabled", type: "checkbox", checked: "checked", }) )
                    .append( $('<span>', { class: "slider round" }) )
             ).appendTo(form);
             
    
    //Add profile name setting
    var profile_name_div = $('<div>');
    $('<label>', {text: "Profile name"}).appendTo(profile_name_div);
    $('<input>', {
            type: "text",
            name: "profile_name",
            class: "profile_name",
    }).appendTo(profile_name_div);
    
    profile_name_div.appendTo(form);

    OSSC.settings.forEach(function(group, index) {
        var setting_group_div = $('<div>', { class: "setting_group", });
        $('<h3>' + group.name + '</h3>').appendTo(setting_group_div);
        
        
        group.settings.forEach(function(setting, index) {
            var setting_div = $('<div>', { class: "setting", });
            $('<label>').addClass('title').text(setting.label).appendTo(setting_div);
            
            var default_value = 0;
            if (typeof setting.default_value !== 'undefined') {
                default_value = setting.default_value;
            }
                        
            switch(setting.type) {
                case "radio":
                    setting.values.forEach(function(item, index) {
                        var label = $('<label>').appendTo(setting_div);
                        
                        $('<span>').text(item.label).appendTo(label);
                        
                        $('<input>', {
                            type: "radio",
                            name: setting.id,
                            value: item.value
                        })
                        .prop('checked', (item.value == default_value))
                        .prependTo(label);
                    });
                    break;
                case "range":
                       var value_displ_func = setting.value_displ_func || "";
                        
                        $('<span>', {
                            class: 'range_value'
                        })
                        .text(getDisplayValue(default_value, value_displ_func))
                        .appendTo(setting_div);
                        
                        var input = $('<input>', {
                            type: "range",
                            name: setting.id,
                            min: setting.min,
                            max: setting.max,
                            step: setting.step,
                            value: default_value,
                        }).appendTo(setting_div);
                        
                         $('<div>', {class: "plus_minus"})
                                .append( $('<span>', {class: "min", text: "-"}) )
                                .append( $('<span>', {class: "plus", text: "+"}) )
                                .appendTo(setting_div);
                        
                        if (value_displ_func.length > 0) {
                            input.attr('value_displ_func', value_displ_func);
                        }
                        
                    break;
                case "select":
                    var select = $('<select>', {
                            name: setting.id,
                        });
                    
                    setting.values.forEach(function(item, index) {
                        $('<option>', {
                            value: item.value
                        })
                        .text(item.label)
                        .prop('selected', (item.value == default_value))
                        .appendTo(select);
                    });
                    
                    select.appendTo(setting_div);
                    break;
                 default:
                    break;
            }
            
            setting_div.appendTo(setting_group_div);
        });
        
        setting_group_div.appendTo(form);
    });
  
    form.appendTo(container);
}

function initTimingTweaker(container) {
    var form = $('<form>').addClass('timing_tweaker');
    
    $('<h3>').text('Advanced Timing Tweaker').appendTo(form);

    var select = $('<select>', {
            name: 'video_mode',
    }).appendTo(form);

    var video_modes_container = $('<div>', {
        class: "video_modes",
    });

    OSSC.video_modes_def.forEach(function(mode, i) {
            
            var video_mode_container = $('<div>', {
                class: "video_mode",
            }).appendTo(video_modes_container);

            
           mode.forEach(function(value, j) {  

                var item_name = OSSC.video_mode_item_names[j];
                
                // Add name to video mode select
                if (item_name == 'name') {
                    $('<option>', {
                            value: i
                        })
                          .text(value)
                          .appendTo(select);
                    return;
                }
                
                var properties = OSSC.getVideoModeItemProperties(item_name);
                if (typeof properties === 'undefined') {
                    return;
                }
                
                var setting_div = $('<div>', { class: "setting", });
                
                $('<label>').addClass('title').text(properties.display_name).appendTo(setting_div);
                
                var value_displ_func = properties.display_func || "";
                
                // For displaying range value
                $('<span>', {
                    class: 'range_value'
                })
                .text( getDisplayValue(value, value_displ_func) )
                .appendTo(setting_div);
                
                // Add range slider
                var input = $('<input>', {
                    type: "range",
                    name: item_name + '_' + i,
                    min: properties.min,
                    max: properties.max,
                    step: 1,
                    value: value,
                }).appendTo(setting_div);
                
                if (value_displ_func.length > 0) {
                    input.attr('value_displ_func', value_displ_func);
                }
                
                $('<div>', {class: "plus_minus"})
                        .append( $('<span>', {class: "min", text: "-"}) )
                        .append( $('<span>', {class: "plus", text: "+"}) )
                        .appendTo(setting_div);
                
                setting_div.appendTo(video_mode_container);
            });
    });

    // Show first mode only
    var modes = video_modes_container.children();
    showVideoMode(modes, 0);

    video_modes_container.appendTo(form);
    form.appendTo(container);
}

function formToObjects(form) {
     var data = $(form).serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});
     return data;
}

// Formats single list of video mode form data to seperate arrays.
//
// Only outputs changed modes. 
function formatVideoModeData(data) {
    var new_data = [];
    
    OSSC.video_modes_def.forEach(function(mode, i) {
         var tmp = {};
         var mode_changed = false;
         
         mode.forEach(function(value, j) {
            var item_name = OSSC.video_mode_item_names[j];
            
            if (item_name == 'name') {
                tmp.name = value;
                return;
            }
            
            // Skip unchangable items
            var properties = OSSC.getVideoModeItemProperties(item_name);
            if (typeof properties === 'undefined') {
                return;
            }
            
            var mode_name = 'mode' + i;
            if (data[mode_name] && typeof data[mode_name][item_name] != "undefined") {
                tmp[item_name] = data[mode_name][item_name];
                
                if (data[mode_name][item_name] != value) {
                    mode_changed = true;
                }
            }

         });

         if (mode_changed) {
            new_data.push(tmp);
         }
    });
    
    return new_data;
}

// Converts single list of video mode form data to vm_data for Mode_data_t_array.
//
// It iterates through the default video modes and uses the form value
// if it exists, otherwise the default value of video_modes_def is used.
function videoModeFormToVMData(form_data) {
    var vm_data = {};
    var data;
    
    OSSC.video_modes_def.forEach(function(mode, i) {
         data = {};
            
         mode.forEach(function(value, j) {
            var item_name = OSSC.video_mode_item_names[j];
            
            var form_item_name = item_name + '_' + i;
            if (typeof form_data[form_item_name] !== 'undefined') {
                // Use form value 
                data[item_name] = form_data[form_item_name];
            } else {
                // Use default value
                data[item_name] = value;
            }
           
         });
         
         vm_data["mode"+i] = data;
    });
    
    return vm_data;
}

function findVideoModeIndex(name) {
    var index = -1;
    var name_index = OSSC.video_mode_item_names.indexOf('name');
    
    OSSC.video_modes_def.forEach(function(mode, i) {
        if (mode[name_index] == name) {
            index = i;
        }
    });
    
    return index;
}


function importJSONData(json_data) {
    var profile_no = getCurrentProfileIndex();
    importMainSettings(json_data.main, profile_no);
    importTimingTweakerSettings(json_data.timing_tweaker, profile_no);
}

function showImportDoneMessage() {
    $('#import_msg').addClass('show');
    setTimeout(function() {
        $('#import_msg').removeClass('show');
    }, 5000);
}

function importMainSettings(profiles_data, profile_no) {
    var count = profiles_data.length;
    
    var setValues = function(settings, i) {
        var container = settings_container.children('.settings').eq(i).children('.main');
        var input;
        for (var setting in settings) {
            if (settings.hasOwnProperty(setting)) {
                input = container.find('[name="'+setting+'"]');
               
                if (input.length == 0) continue;

                setInputValueByText(input, settings[setting]);

            }
        }
    }
    
    if (count == 1 & profile_no > 0) {
        setValues(profiles_data[0], profile_no);
    } else {
        for (var i = 0; i < count; i++) {
            setValues(profiles_data[i], i);
        }
    }
}

function importTimingTweakerSettings(profiles_data, profile_no) {
    var count = profiles_data.length;
    
    var setValues = function(vmode_settings, i) {
        var container, input, vmode_index, video_mode;
        container = settings_container.children('.settings').eq(i).children('.timing_tweaker');
        container = container.children('.video_modes');
        
        //For each video mode
        vmode_settings.forEach(function(mode_data, j) {
            vmode_index = findVideoModeIndex(mode_data.name);
            
            if (vmode_index == -1) 
                // Imported mode name not found in default list. Skip this one.    
                return;
            
            video_mode = container.children('.video_mode').eq(vmode_index);
            
            for (var mode in mode_data) {
                if (mode_data.hasOwnProperty(mode)) {
                    input = video_mode.find('[name="' +mode+ '_' + vmode_index + '"]');
                   
                    if (input.length == 0) continue;

                    setInputValueByValue(input, mode_data[mode]);

                }
            }
        });
    }
    
    if (count == 1 & profile_no > 0) {
        setValues(profiles_data[0], profile_no);
    } else {
        // For each profile
        profiles_data.forEach(setValues);
    }
}

function importBinaryProfile(file) {
    var ude_header = new OSSC.Ude_hdr();
    var ude_hdr_len = OSSC.Ude_hdr.getSize();
    var offset = 0;
    
    var cb = function(result) {
        ude_header.setBuffer(result);
        var data = ude_header.getData();

        if (data.userdata_key == "OSSC") {
            alert("Error: This file appears to be OSSC firmware");
            return;
        }
        
        if (data.userdata_key == "" && data.version_major == 0 && data.version_minor == 0) {
            // Header?
            offset += 512;
        }
        
        readBinaryProfiles(file, offset);
    };
    
    readFilePartToArrayBuffer(file, offset, ude_hdr_len, cb);
}

function readBinaryProfiles(file, start_offset) {
    var profile_size = OSSC.Ude_profile.getSize();
    var avc_data_len = OSSC.Avconfig_t.getSize();
    var vm_data_len = OSSC.Mode_data_t_array.getSize();
    
    var current_profile = 0;
    var profile_count = OSSC.MAX_PROFILE+1;
    var offset = start_offset;
    var profile = new OSSC.Ude_profile();
    var profile_data, version_minor, version_major, version_name;
    var avc_data = {}, vm_data = {};
    var found_profiles = [];
    var imported_profiles = 0;
    var profile_disabled;
    
    var cb = function(result) {
        profile.setBuffer(result);
        profile_data = profile.getData();
        
        found_profiles[current_profile] = 'Empty';
        
        if ( (profile_data.ude_header.userdata_key == OSSC.USERDATA_KEY ||
               profile_data.ude_header.userdata_key == OSSC.USERDATA_DIS_KEY) && 
               profile_data.ude_header.type == OSSC.UDE_PROFILE)
        {
            version_minor = profile_data.ude_header.version_minor;
            version_major = profile_data.ude_header.version_major;
            version_name = version_major+'.'+version_minor;
            
            found_profiles[current_profile] = version_name;

            if (version_minor == OSSC.PROFILE_VER_MINOR && 
                version_major == OSSC.PROFILE_VER_MAJOR &&
                profile_data.avc_data_len == avc_data_len && 
                profile_data.vm_data_len == vm_data_len) 
            {
                // valid_profile
                profile_disabled = (profile_data.ude_header.userdata_key == OSSC.USERDATA_DIS_KEY);
                profile_data.avc['profile_name'] = profile_data.name;
                profile_data.avc['export_enabled'] = (!profile_disabled ? "true" : "false");
                
                avc_data[current_profile] = profile_data.avc;
                vm_data[current_profile] = profile_data.vm;
                imported_profiles++;
            } else {
                found_profiles[current_profile] += '. Skipped: wrong version';
            }
        }
            
        current_profile++;
        offset = start_offset + (OSSC.SECTORSIZE*current_profile);
        if (current_profile < profile_count && offset+profile_size <= file.size) {
            readFilePartToArrayBuffer(file, offset, profile_size, cb);
            return;
        }
        
        if (imported_profiles > 0) {
            var d = exportAllData(avc_data, vm_data);
            text_import.val(JSON.stringify(d.export_json, null, 4));
        }
        
        var message = found_profiles.reduce(function(string, item, index) {
            string += index + ': ' + item + "\n";
            return string;
        }, "Profiles found: \n"); 
        alert(message);
    };
    
    readFilePartToArrayBuffer(file, offset, profile_size, cb);
}



function readFilePartToArrayBuffer(file, offset, length, cb) {
    var f = file.slice(offset, offset+length);
    var reader = new FileReader();

    reader.onload = function() {
        cb(reader.result);
        this.onload = null;
    }
    
    reader.readAsArrayBuffer(f);
}

function setInputValueByValue(input, value) {
    var tag = input.prop("tagName").toLowerCase();
    var type = input.prop('type').toLowerCase();
    
    if (tag == "input" && type == "radio") {
        input.each(function() {
            if (this.value == value) {
               this.checked = true;
            }
        });
    } else {
        input.val(value);
        
        if (tag == "input" && type == "range") {
            // Trigger input callback for updating display value
            input.trigger('input');
        }
    }
}

function setInputValueByText(input, text) {
    var tag = input.prop("tagName").toLowerCase();
    var type = input.prop('type').toLowerCase();
    
    switch (tag) {
        case "select":
            input.find('option').each(function() {
                if ( $(this).text() == text) {
                    input.val( $(this).val() );
                }
            });
            break;
        case "input":
            if (type == "radio") {
                input.each(function() {
                    if ( $(this).next('span').text() == text) {
                        this.checked = true;
                    }
                });
            } else if (type =="checkbox") {
                 input.prop("checked", text == "true").trigger('change'); 
            } else {
                input.val(text);
        
                if (type == "range") {
                    // Trigger input callback for updating display value
                    input.trigger('input');
                }
            }
            break;
        default:
            break;
    }
}

// Find the text that corresponds to the value of the input.
function convertValuesToLabels(form, form_data) {
    var input, label, type;
    
    var new_data = {};

    for (var setting in form_data) {
        if (form_data.hasOwnProperty(setting)) {
            input = form.find('[name="'+setting+'"]');
            
            if (input.length == 0) continue;
            
            switch (input.prop("tagName").toLowerCase() ) {
                case "select":
                    label = input.find('option[value="'+form_data[setting]+'"]').text();
                    break;
                case "input":
                    type = input.prop('type').toLowerCase();
                    if (type == "radio") {
                        label = input.filter('[value="'+form_data[setting]+'"]').next('span').text();
                    } else {
                        label = form_data[setting];
                    }
                    break;
                default:
                    break;
            }

           new_data[setting] = label;

        }
    }
    
    return new_data;
}

function exportData(profile_no, avc_bin_data, vm_bin_data) {
    var main_forms = $('form.main');
    var timing_forms = $('form.timing_tweaker');         

    var count = main_forms.length;
    
    var data, avc_data, vm_data, profile, export_binary;
    var buffers = [];
    var buffer, padding_buffer, remaining;
    
    var export_json = {
        version: OSSC.FW_VER_MAJOR + "." + OSSC.FW_VER_MINOR,
        main: [],
        
        timing_tweaker: [],
    };
    
    var profile_name = '';
    var export_enabled = true;
    
    // Start with 512 byte header
    buffers[0] = new ArrayBuffer(512);
    
    var i = 0;
    if (profile_no >= 0) {
        i = profile_no;
        count = profile_no + 1;
    }
    
    for (; i < count; i++) {
        
        if (avc_bin_data && typeof avc_bin_data[i] != "undefined") {
            avc_data = avc_bin_data[i];
        } else {
            // convert form to Avconfig data
            avc_data = formToObjects( main_forms.eq(i) );
        }
        
        data = convertValuesToLabels(main_forms.eq(i), avc_data);
        export_json.main.push(data);
        
        profile_name = avc_data.profile_name.trim();
        export_enabled = (avc_data.export_enabled == "true");
        
        if (vm_bin_data && vm_bin_data[i]) {
            vm_data = vm_bin_data[i];
        } else {
            // convert form to video mode data
            data = formToObjects( timing_forms.eq(i) );
            vm_data = videoModeFormToVMData(data);
        }

        data = formatVideoModeData(vm_data);
        export_json.timing_tweaker.push(data);

        profile = OSSC.getNewUdeProfile(avc_data, vm_data, profile_name, export_enabled);
        buffer = profile.buffer; 
            
        // Pad to profile sector size
        remaining = OSSC.SECTORSIZE - buffer.byteLength;
        if (remaining > 0) {
            padding_buffer = new ArrayBuffer(remaining);
            buffer = mergeArrayBuffers([buffer, padding_buffer]);
        }
        buffers.push(buffer);
    }
    
    // Merge all buffers
    export_binary = new Uint8Array(mergeArrayBuffers(buffers));
    
    return {
        export_binary: export_binary,
        export_json: export_json,
    }
}

function exportAllData(avc_data, vm_data) {
    return exportData(-1, avc_data, vm_data);
}

function exportToBinFile() {
    var data = exportAllData();
    var filename = "ossc_profiles_" + data.export_json.version + ".bin";
    saveFile(filename, data.export_binary);
}

function exportToJSONFile(profile_no) {
    var data = exportData(profile_no);
    var json_string = JSON.stringify(data.export_json, null, 4);
    var profile_name = replaceAll(data.export_json.main[0].profile_name,' ','_'); 
    var filename = (data.export_json.main.length == 1 
                ? "ossc_profile_" + data.export_json.version + "_" + profile_name + ".json"
                : "ossc_profiles_" + data.export_json.version + ".json"
    );
    
    text_import.val(json_string);
    saveFile(filename, json_string);
}

function saveFile(name, data) {
    var type = "octet/stream";
    
    // Edge
    if (navigator.msSaveBlob)
        return navigator.msSaveBlob(new Blob([data], { type: type }), name);
    
    var url = window.URL.createObjectURL(new Blob([data], {type: type}));
    
    var a = $("<a>", {
        style: "display: none",
        href: url,
        download: name,
    });
        
    $("body").append(a);
    a[0].click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

function loadScript(url, callback) {
    
    $.ajax({
        url: url,
        dataType: "script",
        cache: false,
    })
      .done(callback)
      .fail(function( jqxhr, settings, exception ) {
        alert( "Error loading script: " + url + '. ' + exception);
    });
}

function changeToVersion(version) {
    setLoader(true);
    
    setTimeout(function() {
        // Keep current settings
        if (OSSC) {
            var data = exportAllData();
            ossc_settings_data[ossc_version_data.current_version] = data.export_json;
        }
        
        if (typeof ossc_version_data[version] == 'undefined') {
            var url = version + ".js";
            
            loadScript(url, function() {
                console.log('loaded');
                ossc_version_data[version] = ossc_data;
                setVersion(version);
            });
            
            
        } else {
            setVersion(version);
        }
    }, 300);
}

function setVersion(version) {
    console.log('setVersion: ', version);
    OSSC = new ossc_version_data[version]();
    ossc_version_data.current_version = version;
    setFirmwareSelect(version);
    init(true);

    if (typeof ossc_settings_data[version] != 'undefined') {
        importJSONData(ossc_settings_data[version]);
    }
    
    setLoader(false);
}

function init(clear_all) {
    if (clear_all) {
        settings_container.empty();
        profile_select.empty();
        move_profile_select.empty();
    }

    initProfileSelect(profile_select);
    initMoveProfileSelect();

    for (var i = 0; i <= OSSC.MAX_PROFILE; i++) {
        
        var settings_wrapper = $('<div>', {
            class: "settings",
        });
        
        initSettings(settings_wrapper);
        initTimingTweaker(settings_wrapper);

        settings_container.append(settings_wrapper);
    }
    
    selectProfile(0, false);
}

function initFirmwareSelect() {
    $('<label>').addClass('title').text('Firmware version').appendTo(firmware_select);
    var select = $('<select>');
            
    ossc_version_data.versions.forEach(function(value, index) {
        $('<option>', {
            value: value,
            class: 'firmware',
        })
        .text(value)
        .appendTo(select);
    });
    
    select.appendTo(firmware_select);
    select.change(function(e) {
        changeToVersion(e.target.value);
    });
}

function setFirmwareSelect(version) {
    firmware_select.children('select').val(version);
}

function setLoader(enable) {
    loader.toggleClass('visible', enable);
}

var firmware_select = $('#firmware_select');
var settings_container = $('#settings_container');
var profile_select = $('#profile_select');
var move_profile_select = $('#move_profile');
var text_import = $('#text_import');
var loader = $('#loader');

$('#save_bin_button').click(exportToBinFile);

$('#save_json_button').click(function() {exportToJSONFile(-1)});

$('#save_current_json_button').click(function() {
        var profile_no = getCurrentProfileIndex();
        exportToJSONFile(profile_no);
    }
);

// One listener for all range type inputs
$('body').on('input', 'input[type="range"]', function(e) {
    var target = $(e.target);
    var display_func = target.attr('value_displ_func') || "";
    target.prev('span').text( getDisplayValue(target.val(), display_func));
});

$('body').on('click', '.setting .plus_minus', function(e) {
    var target = $(e.target);
    var input = target.closest('.setting').children('input[type="range"]');
    
    if (input.length == 0) return;
    
    if (target.hasClass("plus")) {
        input.val( parseInt(input.val()) +1 );
    } else if (target.hasClass("min")) {
        input.val( parseInt(input.val()) -1 );
    }
    
    input.trigger('input');

});

$('body').on('change', 'select[name="video_mode"]', function(e) {
    var target = $(e.target);
    var modes = target.next('.video_modes').children();
    showVideoMode(modes, target.val());
});

$('body').on('change', 'input[name="export_enabled"]', function(e) {
    checkProfilesExportEnabled();
});

// Enable drop event on body
$('body').on('dragover', function(e) {
    e.preventDefault();
});

// Drop json file on body
$('body').on('drop', function(e){
    e.preventDefault(); 
    
    if (e.originalEvent.dataTransfer.items) {
        var data = e.originalEvent.dataTransfer.items;

        if (data[0].kind === 'file') {
            var file = data[0].getAsFile();
             if (file.type == "application/json") {
                var reader = new FileReader();

                reader.onload = function(re) {
                    text_import.val(re.target.result);
                    reader.onload = null;
                }
                
                reader.readAsText(file);
            } else {
                importBinaryProfile(file);
            }
        }

    } 
});



$('#import_button').click(function() {
    var json_data;
    
    try {
        json_data = JSON.parse( text_import.val() );
    } catch(e) {
        alert(e);
        return;
    }
    
    importJSONData(json_data);
    showImportDoneMessage();
});


var ossc_data;
var ossc_settings_data = [];

var ossc_version_data = {
        versions: [
            "v105",
            "v089",
            "v088",
            "v086",
            "v085",
            "v084",
            "v083",
            "v082",
        ],
        current_version: "v105",
};

var OSSC;

setLoader(true);
initFirmwareSelect();
changeToVersion(ossc_version_data.current_version);