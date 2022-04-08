//!!PAGE 34 "Print odd -300,000 to 300,000" then add sum

//Setting and Swaping. Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & viceversa.
function settingSwapping(myNumber, myName) {
    let temp = myName;
    myName = myNumber;
    myNumber = temp;
    console.log(myName + "=myName", myNumber + "=myNumber");
    return;
}
settingSwapping(42, "David");

//Print -52 to 1066. Print integers from -52 to 1066 using a FOR loop.

function printInt() {
    for (let i = -52; i <= 1066; i++) {
        console.log(i);
    }
}
printInt();

//Don’t Worry, Be Happy. Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(i) {
    console.log("good morning!", i);
}

for (let i = 1; i <= 98; i++) {
    beCheerful(i);
}

//Multiples of Three – but Not All. Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function multiplesOfThree() {
    for (let i = -300; i <= 0; i++) {
        if (i % 3 === 0) {
            if (i === -3 || i === -6) {
            } else {
                console.log(i);
            }
        }
    }
}
multiplesOfThree();

//Printing Integers with While. Print integers from 2000 to 5280, using a WHILE.

function printWhile() {
    let i = 2000;
    while (i <= 5280) {
        console.log(i);
        i++;
    }
}
printWhile();

//You Say It’s Your Birthday. If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."

function yourBirthday(month, day) {
    if (month && day === 13 && 1) {
        console.log("How did you know?");
    } else if (month && day === 1 && 13) {
        console.log("How did you know?");
    } else {
        console.log("Just another day....");
    }
}
yourBirthday(1, 13);

//Leap Year. Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year,-
//unless it is divisible by 100. However, if it is divisible by 400, then it is.

function isItLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 400 === 0 && year % 100 === 0)
            console.log("It is a leap year!");
        else if (year % 100 === 0) {
            console.log("Not a leap year.");
        }
    } else {
        console.log("Not a leap year.");
    }
}
isItLeapYear(2022);

//Counting, the Dojo Way.
//Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
function countingDojoWay() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 10 !== 0) {
            console.log("Coding");
        } else if (i % 5 === 0 && i % 10 === 0) {
            console.log("Coding", "Dojo");
        } else {
            console.log(i);
        }
    }
}
countingDojoWay();

//What Do You Know?
//Your function will be given an input parameter incoming. Please console.log this value.

function whatDoYouKnow(incoming) {
    return incoming;
}
console.log(whatDoYouKnow(90));

//Whoa, That Sucker’s Huge...
//Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

function addOddInt(sum) {
    sum = 0;
    for (let i = -300000; i < 300000; i++) {
        if (i % 2 === 1 || i % 2 === -1) {
            sum += i;
        }
    }
    return sum;
}
console.log(addOddInt());

//Reversing an array

function reversingArr(arr) {
    let j = arr.length - 1;
    console.log(arr, "OG Array");
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    return arr;
}
console.log(reversingArr(["a", "b", "c", "d", "e"]));

//Countdown by Fours
//Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

function countDownFour() {
    let i = 2016;
    while (i > 0) {
        if (i % 4 === 0) {
            console.log(i);
        }
        i--;
    }
}
countDownFour();

//Flexible Countdown
//Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function flexCountdown(lowNum, highNum, mult) {
    for (i = highNum; i > lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}
flexCountdown(2, 9, 3);

//The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is
// essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4),
// print the multiples of param1, starting at param2 and extending to param3. One exception: if a
// multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9),
// print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function finalCountdown(param1, param2, param3, param4) {
    while (param2 <= param3) {
        if (param2 % param1 === 0 && param2 != param4) {
            console.log(param2);
        }
        param2++;
    }
}
finalCountdown(3, 5, 17, 9);

//console.log the pokémon objects whose id is evenly divisible by 3
//console.log the pokémon objects that have more than one type
//console.log the names of the pokémon whose only type is "poison"
//console.log the first type of all the pokémon whose second type is "flying"
//Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
let reverse = [];
let pokemon = [
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
    { id: 5, name: "Charmeleon", types: ["fire"] },
    { id: 9, name: "Blastoise", types: ["water"] },
    { id: 12, name: "Butterfree", types: ["bug", "flying"] },
    { id: 16, name: "Pidgey", types: ["normal", "flying"] },
    { id: 23, name: "Ekans", types: ["poison"] },
    { id: 24, name: "Arbok", types: ["poison"] },
    { id: 25, name: "Pikachu", types: ["electric"] },
    { id: 37, name: "Vulpix", types: ["fire"] },
    { id: 52, name: "Meowth", types: ["normal"] },
    { id: 63, name: "Abra", types: ["psychic"] },
    { id: 67, name: "Machamp", types: ["fighting"] },
    { id: 72, name: "Tentacool", types: ["water", "poison"] },
    { id: 74, name: "Geodude", types: ["rock", "ground"] },
    { id: 87, name: "Dewgong", types: ["water", "ice"] },
    { id: 98, name: "Krabby", types: ["water"] },
    { id: 115, name: "Kangaskhan", types: ["normal"] },
    { id: 122, name: "Mr. Mime", types: ["psychic"] },
    { id: 133, name: "Eevee", types: ["normal"] },
    { id: 144, name: "Articuno", types: ["ice", "flying"] },
    { id: 145, name: "Zapdos", types: ["electric", "flying"] },
    { id: 146, name: "Moltres", types: ["fire", "flying"] },
    { id: 148, name: "Dragonair", types: ["dragon"] },
];

function pokemon_Algo() {
    for (let i = 0; i < pokemon.length; i++) {
        // if(pokemon[i].id % 3 === 0){
        //     console.log(pokemon[i].name, "is a pokemon an id divisible by 3")
        // }
        // if(pokemon[i].types.length > 1){
        //     console.log(pokemon[i].name, "is a pokemon with two types")
        // }
        if (pokemon[i].types == "poison") {
            reversingName(i);
        }
        // if(pokemon[i].types[1] == "flying"){
        //     console.log(pokemon[i].name, "secondary type of flying")
        // }
    }
}
pokemon_Algo();

function reversingName(i) {
    let Letter = "";
    for (let j = pokemon[i].name.length; j >= 0; j--) {
        Letter += pokemon[i].name.charAt(j);
    }
    reverse.push(Letter);
    console.log(pokemon[i].name, "is a poison type pokemon");
}
console.log(reverse);

// W2D2
var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
];
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

//Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise
function flatten(arr2d) {
    var flat = [];
    for (let i = 0; i < arr2d.length; i++) {
        for (let j = 0; j < arr2d.length; j++) {
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

var result = flatten([
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

//Countdown
//Create a function that accepts a number as an input. Return a new array that counts down by one, from
//the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function arrCountdown(input) {
    let arr = [];
    while (input >= 0) {
        arr.push(input);
        input--;
    }
    return arr;
}

let results = arrCountdown(10);
console.log(results);

//Print and Return
//Your function will receive an array with two numbers. Print the first value, and return the second.
function printAndReturn(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 1) {
            return arr[i];
        } else {
            console.log(arr[i]);
        }
    }
}
console.log(printAndReturn([1, 2]));

//w1d2 Python
// let string1 = "abc";
// let string2 = "ABC";

// string1 = string1.toLowerCase();
// string2 = string2.toLocaleLowerCase();

// if (string1 == string2) {
//     console.log("yes");
// }

/* case insensitive string compare */

// const strA1 = "ABC";
// const strB1 = "abc";
// const expected1 = true;

// const strA2 = "ABC";
// const strB2 = "abd";
// const expected2 = false;

// const strA3 = "ABC";
// const strB3 = "bc";
// const expected3 = false;

// are the strings the same length?

// create a function with two input parameters
// first, make both strings lowercase
// see if two lowercase strings are equal to one another
// if they're the same, we return true
// if they're not the same, return false

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.
 */
function caseInsensitiveStringCompare(strA, strB) {}
/* 
   Given an arr and a separator string, output a string of every item in the array separated by the separator.
   
   No trailing separator at the end
   Default the separator to a comma with a space after it if no separator is provided
 */

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {}

function joinArr(arr, separator) {
    let tempstring = "";
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            tempstring += arr[i] + separator;
        } else {
            tempstring += arr[i];
        }
    }
    return tempstring;
}
console.log(joinArr(arr1, separator1));
console.log(joinArr(arr2, separator2));
console.log(joinArr(arr3, separator3));
console.log(joinArr(arr4, separator4));
console.log(joinArr(arr5, separator5));

//w1d3

// let string1 = "abc";
// let string2 = "ABC";

// string1 = string1.toLowerCase();
// string2 = string2.toLocaleLowerCase();

// if (string1 == string2) {
//     console.log("yes");
// }

/* case insensitive string compare */

// const strA1 = "ABC";
// const strB1 = "abc";
// const expected1 = true;

// const strA2 = "ABC";
// const strB2 = "abd";
// const expected2 = false;

// const strA3 = "ABC";
// const strB3 = "bc";
// const expected3 = false;

// are the strings the same length?

// create a function with two input parameters
// first, make both strings lowercase
// see if two lowercase strings are equal to one another
// if they're the same, we return true
// if they're not the same, return false

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.
 */
function caseInsensitiveStringCompare(strA, strB) {}
/* 
   Given an arr and a separator string, output a string of every item in the array separated by the separator.
   
   No trailing separator at the end
   Default the separator to a comma with a space after it if no separator is provided
 */

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {}

function joinArr(arr, separator) {
    let tempstring = "";
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            tempstring += arr[i] + separator;
        } else {
            tempstring += arr[i];
        }
    }
    return tempstring;
}
console.log(joinArr(arr1, separator1));
console.log(joinArr(arr2, separator2));
console.log(joinArr(arr3, separator3));
console.log(joinArr(arr4, separator4));
console.log(joinArr(arr5, separator5));

//w1d4
// /*
//   String: Is Palindrome
//   Create a function that returns a boolean whether the string is a strict palindrome.
//     - palindrome = string that is same forwards and backwards

//   Do not ignore spaces, punctuation and capitalization
//  */

//   const str1 = "a x a";
//   const expected1 = true;

//   const str2 = "racecar";
//   const expected2 = true;

//   const str3 = "Dud";
//   const expected3 = false;

//   const str4 = "oho!";
//   const expected4 = false;

// }
// console.log(reversingArr(str1));
// console.log(reversingArr(str2));
// console.log(reversingArr(str3));
// console.log(reversingArr(str4));

//   /**
//    * Determines if the given str is a palindrome (same forwards and backwards).
//    * - Time: O(?).
//    * - Space: O(?).
//    * @param {string} str
//    * @returns {boolean} Whether the given str is a palindrome or not.
//    */

//   ************************************

/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const two_str1 = "what up, daddy-o?";
const two_expected1 = "dad";

const two_str2 = "uh, not much";
const two_expected2 = "u";

const two_str3 = "Yikes! my favorite racecar erupted!";
const two_expected3 = "e racecar e";

const two_str4 = "a1001x20002y5677765z";
const two_expected4 = "5677765";

const two_str5 = "a1001x20002y567765z";
const two_expected5 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */

function longestPalindromicSubstring(str) {
    let longeststring = "";

    longeststring = findpall(str);
    console.log(longeststring, "end");
}
longestPalindromicSubstring(two_str1);
longestPalindromicSubstring(two_str2);
longestPalindromicSubstring(two_str3);
longestPalindromicSubstring(two_str4);
longestPalindromicSubstring(two_str5);
function findpall(string) {
    let highscore = "";
    let temp = null;
    for (let k = 0; k < string.length; k++) {
        let newstring = "";
        for (let i = 0; i < string.length; i++) {
            newstring += string[i + k];
            for (let j = 0; j < string.length; j++) {
                temp = reversingString(newstring);
                if (temp) {
                    if (newstring.length > highscore.length)
                        highscore = newstring;
                }
            }
        }
    }
    return highscore;
}

function reversingString(str) {
    let j = str.length - 1;
    let tempstr1 = "";
    let tempstr2 = "";

    for (let i = 0; i < str.length / 2; i++) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        tempstr1 += str[i];
        tempstr2 += str[j];
        j--;
    }

    if (tempstr2 == tempstr1) {
        return true;
    } else {
        return false;
    }
}

//w1d5
/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

const keys2 = [];
const vals2 = [];
const expected2 = {};

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
function zipArraysIntoMap(keys, values) {
    let newdict = {};
    for (let i = 0; i < keys.length; i++) {
        newdict[keys[i]] = values[i];
    }
    return newdict;
}

console.log(zipArraysIntoMap(keys1, vals1));
// ------------------------------------------------------------------------------------------------------------------------

/* 
      Invert Hash
      A hash table / hash map is an obj / dictionary
      Given an object / dict,
      return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
    */

const obj3 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected3 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */

//!!Before I made this I didn't know "for in" was a thing in js
function invertObj2(obj) {
    let reversed = {};
    for (key in obj) {
        reversed[obj[key]] = key;
    }
    return reversed
}
console.log(invertObj2(obj3));

//OG solution
// function invertObj(obj) {
//     let reversed = {};
//     let keys = Object.entries(obj);
//     let temparr = [];
//     // let values = Object.values(obj)
//     for (let i = 0; i < keys.length; i++) {
//         temparr[i] = reversingArr(keys[i]);
//     }
//     keys = temparr;
//     for (let j = 0; j < keys.length; j++) {
//         for (let k = 0; k <= keys[j].length; k++) {
//             reversed[keys[k][0]] = keys[k][1];
//         }
//     }

//     return reversed;
// }

// function reversingArr(arr) {
//     let j = arr.length - 1;
//     for (let i = 0; i < arr.length / 2; i++) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j--;
//     }
//     return arr;
// }
// console.log(invertObj(obj3));
