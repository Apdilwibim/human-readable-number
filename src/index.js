module.exports = function toReadable(number) {
    let result;
    let str = String(number);
    let units,
        tens,
        hundreds;
    let numbers = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten'
    }
    let numbersLengthThree = {
        '1': 'ten',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
    }
    let numbersTen = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty'
    }
    if (str == '20') {
        return 'twenty';
    }
    if (str.length == 2 || str.length == 1) {
        units = str.slice(str.length - 1, str.length);
        if (+str < 20) {
            for (let key in numbersTen) {
                if (str == key) tens = numbersTen[key];
            }
            result = `${tens}`;
            return result;
        }
    }
    if (str.length == 2 && +str > 20) {
        units = str.slice(str.length - 1, str.length);
        tens = String(Math.floor(+str / 10));
        if ((str.slice(1, 2) == '0')) {
            for (let key in numbersLengthThree) {
                if (str.slice(0, 1) == key) {
                    str = numbersLengthThree[key];
                    result = `${str}`;
                    return result;
                };
            }
        }
        for (let key in numbersLengthThree) {
            if (tens == key) tens = numbersLengthThree[key];
        }
        for (let key in numbers) {
            if (units == key) units = numbers[key];
        }
        result = `${tens} ${units}`;
        return result;
    }
    if (str.length == 3) {
        units = str.slice(str.length - 1, str.length);
        tens = String(Math.floor(+(str.slice(1, 3)) / 10));
        hundreds = String(Math.floor(+str / 100));
        if (+(str.slice(1, 3) <= 20)) {
            if ((str.slice(1, 3) == '00')) {
                for (let key in numbers) {
                    if (hundreds == key) hundreds = numbers[key];
                }
                result = `${hundreds} hundred`;
                return result;
            }
            tens = String((+(str.slice(1, 3))));
            for (let key in numbersTen) {
                if (tens == key) tens = numbersTen[key];
            }
            for (let key in numbers) {
                if (hundreds == key) hundreds = numbers[key];
            }
            result = `${hundreds} hundred ${tens}`;
        } else {
            for (let key in numbers) {
                if (hundreds == key) hundreds = numbers[key];
            }
            for (let key in numbersLengthThree) {
                if (tens == key) tens = numbersLengthThree[key];
            }
            for (let key in numbers) {
                if (units == key) units = numbers[key];
            }
            result = `${hundreds} hundred ${tens} ${units}`;
            if (units == '0') result = result.slice(0, result.length - 2);
        }
    }
    return result;
}