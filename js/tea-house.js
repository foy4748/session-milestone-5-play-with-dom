const images = document.getElementsByTagName("img")
const cards = document.getElementsByClassName("card")

const htmlTag = document.getElementsByTagName("html")[0]

const button = document.getElementsByClassName("btn")[0]

htmlTag.setAttribute("data-theme", "light")
console.log(htmlTag.getAttribute("data-theme"))

console.log(button.textContent)