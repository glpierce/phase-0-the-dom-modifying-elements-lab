const main = document.getElementById("main");
main.remove();

const body = document.querySelector("body");
const newHeader = document.createElement("h1");
newHeader.textContent = "victory";
newHeader.id = "victory";
newHeader.innerHTML = "Grant is the champion";
body.append(newHeader);

