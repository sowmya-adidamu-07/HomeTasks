// Calculating with Functions
// https://www.codewars.com/kata/calculating-with-functions
function zero() { 
    return arguments.length === 1 ? arguments[0](0) : 0; 

}

function one() { 
    return arguments.length === 1 ? arguments[0](1) : 1; 
}

function two() { 
    return arguments.length === 1 ? arguments[0](2) : 2;
 }

function three() {
     return arguments.length === 1 ? arguments[0](3) : 3; 

}

function four() { 
    return arguments.length === 1 ? arguments[0](4) : 4; 

}

function five() { 
    return arguments.length === 1 ? arguments[0](5) : 5; 
    
}

function six() { 
    return arguments.length === 1 ? arguments[0](6) : 6; 
    
}

function seven() { 
    return arguments.length === 1 ? arguments[0](7) : 7; 
    
}

function eight() { 
    return arguments.length === 1 ? arguments[0](8) : 8;
}

function nine() { 
    return arguments.length === 1 ? arguments[0](9) : 9; 

}

function plus() {
    var operand1 = arguments[0];
    return function(operand2) { 
        return operand2 + operand1;
    }
    
}

function minus() {
    var operand1 = arguments[0]; 
    return function(operand2) { 
        return operand2 - operand1; 
        
    }
    
}

function times() {
    var operand1 = arguments[0]; 
    return function(operand2) {
        return operand2 * operand1;
   }
    
}

function dividedBy() {
    var operand1 = arguments[0];
    return function(operand2) { 
        return Math.floor(operand2 / operand1); 
        
    }
    
}


