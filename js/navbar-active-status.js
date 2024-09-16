const ulTag = document.getElementById("nav-container")

const listItems = ulTag.querySelectorAll("li")

let lastClicked = null


for (let singleListItem of listItems) {

    singleListItem.addEventListener("click", function () {
        if (lastClicked == null) {
            // Style Purpose
            // লাল হইতে দিব
            singleListItem.style.backgroundColor = "red"
            singleListItem.style.color = "white"
            lastClicked = singleListItem
        } else {
            lastClicked.style.backgroundColor = "transparent"
            lastClicked.style.color = "#eee"

            singleListItem.style.backgroundColor = "red"
            singleListItem.style.color = "white"
            lastClicked = singleListItem
        }
    })

}

