const inputExpenseName = document.querySelector("#inputExpense");
const inputExpenseAmount = document.querySelector("#expenseAmount");
const addButton = document.querySelector("#addbtn");
const displayExpenseList = document.querySelector("#expenseContainer");
const expenseTotal = document.querySelector("#expenseTotal");

addButton.addEventListener("click",totalExpenseFinder);

let expenseCounter = 0;
let allExpenseList = [];


function totalExpenseFinder() {
    let expenseListItem = {};

    //finding the total expense//
    let expenseAmount = inputExpenseAmount.value;
    let expenseName = inputExpenseName.value;

    let amount = parseInt(expenseAmount, 10);

    expenseCounter = expenseCounter + amount;
    // console.log(expenseCounter); 
    expenseTotal.innerHTML = expenseCounter;

    //------------------------------------------//
   //showing the list of expenses by the user//
    expenseListItem.name = expenseName;
    expenseListItem.amount = expenseAmount;

    //console.log(expenseListItem);
    allExpenseList.push(expenseListItem);
    // console.log(allExpenseList);

    let outputExpenseList = allExpenseList.map(expense => {
        return `<div> ${expense.name} = ${expense.amount}</div>  `
    }).join("");

    //console.log(output);
    displayExpenseList.innerHTML = outputExpenseList;
};
