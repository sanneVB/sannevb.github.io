const today = new Date()
const thisYear = today.getFullYear()
const footer = document.body.querySelector("footer")
const copyright = document.createElement("p")
copyright.innerHTML = `Sanne van Boheemen, &copy;${thisYear}`
footer.appendChild(copyright)

console.log(footer)