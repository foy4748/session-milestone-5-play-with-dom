// Grabbing Elements
const couponField = document.getElementById("coupon-field");
const couponBtn = document.getElementById("coupon-btn");
const discountText = document.querySelector("h1");

console.log(discountText)

// Applicable Coupons
const coupons = {
  BD20: 20,
  NEW15: 15,
  PH90: 90,
};

let isCouponApplied = false;

function applyCoupon() {
  const userInput = couponField.value;
  if (userInput in coupons && isCouponApplied == false) {
    const discountP = coupons[userInput];
    const parts = discountText.innerText.split(" ");
    console.log(parts);
    const previousAmount = parts[parts.length - 1];
    console.log(previousAmount);
    const discount = (previousAmount * discountP) / 100;
    const newAmount = previousAmount - discount;
    discountText.innerText = `Discounted Price: ${newAmount}`;
    userInput.value = "";
    isCouponApplied = true;
    return;
  }

  if (isCouponApplied) {
    alert("You've already used a coupon");
  }
}

// Event Listeners
couponBtn.onclick = applyCoupon;

couponField.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    applyCoupon();
  }
});
