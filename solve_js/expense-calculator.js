// Grabbing Elements
const expenseField = document.getElementById("expense-field");
const amountField = document.getElementById("amount-field");
const amountContainer = document.getElementById("expense");
let currentExpenses = Number(amountContainer.innerText);

const expenseInsertBtn = document.getElementById("expense-insert-btn");

const expenseRecordContainer = document.getElementById("expense-records");

function exponseRecordRow(expense, amount) {
  return `
        <p>${expense}</p>
        <p>${amount}</p>
	`;
}

expenseInsertBtn.addEventListener("click", function () {
  // Grabbing Input Values
  const expenseInput = expenseField.value;
  const amountInput = Number(amountField.value);

  // Updating Total Expense
  currentExpenses += amountInput;
  amountContainer.innerText = currentExpenses;

  // Creating Expense Row
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("flex", "justify-between");
  rowContainer.setAttribute("data-amount", amountInput);
  //rowContainer.setAttribute("onclick", "deleteRecord()");
  rowContainer.onclick = deleteRecord;
  const newRow = exponseRecordRow(expenseInput, amountInput);
  rowContainer.innerHTML = newRow;

  // Updating DOM
  expenseRecordContainer.appendChild(rowContainer);

  // Resetting Input fields
  expenseField.value = "";
  amountField.value = null;
});

function deleteRecord() {
  const toBeDeleteAmount = Number(this.dataset.amount);
  currentExpenses -= toBeDeleteAmount;
  amountContainer.innerText = currentExpenses;

  this.remove();
  //this.parentNode.removeChild(this);
}
