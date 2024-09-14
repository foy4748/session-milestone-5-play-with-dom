const navContainer = document.getElementById("nav-item-container");
const navItems = navContainer.getElementsByTagName("li");
console.log(navItems);

let lastClickedNav = null;

for (let singleNavItem of navItems) {
  console.log(singleNavItem);
  singleNavItem.addEventListener("click", function () {
    if (lastClickedNav == null) {
      lastClickedNav = singleNavItem;
    } else {
      lastClickedNav.classList.remove("bg-red-500");
      lastClickedNav.classList.remove("text-slate-50");
      lastClickedNav = singleNavItem;
    }

    lastClickedNav.classList.add("bg-red-500");
    lastClickedNav.classList.add("text-slate-50");
  });
}

window.onload = function () {
  navItems[0].click();
};
