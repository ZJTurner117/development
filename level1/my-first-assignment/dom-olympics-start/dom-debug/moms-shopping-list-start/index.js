var input = document.getElementById("add-todo");
console.log('input:', input)
    input.addEventListener("submit", function(event){
    event.preventDefault()
let addedItem = document.getElementById("input").value
    input.title.value = ""  

let newItem = document.createElement('li')
    document.getElementById('list').append(newItem)
    newItem.textContent = addedItem
    //newItem.textContent = addedItem   

let newEditButton = document.createElement('button') 
    newEditButton.textContent = 'edit' 
    //newEditButton.style = "width: 37.5px; height: 21px; margin: auto"     
    document.getElementById('list').append(newEditButton)
    newEditButton.setAttribute("id","myId")
let newDeleteButton = document.createElement('button') 
    newDeleteButton.textContent = 'X'  
    //newDeleteButton.style = "width: 37.5px; height: 21px; float: right; margin: auto"                    
    document.getElementById('list').append(newDeleteButton) 
    newDeleteButton.setAttribute("id","myId")
    newDeleteButton.addEventListener("click", () => {
        newItem.remove()
        newEditButton.remove()
        newDeleteButton.remove()
    })
});


// getDetails(textContent)
