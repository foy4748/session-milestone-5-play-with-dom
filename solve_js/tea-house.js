const htmlTag = document.querySelector("html")

function toggleTheme() {
    const currentTheme = htmlTag.getAttribute("data-theme")
    if (currentTheme == 'light') {

        htmlTag.setAttribute("data-theme", "dark")
    }

    if (currentTheme == 'dark') {
        htmlTag.setAttribute("data-theme", "light")

    }
}