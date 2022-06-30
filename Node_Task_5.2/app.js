let args =require('minimist')(process.argv.slice(2));
let operands = args['_'],
    operation = args['operation'];

if(isValidOperand())
{
    switch(operation){
        case 'addition':
                            console.log(performAdd());
                            break;
        case 'subtraction': 
                            console.log(performSub());
                            break;
        case 'multiplication':
                            console.log(performMul());
                            break;
        case 'division':
                            console.log(performDiv());
                            break;
        default : 
                            console.log("Invalid Operation");
                            break;
    }
}
else
    console.log("Invalid Arguments are provided!!");

function isValidOperand(){
    operands.forEach(element => {
        if( isNaN(operands[element]) )
             return false;    
    });
    return true;
}
function performAdd(){
   var sum = 0;
   operands.forEach(element => { 
      
       sum += element
   });
   return sum;
}
function performMul(){
    var pro = 1;
    operands.forEach(element => {    
        pro *= element
    });
    return pro;
 }
function performSub(){
    let length = operands.length;
    if(length != 2) return "Invalid Input"
    return operands[0]-operands[1]; 
}
function performDiv(){
     let length = operands.length ;
     if(length != 2) return "Invalid Input";
     if(operands[1] == 0) return "Invalid Operation"
     return operands[0]/operands[1];
}
