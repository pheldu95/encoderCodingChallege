

function convertToBinary(string){
    let binaryString = string.split('').map(function (char) {
        const binary = char.charCodeAt(0).toString(2)
        const pad = Math.max(8 - binary.length, 0);
        // Just to make sure it is 8 bits long.
        return '0'.repeat(pad) + binary;
    }).join('');
    binaryString = binaryString.replace(/ /g, "");
    return binaryString;
    // let binary = "";
    // for (i = 0; i < array.length; i++) {
    //     binary += array[i].charCodeAt(0).toString(2) + " ";
        
    // }
    // binary = binary.replace(/ /g, "");
    // //convert the string of binary into an array
    // let binaryArray = binary.split('');
    // console.log(binaryArray);
    // return binaryArray;
}

function binaryScrambler(array){
    let char1 = array.splice(0, 8);
    let char2 = array.splice(0, 8);
    let char3 = array.splice(0, 8);
    let char4 = array.splice(0, 8);
    console.log(char1, char2, char3, char4);
    let newBinaryArray = [];
    for (let i = 0; i < 8; i++) {
        newBinaryArray.push(char1[i], char2[i], char3[i], char4[i]);    
    }
    return newBinaryArray;
}
function convertToDec(binaryString) {
    return parseInt((binaryString + '')
        .replace(/[^01]/gi, ''), 2);
}
function encoder(string){
    //convert the characters in the string to binary
    let binaryArray = convertToBinary(string).split('');
    console.log('bionaryarray',binaryArray);
    
    newBinaryArray = binaryScrambler(binaryArray);
    console.log(newBinaryArray);
    let binaryString = newBinaryArray.toString();
    binaryString = binaryString.replace(/,/g, "");
    let dec = convertToDec(binaryString);
    console.log(dec);
    
    

}
console.log(encoder('FRED'));
