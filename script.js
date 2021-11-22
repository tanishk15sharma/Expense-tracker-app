const inputExpenseName = document.querySelector("#inputExpense");
const inputExpenseAmount = document.querySelector("#expenseAmount");
const addButton = document.querySelector("#addbtn");
const displayExpenseList = document.querySelector("#expenseListContainer");
const expenseTotal = document.querySelector("#expenseTotal");


addButton.addEventListener("click", totalExpenseFinder);
addButton.addEventListener("keyup", function(event) {
    if(event.keyCode === 13  ){
        event.preventDefault();
        addButton.click()
    }
} );


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
    expenseTotal.innerHTML = "Total: " + expenseCounter + " ₹";

    inputExpenseAmount.value  = "";
    inputExpenseName.value = "";

    //------------------------------------------//
    //showing the list of expenses by the user//
    expenseListItem.name = expenseName;
    expenseListItem.amount = expenseAmount;
    expenseListItem.moment = new Date();

    //console.log(expenseListItem);
    allExpenseList.push(expenseListItem);
    // console.log(allExpenseList);

    renderListArry(allExpenseList);

    // inputExpenseAmount.innerText = "";
    // inputExpenseName.innerText = "";
};

function getDateString(datemoment) {
    return datemoment.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
};

function showUndeleteItems(datevalue) {
    let arr = [];
    for (let i = 0; i < allExpenseList.length; i++) {
        if (allExpenseList[i].moment.valueOf() !== datevalue) {
            arr.push(allExpenseList[i]);
        }
    }
    allExpenseList = arr;
   renderListArry(allExpenseList);
};

function renderListArry(listOfArrys) {

    let outputExpenseList = listOfArrys.map(expense => createListItem(expense)).join("");
    displayExpenseList.innerHTML = outputExpenseList;

};

function createListItem({
    name,
    amount,
    moment
}) {
    return ` <li class="list-group-item d-flex justify-content-between">
    <div class="d-flex flex-column">
    ${name}
        <small class="text-muted">${getDateString(moment)} </small>
    </div>
    <div>
        <span class="px-5"> 
        ${amount}
        </span>
        <button type="button" class="btn btn-outline-danger btn-sm"  onclick=" showUndeleteItems(${moment.valueOf()})">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
</li>`
}