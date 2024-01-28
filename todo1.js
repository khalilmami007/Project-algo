function removeBlanks(inputString) {
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== ' ') {
            result += inputString[i];
        }
    }
    return result;
}

// Examples
const result1 = removeBlanks(" Pl ayTha tF u nkyM usi c ");
console.log(result1);  // Output: "PlayThatFunkyMusic"

const result2 = removeBlanks("I can not BELIEVE it's not BUTTER");
console.log(result2);  // Output: "IcannotBELIEVEit'snotBUTTER"


function getDigits(inputString) {
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        if (!isNaN(Number(inputString[i]))) {
            result += inputString[i];
        }
    }
    return Number(result);
}

// Examples
const result3 = getDigits("abc8c0d1ngd0j0!8");
console.log(result3);  // Output: 801008

const result4 = getDigits("0s1a3y5w7h9a2t4?6!8?0");
console.log(result4);  // Output: 1357924680


function acronym(inputString) {
    const words = inputString.split(' ');
    let result = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word !== '') { 
            result += word[0].toUpperCase();
        }
    }

    return result;
}

// Examples
const result5 = acronym(" there's no free lunch - gotta pay yer way. ");
console.log(result5);  // Output: "TNFL-GPYW"

const result6 = acronym("Live from New York, it's Saturday Night!");
console.log(result6);  // Output: "LFNYISN"


function countNonSpaces(inputString) {
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== ' ') {
            count++;
        }
    }

    return count;
}

// Examples
const result7 = countNonSpaces("Honey pie, you are driving me crazy");
console.log(result7);  // Output: 29

const result8 = countNonSpaces("Hello world !");
console.log(result8);  // Output: 11

function removeShorterStrings(strArray, minLength) {
    let result = [];

    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length >= minLength) {
            result.push(strArray[i]);
        }
    }

    return result;
}

// Examples
const result9 = removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4);
console.log(result9);  // Output: ['Good morning', 'sunshine', 'Earth', 'says', 'hello']

const result10 = removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3);
console.log(result10);  // Output: ['There', 'bug', 'the', 'system']
