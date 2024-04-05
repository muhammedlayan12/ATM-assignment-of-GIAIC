import inquirer from "inquirer";
let myBalance = 15000; //PKR
let myPin = 5566;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin == myPin) {
    console.log("Your pin is correct!!!");
    let operationsAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["check balance", "withdraw"]
        }
    ]);
    console.log(operationsAns);
    if (operationsAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        // Subtract the withdrawal amount from myBalance
        myBalance -= amountAns.amount;
        console.log("Your remaining amount is: ", myBalance);
    }
    else if (operationsAns.operation === "check balance") {
        console.log("Your balance is: ", myBalance);
    }
}
else {
    console.log("Your pin is incorrect!!!");
}
