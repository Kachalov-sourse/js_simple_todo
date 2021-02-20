var enter_buttom = document.getElementById("enter_buttom");
var input_place = document.getElementsByTagName("input")[0];
var item_list= document.getElementsByClassName("items_list")[0];
var temp_value;


enter_buttom.onclick = ()=>{
temp_value = input_place.value;
input_place.value = "";
console.log(temp_value);
if(temp_value.search('^ *$')==-1)
addToList();

}

function addToList(){
item_list.innerHTML += `<div class=\"item\">${temp_value}<button class=\"exit_buttom\" onclick=\"deleteFunction(this)\">X</button></div>`;
}


function deleteFunction(element){
    element.parentElement.classList.add("deleted");
}