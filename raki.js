function mathCalc(a , b){
    let arr = [];
    let multiply = a * b;
    let add = a + b;
    arr.push(multiply, add);
    let newArr = arr.join('')    
    console.log(newArr)
}
mathCalc(7,3)

function newCalc(num){
    let [a, b, c] = num.split('');
    console.log(a,b,c);
}
newCalc(456)