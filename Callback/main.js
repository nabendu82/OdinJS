function displayer(data){
    document.getElementById('demo').innerText = data;
}

function calc(num1, num2, callback){
    let sum = num1 + num2;
    callback(sum)
}

calc(14, 6, displayer)