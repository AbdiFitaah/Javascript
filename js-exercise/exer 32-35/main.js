
// exercise 32
const h1= document.querySelector("h1");
const text= document.querySelector(".text");

const list= document.querySelector(".list")

console.log(h1);
console.log(text);

// exercise 33
function changeContent(){
    h1.textContent="Welcome i am from javascrtipt";
    text.innerHTML="hello am from java<strong>script</strong>";
}

function addItem(){
    const newitem=document.createElement("li");
    newitem.textContent="items";
    list.append(newitem);
}


function removeItem(){
    if(list.lastChild){
        list.removeChild(list.lastChild)
    }
}


// exercise 35
const image = document.querySelector('img')
function changeImage(){
    
    const url= prompt("Enter Image Link here");
    const BorderColor= prompt("Enter Image Border Color here");
    const width= prompt("Enter Image width here by PX");
    const height= prompt("Enter Image height here by PX");
    const borderRadios= prompt("Enter Image Border-Radios here by PX");
    
    image.style.padding="20px";
    image.setAttribute("src",url)
    image.style.border="1px solid "+BorderColor;
    image.style.width= width+"px";
    image.style.height=height+"px";
    image.style.borderRadius=borderRadios+"px";
}