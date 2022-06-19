// function strToInt(string){
//     let i;
//     for(i = 0; string[i] === " "; i++);
//     string = string.substring(i);

//     for(let j = 0; ; j++){
//         if(string[0] == "+"){
//             string = string.substring(string[0])
//             string = parseInt(string);
//         }
//         if(string[0] == "-"){
//             string = parseInt(string)
//         }
//         if(!string[j] || string[j] == " "){
//             return string
//         }
//     }
// }

function strToInt(string){
    let sign = 1;
    for(let i= 0; ; i++){
        string[i] == " " && string.substring(i);
        sign = string[0] == "-" && -1; 
        return isNaN(string[i]) || !string[i + 1] ?  parseInt(string) * sign: -1; 
    }
}


// console.log(strToInt("    +123245"))
console.log(strToInt("    -123245 hi"))