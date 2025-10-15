const submitSpace = document.createElement("div")

submitSpace.className = "submit-spacen"
document.body.appendChild(submitSpace)

//Array med alla input-data (list)
const fields = [
    {label: "Author Name", id:"Name", placeholder:"Your Name"},
    {label:"Title", id: "DishName", placeholder: "Name of the Dish"},
    {label: "Describtion", id:"DishDescribtion", placeholder:"Write down the details.."}
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
data[field.id]=input.value //den måste ja kolla upp

}
console.log("all values", data)

//knappen ska printa ut

const list = document.createElement("ul");
Object.entries(data).forEach(([key, val]) => {
  const li = document.createElement("li");
  li.textContent = `${key}: ${val}`;
  list.appendChild(li);
});
submitSpace.appendChild(list);

})


// const user = document.getElementById("").value 
// console.log("Name",user)



// const date = new Date();  