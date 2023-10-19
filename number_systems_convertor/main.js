//main function
function main(){
    //intializes x with input number
    const x = document.getElementById("Num_In").value;
    console.log(x);
     
    //check for conversion to same number system
    if (document.getElementById("from_base").value == document.getElementById("to_base").value){
        document.getElementById("y").innerHTML = x;
        return;
    }
    
    //Concatonates 'from base' and 'to base' to come up with function name to run
    let functionName = document.getElementById("from_base").value;
    functionName = functionName.concat("_", document.getElementById("to_base").value );
    console.log(functionName);
    
    let outNum = 0;
    //Runs function to convert bases
    try{    
        outNum = window[functionName](x);
    }
    catch(err){
        let inv = "Error: " + err + ".";
        outNum = inv;
        //TODO: change output text color (Red) + size
    }
    //changes output html to number in converted base
    console.log(outNum);
    document.getElementById("y").innerHTML = outNum;
    
}
//Converts Decimal to Binary
//@returns binary 
function dec_binary(x){
    
    let binary = "";
    let r = 0;
    x = parseInt(x);
    if (Number.isInteger(x) != true) throw "Invalid Decimal";
    console.log(typeof x);
    while (x >= 1){
        r = x % 2;
        x = Math.floor(x / 2);
        binary = r + binary;
    }
    
    return binary;
}

function binary_dec(x){
    
    let total = 0;
    //divide input int into array
    let myFunc = num => Number(num);
    var intArr = Array.from(String(x), myFunc);
    console.log(intArr);

    //multiply each index of array into powers of 2 and add to total
    for (let i = 0; i < intArr.length; i++){
        if (intArr[i] > 1) throw "Invalid binary";
        total += intArr[i] * (2** (intArr.length - i - 1));
    }
    return total;
}

//TODO: Convert all lowercase letters to uppercase. 
//  +Throw error for non hex numbers. 
function hex_dec(x){
    let total = 0;
    
    x = String(x);
    let length = x.length;
    for (let i = 0; i < x.length; i++){
        if (x.charAt(i) >= '0' && x.charAt(i) <= '9'){
            total += (x.charAt(i).charCodeAt(0) - 48) * (16**(length-i-1));
            console.log("first if statement run");
        }
        else if (x.charAt(i) >= 'A' && x.charAt(i) <= 'F'){
            total += (x.charAt(i).charCodeAt(0) - 55) * (16**(length - i-1));
            console.log("else if statement run");
        }
        else{
            throw "Invalid Hex! Use Uppercase letters!"
        }
    }
    return total;
}

function hex_binary(x){
    x = hex_dec(x);
    binary = dec_binary(x);
    return binary;
}

function dec_hex(x){
    x = parseInt(x, 10);
    console.log(x.toString(16));
    return (x.toString(16).toUpperCase());
}

function binary_hex(x){
    return(dec_hex(binary_dec(x)));
}
