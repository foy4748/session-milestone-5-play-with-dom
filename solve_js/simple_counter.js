//console.log("Simple Counter");

// Grab Elements
const card = document.getElementsByClassName("card")[0];
const displayingCount = document.getElementById("count-1");
const increaseButton = document.getElementsByClassName("increase-button")[0];
const decreaseButton = document.getElementsByClassName("decrease-button")[0];

increaseButton.addEventListener("click", function (e) {
  let displayingCount_num = Number(displayingCount.textContent);
  displayingCount_num++;
  displayingCount.textContent = displayingCount_num;

  //e.stopPropagation();
});

decreaseButton.addEventListener("click", function (e) {
  let displayingCount_num = Number(displayingCount.textContent);
  displayingCount_num--;
  displayingCount.textContent = displayingCount_num;
  //e.stopPropagation();
});

let isCounterInactive = false;

function toggleCounter() {
  isCounterInactive = !isCounterInactive;
  if (isCounterInactive) {
    increaseButton.setAttribute("disabled", true);
    decreaseButton.setAttribute("disabled", true);
    card.classList.add("bg-red-500");
  } else {
    // [❌]Won't work
    // increaseButton.setAttribute("disabled", false);
    // decreaseButton.setAttribute("disabled", false);

    // [✅] Works
    increaseButton.removeAttribute("disabled");
    decreaseButton.removeAttribute("disabled");
    card.classList.remove("bg-red-500");
  }
}
