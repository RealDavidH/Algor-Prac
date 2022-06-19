// function strStr(haystack, needle) {
//     if (!needle) return 0;

//     if (needle.length > haystack.length) return -1;

//     if (needle == haystack) return 0;

//     for (let i = 0; i < haystack.length; i++) {
//         for (let j = 0; j <= needle.length; j++) {
//             if (j == needle.length) return i + 1;
//             if (haystack[i + j] != needle[j]) break;
//         }
//     }
// return -1;
// }

function strStr(haystack, needle) {
    for (let i = 0; ; i++) {
        for (let j = 0; ; j++) {
            if (j == needle.length) return i;
            if (i + j == haystack.length) return -1;
            if (needle.charAt(j) != haystack.charAt(i + j)) break;
        }
    }
}

console.log(strStr("mississippi", "pi"));


function strToInt(string){
    let i;
    for(i = 0; string[i] === " "; i++);
    string = string.substring(i);
    console.log(string)
}

console.log(strToInt("    hello world"))