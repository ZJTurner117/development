const header = document.getElementById("header");
header.textContent = "JavaScript Made This!!"
const para = document.createElement("p");
para.textContent = "Zachariah Turner.";
header.appendChild(para);

para.style.color = "peachpuff"
const para2 = document.createElement("pa");
para2.textContent = "Wrote the Javascript.";
document.getElementById("header").appendChild(para2);
console.log(document.getElementsByClassName("msg left 1"))
document.getElementById("message-one").textContent = "I have something awesome to talk about!"
document.getElementById("message-two").textContent = "Okay what is it?"
document.getElementById("message-three").textContent = "I won the Lottery!"
document.getElementById("message-four").textContent = "Now you're not a simple farmer!"

const clearBtn = document.getElementById("clear")
document.addEventListener("click", clear1)
function clear1 () { 
    console.log("test")
    // document.getElementById("message-one").textContent = ""
    document.getElementById("message-container").remove()
}


