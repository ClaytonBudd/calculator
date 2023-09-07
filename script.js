
let vars = {
    num1: "", num2: "", operator: "", secondVarStored: false, operatorStored: false, display: null
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
        vars.secondVarStored = true;
        updateDisplay();
    }

}

function resetVars(){
    vars = {
        num1: "", num2: "", operator: "", secondVarStored: false, operatorStored: false, display: null
    };
    updateDisplay();
    return vars
}

function reply_operators(clicked_object){
    result = clicked_object.getAttribute('data-other-attr')
        vars.operator = result    
        vars.operatorStored = true
        if (vars.secondVarStored == true){
            operate(vars.operator, vars.num1, vars.num2)
            
            
        }else{
            vars.display = result
            updateDisplay();
    }
    
}

function add(a,b){
    let result = Number(a) + Number(b);
    return result
}

function subtract(a,b){
    let result = Number(a) - Number(b);
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


function operate(operator, a, b){
    let result
    switch (vars.operator){
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;  
        }
    vars.num1 = result;
    vars.num2 = ""
    vars.display = result;
    updateDisplay()
}