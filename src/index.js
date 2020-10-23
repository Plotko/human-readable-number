module.exports = function toReadable (number) {
    let res = [];
    let objectOfNumber = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    let arrOfNumber = [number].join().split('');
    switch(arrOfNumber.length){
        case 1:
            for (let key in objectOfNumber) {
                if (number == key) {
                    res.push(objectOfNumber[number]);
                }
            }
            break;
        case 2:
            res.push(to2Number(objectOfNumber, arrOfNumber));
            break;
        case 3:
            if (arrOfNumber[1] === '0' && arrOfNumber[2] === '0') {
                res.push(to1Number(objectOfNumber,arrOfNumber[0]));
                res.push('hundred');
            } else {
                res.push(to1Number(objectOfNumber,arrOfNumber[0]));
                res.push('hundred');
                res.push(to2Number(objectOfNumber, arrOfNumber.slice(1)));
            }
            break;
        default: break;
    }

    return res.join(' ');
}

function to1Number(obj,number) {
    for (let key in obj) {
        if (number === key) {
            return obj[key];
        }
    }
}

function to2Number(obj,arr) {
    let res = [];
    switch(parseFloat(arr[0])) {
        case 0:
            res.push(to1Number(obj,arr[1]));
            break;
        case 1:
            res.push(to1Number(obj,arr.join('').split().join()));
            break;
        case 2:
            res.push('twenty');
            if(arr[1] !== '0') res.push(to1Number(obj,arr[1]) );
            break;
        case 3:
            res.push('thirty');
            if(arr[1] !== '0') res.push(to1Number(obj,arr[1]));
            break;
        case 4:
            res.push('forty');
            if(arr[1] !== '0') res.push(to1Number(obj,arr[1]));
            break;
        case 5:
            res.push('fifty');
            if(arr[1] !== '0') res.push(to1Number(obj,arr[1]));
            break;
        case 6:
            res.push('sixty');
            if(arr[1] !== '0') res.push(to1Number(obj,arr[1]));
            break;
        case 7:
            res.push('seventy');
            if(arr[1] !== '0') res.push(to1Number(obj,arr[1]));
            break;
        case 8:
            res.push('eighty');
            if(arr[1] !== '0')res.push(to1Number(obj,arr[1]));
            break;
        case 9:
            res.push('ninety');
            if(arr[1] !== '0') res.push(to1Number(obj,arr[1]));
            break;
        default: break;
    }
    return res.join(' ');
}
