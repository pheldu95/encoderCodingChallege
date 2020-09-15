
// function randomInteger(n){
//     return Math.floor(Math.random() * n);
// }
function convertToBinary(array){
    let binary = "";
    for (i = 0; i < array.length; i++) {
        binary += array[i].charCodeAt(0).toString(2) + " "
    }
    return binary;
}
// function encoder(string){
//     array = string.split('');
//     //convert the array of characters to binary
//     let binary = convertToBinary(array);
//     binary = binary.toString();
//     //get rid of the spaces.
//     binary = binary.replace(/ /g, "");
//     console.log('converted to string', binary);
//     let binaryArray = binary.split('');
//     console.log(binaryArray);
    
//     for(let i = 0; i < binaryArray.length - 1; i++){
//         let randomInt = randomInteger(binaryArray.length);       
//         let charToSwap = binaryArray[i];            
//         binaryArray[i] = binaryArray[randomInt];
//         binaryArray[randomInt] = charToSwap;
//     }
//     //return the scrambled array
//     return binaryArray;
// }


// console.log(encoder('Dunc'));
function binaryScrambler(array){
    let char1 = array.splice(0, 7);
    let char2 = array.splice(0, 7);
    let char3 = array.splice(0, 7);
    let char4 = array.splice(0, 7);
    console.log(char1, char2, char3, char4);
    let newBinaryArray = [];
    for (let i = 0; i < 7; i++) {
        newBinaryArray.push(char1[i], char2[i], char3[i], char4[i]);    
    }
    return newBinaryArray;
}
function convertToDec(binaryString) {
    return parseInt((binaryString + '')
        .replace(/[^01]/gi, ''), 2);
}
function encoder(string){
    array = string.split('');
    //convert the characters in the array to binary
    let binary = convertToBinary(array);
    //get rid of the spaces
    binary = binary.replace(/ /g, "");
    //convert the string of binary into an array
    let binaryArray = binary.split('');
    console.log(binaryArray);
    newBinaryArray = binaryScrambler(binaryArray);
    console.log(newBinaryArray);
    let binaryString = newBinaryArray.toString();
    binaryString = binaryString.replace(/,/g, "");
    let dec = convertToDec(binaryString);
    console.log(dec);
    
    

}
console.log(encoder('FRED'));
