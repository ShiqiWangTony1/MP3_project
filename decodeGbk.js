const fs = require('fs');
const iconv = require('iconv-lite');

const gbkBuffer = fs.readFileSync('/Users/shiqiwang/Documents/Alphabet_Intern/Week2_Project/gbk_sample.txt');
const utf8Str = iconv.decode(gbkBuffer, 'gbk');
console.log('UTF-8 String:', utf8Str);
