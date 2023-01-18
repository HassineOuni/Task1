let button = document.querySelector("button");

let liste = document.querySelector("ul");

let input = document.querySelector("input");

button.addEventListener("click", addTodo);
input.addEventListener('keyup', (e) =>{
  if(e.keyCode ===13) {
    addTodo()
  }
}
)
let counter=1;
let id="l"+counter;
let id2="cb"+counter;
let id3="a"+counter;

function addTodo() {
if(input.value.trim() == ''){
  alert("The field is empty ! Please restart and fill it.");}
else{
  liste.innerHTML += `<li id="${id}"> <input type='checkbox' id=cb${id2} onclick="valider('${counter}')"><a id='a'+${id3}>${input.value}</a>  <button onclick='supp("${id}")'>delete</button> </li>`;
  input.value = "";
}
}

function supp(num){
  document.getElementById(num).remove();
}
function valider(num){
  cb=document.getElementById("cb"+num);
  if(cb.checked){
    document.getElementById(num).classList.add("line-through");
  }
  else{
    document.getElementById(num).classList.remove("line-through");
      }
}



