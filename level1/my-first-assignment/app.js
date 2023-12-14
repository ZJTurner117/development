var header = document.getElementById("header")
header.style.backgroundColor = "blue"

document.body.style.backgroundColor = "yellow"
var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.append(newLi)


myList.innerHTML += "<li>3</li>"

document.body.innerHTML += "<p id='paragraph'>V School rocks!</p>"
document.getElementById("paragraph").style.textAlign = "center"

var newP = document.createElement("p")
newP.textContent = "Hello"
document.body.append(newP)
newP.style.textAlign = "center"
newP.style.fontSize = "30px"
newP.style.fontFamily = "script type face"
newP.style.backgroundColor = "green"



var textInput = document.getElementById("name")
var outputText = document.getElementById("paragraph")
var myBtn = document.getElementById("myBtn")
myBtn.addEventListener("click", function(){
    var newText = textInput.value
    outputText.textContent = newText
})







var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston",
    "Tommy Oliver"
]

var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
}


//document.querySelector("#header").cla
//Append can work with multiple nodes or strings, while appendChild can only work with one nodssList.add ("new-class")
//document.querySelector("#header").classList.remove ("new-class")
//document.querySelector("#header").classList.toggle ("new-class")
//document.querySelector("#header").classList.remove ("new-class")
//document.querySelector("#p").classList.add ("new-class")
//document.querySelector("#p").classList.remove ("new-class")
//document.querySelector("#p").classList.toggle ("new-class")
//document.querySelector("#p").classList.remove ("new-class")


//var powerRangers = [
  //  "Jason Lee Scott", 
  //  "Kimberly Hart", 
  //  "Zack Taylor", 
  //  "Trini Kwan", 
  //  "Billy Cranston"
//]

//document.body.innerHTML += [
  //  "<ul>Jason Lee Scott</ul>", 
  //  "<ul>Kimberly Hart</ul>", 
 //   "<ul>Zack Taylor</ul>", 
 //   "<ul>Trini Kwan</ul>", 
 //   "<ul>Billy Cranston</ul>"
//]

//var rangersList = document.getElementById("rangers")

//for (var i = 0; i < powerRangers.length; i++) {
  //  var newName = document.createElement("li")
 //   newName.textContent = powerRangers[i]
  //  rangersList.append(newName)
//}

