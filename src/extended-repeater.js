const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */


function repeater(str, options) {
    let block;
    if (typeof str === 'object' && str !== null) {
        if (typeof str.toString === 'function') {
            str = String(str);
        } else {
            str = 'STRING_OR_DEFAULT';
        }

    } else {
        str = String(str)
    }
    if ((!options['additionRepeatTimes'] && !options['additionSeparator'] && !options['addition'])) {
        block = str;
        console.log(block)
    }
    else if ((!options['additionRepeatTimes'] && !options['additionSeparator']) || !options['additionRepeatTimes']) {
        block = str + Array.from({ length: 1 }, () => String(options['addition']));
        console.log(block)
    }
    else if (!options['additionSeparator']) {
        if(options['additionRepeatTimes'] <=1 ) {
        block = str + Array.from({ length: options['additionRepeatTimes'] }, () => String(options['addition'])).join('+')
        } else {
            block = str + Array.from({ length: options['additionRepeatTimes'] }, () => String(options['addition'])).join('|')
        }
    }

     else {
        block = str + Array.from({ length: options['additionRepeatTimes'] }, () => String(`${options['addition']}`)).join(`${options['additionSeparator']}`);
        console.log(block)
    }



    if (!options['separator']) {
        return Array.from({ length: options['repeatTimes'] }, () => block).join('+');
    } else if (!options['repeatTimes']) {
        return Array.from({ length: 1 }, () => block).join(`${options['separator']}`);
    } else {
        return Array.from({ length: options['repeatTimes'] }, () => block).join(`${options['separator']}`)
    }
}

module.exports = {
  repeater
};
