function theme() {
    const html = document.documentElement
    const button = document.querySelector(".none")
    html.classList.toggle("light")

    if (html.classList.contains('light')) {
        button.classList.remove("back")
    }
    else {
        button.classList.add("back")
    }
}