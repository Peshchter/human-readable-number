const onesWord = (d) => {
    switch (d) {
        case 1: return "one" 
        case 2: return "two" 
        case 3: return "three" 
        case 4: return "four" 
        case 5: return "five" 
        case 6: return "six" 
        case 7: return "seven" 
        case 8: return "eight" 
        case 9: return "nine" 
        default: return ""
    }
}

const tensWord = (d) => {
    switch (d) {
        case 0: return "" 
        case 1: return "one " 
        case 2: return "twenty " 
        case 3: return "thirty " 
        case 4: return "forty " 
        case 5: return "fifty " 
        case 6: return "sixty " 
        case 7: return "seventy " 
        case 8: return "eighty " 
        case 9: return "ninety " 
        default: return ""
    }
}

const hundredsWord = (d) => {    
        return d ? `${onesWord(d)} hundred ` : ""
}

const firstTen = (d) => {
    switch (d) {
        case 0: return "ten" 
        case 1: return "eleven" 
        case 2: return "twelve" 
        case 3: return "thirteen" 
        case 4: return "fourteen" 
        case 5: return "fifteen" 
        case 6: return "sixteen" 
        case 7: return "seventeen" 
        case 8: return "eighteen" 
        case 9: return "nineteen" 
        default: return ""
    }
}

module.exports = function toReadable (number) {
    if (!number) {
        return "zero"
    }
    let hundreds, tens, ones;
    ones = number % 10
    tens = number % 100 - ones
    hundreds = (number - tens - ones) / 100
    tens /= 10 
    if (tens >= 1 && tens < 2 ) {
        return `${hundredsWord(hundreds)}${firstTen(ones)}`
    }
    let answer = `${hundredsWord(hundreds)}${tensWord(tens)}${onesWord(ones)}`
    return ones ? answer : answer.slice(0, -1) 
}
