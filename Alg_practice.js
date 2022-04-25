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
    return reversed;
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

/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

//w2d1
const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
    let newdict = {};
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        let temp = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (temp == arr[j]) {
                count++;
            }
        }
        newdict[temp] = count;
    }
    return newdict;
}
console.log(makeFrequencyTable(arr1));
console.log(makeFrequencyTable(arr2));
console.log(makeFrequencyTable(arr3));

// ***************************************************************************

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const two_nums1 = [1];
const two_expected1 = 1;

const two_nums2 = [5, 4, 5];
const two_expected2 = 4;

const two_nums3 = [5, 4, 3, 4, 3, 4, 5];
const two_expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const two_nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const two_expected4 = 1;

function oddOccurrencesInArray(nums) {
    let number = checker(nums);
    return number;
}
function checker(nums) {
    let newdict = {};
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let temp = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (temp == nums[j]) {
                count++;
            }
        }
        newdict[temp] = count;
        if (newdict[temp] % 2 == 1) {
            return temp;
        }
    }
    return newdict;
}
console.log(oddOccurrencesInArray(two_nums1));
console.log(oddOccurrencesInArray(two_nums2));
console.log(oddOccurrencesInArray(two_nums3));
console.log(oddOccurrencesInArray(two_nums4));

//w2d2

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use your own .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

function reverseWords(str) {
    let holder = "";
    let tempstr = "";
    let spacer = " ";
    for (let i = 0; i < str.length + 1; i++) {
        if (str[i] != " " && i != str.length) {
            tempstr += str[i];
        } else if (str[i] == " ") {
            holder += reverse(tempstr);
            holder += spacer;
            tempstr = "";
        } else {
            holder += reverse(tempstr);
            tempstr = "";
        }
    }
    return holder;
}

function reverse(str) {
    let j = str.length - 1;
    let tempstr1 = "";
    for (let i = 0; i < str.length; i++) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        tempstr1 += str[j];
        j--;
    }
    return tempstr1;
}

console.log(reverseWords(str1));
console.log(reverseWords(str2));
console.log(reverseWords(str3));
/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */

// *****************************************

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const two_str1 = "This is a test";
const two_expected1 = "test a is This";

const two_str2 = "hello";
const two_expected2 = "hello";

const two_str3 = "   This  is a   test  ";
const two_expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
    let output = "";
    let tempstr = "";
    let spacer = " ";
    let arr = [];
    for (let i = 0; i < wordsStr.length + 1; i++) {
        if (i == wordsStr.length) {
            arr.push(tempstr);
            break;
        }
        if (wordsStr[i] != " ") {
            tempstr += wordsStr[i];
        } else if (wordsStr[i] == " ") {
            arr.push(tempstr);
            tempstr = "";
        } else {
            arr.push(tempstr);
            tempstr = "";
        }
    }
    arr = reversingArr(arr);
    for (let j = 0; j < arr.length; j++) {
        if (j == arr.length - 1) {
            if (arr[j] != "") {
                output += arr[j];
            }
        } else {
            if (arr[j] != "") {
                output += arr[j] + spacer;
            }
        }
    }
    return output;
}
function reversingArr(arr) {
    let j = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    return arr;
}

console.log(reverseWordOrder(two_str1));
console.log(reverseWordOrder(two_str2));
console.log(reverseWordOrder(two_str3));

//w2d3

/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */

function rotateStr(string, amnt) {
    if (amnt == 0) {
        return string;
    }
    if (amnt > string.length) {
        amnt -= string.length;
    }
    let tempstr = "";
    let newstr = "";
    for (let i = 0; i <= amnt; i++) {
        tempstr += string.charAt(string.length - i - 1);
    }
    newstr += tempstr;
    for (let j = 0; j < string.length; j++) {
        if (newstr.length < string.length) {
            newstr += string.charAt(j);
        } else {
            return newstr;
        }
    }
}
console.log(rotateStr("ABCD", 1));
console.log(rotateStr("DABC", 1));
console.log(rotateStr("CDAB", 1));
console.log(rotateStr("BCDA", 1));
console.log(rotateStr(str, rotateAmnt1));
console.log(rotateStr(str, rotateAmnt2));
console.log(rotateStr(str, rotateAmnt3));
console.log(rotateStr(str, rotateAmnt4));
console.log(rotateStr(str, rotateAmnt5));

/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const two_strA1 = "ABCD";
const two_strB1 = "CDAB";
// CDAB -> BCDA -> ABCD
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const two_expected1 = true;

const two_strA2 = "ABCD";
const two_strB2 = "CDBA";
// CDBA -> ACDB -> BACD -> DBAC
// Explanation: all same letters in 2nd string, but out of order
const two_expected2 = false;

const two_strA3 = "ABCD";
const two_strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const two_expected3 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }
    let temstr = "";
    for (let i = 0; i <= s1.length; i++) {
        temstr = rotateStr(s2, 1);
        s2 = temstr;
        if (s2 == s1) {
            return true;
        }
    }
    return false;
}

function rotateStr(string, amnt) {
    if (amnt == 0) {
        return string;
    }
    if (amnt > string.length) {
        amnt -= string.length;
    }
    let tempstr = "";
    let newstr = "";
    for (let i = 0; i < amnt; i++) {
        tempstr += string.charAt(string.length - 1);
    }
    newstr += tempstr;
    for (let j = 0; j < string.length; j++) {
        if (newstr.length < string.length) {
            newstr += string.charAt(j);
        } else {
            return newstr;
        }
    }
}
console.log(isRotation(two_strA1, two_strB1));
console.log(isRotation(two_strA2, two_strB2));
console.log(isRotation(two_strA3, two_strB3));

/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    let truOrFalse = ''
    let temp = 0
    let count = 0
    for (let i = 0; i < str.length; i++) {
        temp++
        if (str[i] == "(") {
            truOrFalse = checker(str, temp)
            if(!truOrFalse){
                return false
            }
        }
        if(str[i] == "(" || str[i] == ")" ){
            count++
        }
    }
    if (count % 2 == 1){
        return false;
    }
    return true
}

function checker(str, amnt) {
    for (let j = amnt; j < str.length; j++) {
        if (str[j] == ")") {
            return true
        }
    }
return false
}

console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));
// *************************************************************

/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const two_str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const two_expected1 = true;

const two_str2 = "D(i{a}l[ t]o)n{e";
const two_expected2 = false;

const two_str3 = "A(1)s[O (n]0{t) 0}k";
const two_expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    let truthyOrFalsy = parensValid(str)
    if(truthyOrFalsy){
        return true
    } else{
        return false
    }
}


function parensValid(str) {
    let truOrFalse = ''
    let temp = 0
    let count = 0
    for (let i = 0; i < str.length; i++) {
        temp++
        let valHol = str[i]
        if (str[i] == "(" || str[i] == "{" || str[i] == "[" ) {
            truOrFalse = checker(str, temp, valHol)
            if(!truOrFalse){
                return false
            }
        }
        if(str[i] == "(" || str[i] == ")" || str[i] == "{" || str[i] == "}" || str[i] == "[" || str[i] == "]"){
            count++
        }
    }
    if (count % 2 == 1){
        return false;
    }
    return true
}

function checker(str, amnt, valHol) {
    let tempstr = ''
    for (let j = amnt; j < str.length; j++) {
        tempstr += str[j]
        if (str[j] == ")" || str[j] == "}" || str[j] == "]") {
            return true
            // checkcloser(tempstr)
        }
    }
return false
}
function checkcloser(string){
    
    for(let i = 0; i < string.length; i++){
        let valHol = str[i]
        if(valHol = "(" || "[" || "{"){
            for(let j = 0; j < string.length; j++){

            }
        }
    }
}


console.log(bracesValid(two_str1))
console.log(bracesValid(two_str2))
console.log(bracesValid(two_str3))




/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   Hi my name    is tyler     ";
const expected2 = "Hi my name    is tyler";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
 function trim(str){
    let tempstr = ''
    for(let i=1; i < str.length; i++){
        if (str.charAt(1)  != ' ' || str.charAt(str.length) !=){
            str.charAt(1) 
        }
        
    }
return tempstr
}
console.log(trim(str1))
console.log(trim(str2))

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   Hi my name    is tyler     ";
const expected2 = "Hi my name    is tyler";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
    var result=str.split('');
    var i=0
    var j=str.length-1
    while (str[i]==' '){
            result.shift(str[i]);
            i++;
        }

    while (str[j]==' '){
        result.pop(str[i]);
        j--;
    }
    
    return result.join('');
    }

// console.log(trim(str1))
// console.log(trim(str2))

const two_strA1 = "yes";
const two_strB1 = "eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    if (s1.length !== s2.length){
        return false
    }
    s1=s1.toLowerCase();
    s2=s2.toLowerCase();
    var output=''
    for (i=0; i<s1.length; i++){
        for (j=0; j<s2.length; j++){
            if (s1[i]==s2[j]){
                output+=s2[j]
                console.log(output)
            }
        }
    } if (s1==output){
        return true;
    } else return false
}

function isAnagramButBetter(s1,s2){ // tried to make a better verison
    if (s1.length !== s2.length){
        return false
    }
    var obj={
        

    }
    for (var i=0; i<s1.length; i++){
            obj[`value${i}`]=s1[i];
    }
    for (var j=0; j<s2.length; j++){
        if (obj[`value${j}`]==s2[j]){
            return true
        }
    }
    return obj;
}

// console.log(isAnagram(two_strA1, two_strB1))
// console.log(isAnagram(two_strA2, two_strB2))
// console.log(isAnagram(two_strA3, two_strB3))
// console.log(isAnagram(two_strA4, two_strB4))
console.log(isAnagramButBetter('moon', 'mono'))





/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
// function socialDistancingEnforcer(queue) {
//     if(queue.length < 2){
//         return true
//     }
//     let crrntindx = 0
//     for(let i = 0; i < queue.length; i++){
//         let count = 0;
//         crrntindx++;
//         if (queue[i] == 1){
//             for(let j = crrntindx ; j < queue.length; j++){
//                 let arrindx = queue[j]
//                 if (arrindx != 1 && count < 6){
//                     count++
//                 } 
//                 else if (count == 6){
//                     break
//                 } else {
//                     return false
//                 }
//             }
//         }
//     }
// return true;
// }

function socialDistancingEnforcer(queue) {
    let count = 0;
    let leftindex = 0;
    let rightindex = queue.length-1;

    if (queue.length < 1){
        return true;
    }

    for(let i = 0; i < queue.length; i++){
        if (queue[i] === 1){
            leftindex = i;
            break
        }
    }

    for(let j = queue.length-1; j >= 0; j-- ){
        if(queue[j]=== 1){ 
            rightindex = j;
            break
        }
    }

    for(let k = leftindex+1; k <= rightindex; k++){
        if(queue[k] == 0){
            count++;
        }
        else if(queue[k] == 1 && count < 6){
            return false;
        }
        else if(queue[k] == 1) {
            count = 0;
        }
    }
    return true;
}
console.log(socialDistancingEnforcer(queue1))
console.log(socialDistancingEnforcer(queue2))
console.log(socialDistancingEnforcer(queue3))
console.log(socialDistancingEnforcer(queue4))

// *******************************************************************

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const two_nums1 = [-2, 5, 7, 0, 3];
const two_expected1 = 2;

const two_nums2 = [9, 9];
const two_expected2 = -1;

const two_nums3 = [9, 9, 0, 1];
const two_expected3 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
 function balanceIndex(nums) {
    if (nums.length % 2 === 0){
        return -1;
    }
    let middle = Math.ceil(nums.length/2);
    let leftcount = 0;
    let rightcount = 0;
    for (let i = 0; i<middle-1; i++){
        leftcount += nums[i];
        rightcount += nums[middle + i]
    }
    if (leftcount === rightcount){
        return middle-1;
    }
    else {
        return -1;
    }
}
console.log(balanceIndex(two_nums1))
console.log(balanceIndex(two_nums2))
console.log(balanceIndex(two_nums3))

/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const two_arrA1 = [1, 2, 3];
const two_arrB1 = ["a", "b", "c"];
const two_expected1 = [1, "a", 2, "b", 3, "c"];

const two_arrA2 = [1, 3];
const two_arrB2 = [2, 4, 6, 8];
const two_expected2 = [1, 2, 3, 4, 6, 8];

const two_arrA3 = [1, 3, 5, 7];
const two_arrB3 = [2, 4];
const two_expected3 = [1, 2, 3, 4, 5, 7];

const two_arrA4 = [];
const two_arrB4 = [42, 0, 6];
const two_expected4 = [42, 0, 6];


/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    let newarr = []
    let length = 0;

    if(arr1.length == 0){
        return arr2
    } 
    length = arr1.length >= arr2.length ? arr1.length : arr2.length

    for(let i = 0; i < length; i++){
        if( typeof arr1[i] != "undefined" ){
            newarr.push(arr1[i])
        }
        if (typeof arr2[i] != "undefined"){
            newarr.push(arr2[i])
        }
    }
    return newarr;
}


console.log(interleaveArrays(two_arrA1, two_arrB1))
console.log(interleaveArrays(two_arrA2, two_arrB2))
console.log(interleaveArrays(two_arrA3, two_arrB3))
console.log(interleaveArrays(two_arrA4, two_arrB4))



/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
 function binarySearch(sortedNums, searchNum) {
    let left = 0
    let right = sortedNums.length - 1
    
    while (left <= right){
        let mid = Math.floor((right + left) / 2)

        if (sortedNums[mid] === searchNum){
            return true
        }

        if (searchNum < sortedNums[mid]){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
}

console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))

/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i=0) {
    if(i == nums.length){
        return 0;
    }
    return nums[i] + sumArr(nums, ++i) 
}

console.log(sumArr(nums1));
// *************************************************************

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const two_num1 = 5;
const two_expected1 = 15;
// Explanation: (1+2+3+4+5)

const two_num2 = 2.5;
const two_expected2 = 3;
// Explanation: (1+2)

const two_num3 = -1;
const two_expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {}