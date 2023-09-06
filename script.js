
let vars = {
    num1: "", num2: "", operator: "", operatorStored: false, display: null
};
document.getElementById("box").innerHTML = vars.display;


function updateDisplay(){
    document.getElementById("box").innerHTML = vars.display;
}

function reply_numbers(clicked_object){
    if (vars.operatorStored === false){
        vars.num1 += clicked_object.getAttribute('data-other-attr');
        vars.display = vars.num1
        updateDisplay();
    }else{
        vars.num2 += clicked_object.getAttribute('data-other-attr');
        vars.display= vars.num2
        updateDisplay();
    }

}

function resetVars(){
    vars = {
        num1: "", num2: "", operator: "", operatorStored: false, display: null
    };
    updateDisplay();
    return vars
}

function reply_operators(clicked_object){
    result = clicked_object.getAttribute('data-other-attr')
        vars.operatorStored = true
        vars.operator = result
        vars.display = result
        updateDisplay();
    }

function add(a,b){
    let result = a +b;
    return result
}

function subtract(a,b){
    let result = a - b;
    return result
}

function multiply(a,b){
    let result = a * b;
    return result
}

function divide(a,b){
    let result = a / b
    return result
}


// event listener button push (numbers) save to num1, display
// if button push again and is numbers concatenate to num 1, display
// if button push again and is operator save to operator, display
// if button push again and is number save to num2, display
// concatenate number button push to num 2 until equals or clear is hit
// if equals call operate function and display result
// if clear clear all variables operators and display


function operate(operator, a, b){
    // takes in operator and 2 numbers and calls the proper function
}