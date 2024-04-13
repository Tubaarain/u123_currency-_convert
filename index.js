#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_amswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: "amount",
        message: "Enter your amount ",
        type: "number",
    },
]);
//  console.log(user_amswer)
let fromAmount = currency[user_amswer.from];
let toAmount = currency[user_amswer.to];
let amount = user_amswer.amount;
let baseAmount = amount / fromAmount; // USD BASSE CURRENCY // 4
let convertedAmount = baseAmount * toAmount;
// console.log (convertedAmount);
let newconvertedAmount = convertedAmount.toFixed(2);
console.log(newconvertedAmount);
//  console.log (fromAmount);
//   console.log (toAmount);
//  console.log(amount);
