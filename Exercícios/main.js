const num1 = 10;
const num2 = 60;

function maior(){
    if (num1 > num2){
        return num1
    }else{
        return num2
    }
}

console.log(`O maior número entre ${num1} e ${num2} é ${maior()}`)