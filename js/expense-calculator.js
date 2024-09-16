const insertButton = document.getElementById("expense-insert-btn")
const expenseField = document.getElementById("expense-field")
const amountField = document.getElementById("amount-field")

const rowContainer = document.getElementById("row-container")

const expenseSpan = document.getElementById("expense-amount")

insertButton.addEventListener("click", function () {

    const expense = expenseField.value
    const amount = Number(amountField.value)

    const row = `
      <div class="flex justify-between" data-amount="${amount}">
        <p>${expense}</p>
        <p>${amount}</p>
      </div>
    `
    // Using JS function
    const rowUsingJS = document.createElement("div")
    const expenseP = document.createElement("p")
    const amountP = document.createElement("p")

    expenseP.append(expense)
    amountP.append(amount)

    rowUsingJS.classList.add("flex", "justify-between")
    rowUsingJS.setAttribute("data-amount", amount)

    rowUsingJS.append(expenseP)
    rowUsingJS.append(amountP)

    rowContainer.appendChild(rowUsingJS)
    // END of Using JS function

    let expenseAmount = Number(expenseSpan.innerText)
    expenseAmount += amount

    expenseSpan.innerText = expenseAmount

    rowContainer.innerHTML += row;

})