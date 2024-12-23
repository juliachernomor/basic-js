const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    if(str == '') {return '';

    } else {
    
    
    let res = [];
    let currBlock='';
    const str1 = str.replace(/\d/g, "");
    
    for(let i=0; i < str1.length; i++ ) {
        const char = str1[i];
        if(i===0 || char === str1[i-1]) {
            currBlock += char;
        }
        else {
            if(currBlock.length ===1) {
                res.push(currBlock[0]);   
            } else {
                res.push(currBlock.length.toString()+currBlock[0]);
            }
            currBlock= char;
          }
        }
        if(currBlock.length ===1) {
            res.push(currBlock[0]);   
        } else {
            res.push(currBlock.length.toString()+currBlock[0]);
        }
        return res.join('');
    }
}

module.exports = {
  encodeLine
};
