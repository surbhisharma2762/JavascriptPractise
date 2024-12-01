const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
const notes = document.querySelector(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");   //The showNotes function gets the saved notes (if any) from localStorage and sets them inside the notesContainer element.
}
showNotes()
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createbtn.addEventListener ("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.svg"
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove(); 
        updateStorage();    //after deleting it should be updated
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {       //represents each individual note
            nt.onkeyup = function(){    //onkeyup event handler
                updateStorage();        //updates storage when we start typing in the p tag
            }
        });
    }

})
document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
