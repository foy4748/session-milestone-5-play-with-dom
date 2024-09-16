// Read Operations
const countSpan = document.getElementById("count")
const counter = document.getElementById("counter")

const increaseBtn = document.getElementsByClassName("increase-button")[0]
const decreaseBtn = document.getElementsByClassName("decrease-button")[0]

// ----------
counter.addEventListener("click", function () {

    if (increaseBtn.getAttribute("disabled") == null) {
        console.log("Counter")
        increaseBtn.setAttribute("disabled", true)
        decreaseBtn.setAttribute("disabled", true)
        counter.classList.add("bg-red-500")

    } else {
        increaseBtn.removeAttribute("disabled")
        decreaseBtn.removeAttribute("disabled")
        counter.classList.remove("bg-red-500")

    }
})

increaseBtn.addEventListener("click", function (event) {
    let currentCount = Number(countSpan.innerText)
    currentCount++
    countSpan.innerText = currentCount
    event.stopPropagation()

})
decreaseBtn.addEventListener("click", function (event) {
    let currentCount = Number(count.innerText)
    currentCount--
    countSpan.innerText = currentCount
    event.stopPropagation()

})