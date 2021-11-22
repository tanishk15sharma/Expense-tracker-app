const inputExpenseName = document.querySelector("#inputExpense");
const inputExpenseAmount = document.querySelector("#expenseAmount");
const addButton = document.querySelector("#addbtn");
const displayExpenseList = document.querySelector("#expenseListContainer");
const expenseTotal = document.querySelector("#expenseTotal");


addButton.addEventListener("click", totalExpenseFinder);
inputExpenseName.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        totalExpenseFinder();
    }
});



let expenseCounter = 0;
let allExpenseList = [];


function totalExpenseFinder() {


    //finding the total expense//
    let expenseAmount = Number(inputExpenseAmount.value) ;

    expenseCounter = expenseCounter + expenseAmount;
    // console.log(expenseCounter); 
    expenseTotal.innerHTML = "Total: " + expenseCounter + " ₹";

    findListArry();

};

function findListArry() {
    let expenseListItem = {};
    let expenseAmount = inputExpenseAmount.value;
    let expenseName = inputExpenseName.value;


    inputExpenseAmount.value = "";
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

}



function getDateString(datemoment) {
    return datemoment.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
};

function showUndeleteItems(datevalue) {
    // let arr = [];
    
    // for (let i = 0; i < allExpenseList.length; i++) {
    //    // if (allExpenseList[i].moment.valueOf() !== datevalue) {
    //         //arr.push(allExpenseList[i]);
    //         //console.log(allExpenseList[i].moment.valueOf() );
    //         allExpenseList = allExpenseList.filter(item => {

    //         }   )
    //     }
    // }
    allExpenseList = allExpenseList.filter(item => {
        return  item.moment.valueOf() !== datevalue
    })

   let  counter = 0;
    // allExpenseList = arr;
    for (let i = 0; i < allExpenseList.length; i++) {
         counter = counter + allExpenseList[i].amount;
     }
     renderListArry(allExpenseList);
     expenseTotal.innerHTML = "Total: " + counter + " ₹";

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


// let ara= [1,2,3,4,5];

// let newarra = ara.filter(e =>{
//     return e > 2 
// }  )

// console.log( newarra);

















