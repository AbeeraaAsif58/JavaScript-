
do {
    let num1 = prompt("Enter your first number")
    let num2 = prompt("Enter your secound number")
    var operator = prompt("Apply the operator which you want (+, -, *, /, %)")

    if (operator == "+") {
        console.log( Number(num1) + Number(num2));
    }
    else if (operator == "-") {
        console.log(Number(num1) - Number(num2));
    }
    else if (operator == "*") {
        console.log(Number(num1) * Number(num2));
    }
    else if (operator == "/") {
        console.log(Number(num1) / Number(num2));
    }
    else if (operator == "%") {
        console.log(Number(num1) % Number(num2));
    }
    var operator =  prompt(" Do you want to continue? (yes/no)");
} while ( operator === "yes");
             
       if (operator === "no"){
        console.log("your calculation is end ");
       }
      






















