const submitSpace = document.createElement("div")
submitSpace.className = "submit-spacen"
document.body.appendChild(submitSpace)

//Array med alla input-data (list)
const fields = [
    {label: "Author Name", id:"Name", placeholder:"Your Name"},
    {label:"Title", id: "DishName", placeholder: "Name of the Dish"},
    {label: "Description", id:"DishDescription", placeholder:"Write down the details.."}
]

//Loop genom array och skapa element
for (const field of fields){

    //skapa label element, ta allt från array
const label = document.createElement("label")
label.textContent = field.label
label.htmlFor = field.id

//skapa input element, ta allt från array
const input = document.createElement("input")
input.type = "text"
input.id =field.id 
input.placeholder = field.placeholder

submitSpace.appendChild(label)
submitSpace.appendChild(input)

}
//skapa submit knappen
const submitbutton = document.createElement("button")
submitbutton.type= "button"
submitbutton.textContent= "submit it"
submitSpace.appendChild(submitbutton)

//on click,
submitbutton.addEventListener("click", () => {
const data= {};
for (const field of fields){
const input = document.getElementById(field.id)
data[field.id]=input.value;                             //den måste ja kolla upp
}
//Skapa en contianer för den här submitten 
const resultCont = document.createElement("div");
resultCont.className = "result-container";

//  datum och tid
const now = new Date();
const dateEl = document.createElement("div");
dateEl.className = "result-date";
dateEl.textContent = `Published: ${now.toLocaleDateString('eng-EN')}`;
resultCont.appendChild(dateEl);

 // Lägg till data
Object.entries(data).forEach(([key, val]) => {
  const container = document.createElement("div");
  container.className= "result-item";
  container.textContent = `${key}: ${val}`;
  resultCont.appendChild(container);
});

// skapar kommentar fälten
const comments = document.createElement("div");
comments.className= "comments";

const commentsTitle = document.createElement("div");
commentsTitle.className= "comments-title";
commentsTitle.textContent = "Comments";

//listan där kommentarerna hamnar
const commentList = document.createElement("div");
commentList.className= "comment-list";

const textarea = document.createElement("textarea");
textarea.className="comment-input";
textarea.rows = 3;
textarea.placeholder = "Write a comment...";

const addCommentBtn = document.createElement("button");
addCommentBtn.className= "comment-add";
addCommentBtn.textContent="Add comment";

addCommentBtn.addEventListener("click",()=>{
    const text=textarea.value.trim();
    if(!text) return;


//skapa rad för kommentars lådan
const item = document.createElement("div");
item.className= "comment-item";

const stamp = new Date().toLocaleDateString('en-EN',{datastyle: 'short'});
const content = document.createElement("span");
content.textContent= `${text} (${stamp})`;

//skapa en delet knapp
const del = document.createElement("button");
del.textContent="x";
del.className="comment-del"
del.title= "Delete";
del.addEventListener("click", ()=> item.remove());

//bygga ihop raderna
item.appendChild(content);
item.appendChild(del);
commentList.appendChild(item);
textarea.value= "";
});

comments.appendChild(commentsTitle);
comments.appendChild(commentList);
comments.appendChild(textarea);
comments.appendChild(addCommentBtn);

resultCont.appendChild(comments);


//removeBTN
const RemoveBtn = document.createElement("button")
RemoveBtn.textContent = "Remove"
RemoveBtn.className = "removeBtn"
RemoveBtn.addEventListener("click", () => {
    resultCont.remove(); // <-- tar bort just den här containern
  });
  resultCont.appendChild(RemoveBtn);
  submitSpace.appendChild(resultCont);
});

