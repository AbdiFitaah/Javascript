

let color = document.querySelector(".color");
let colorTheme = document.querySelector(".color-theme");
let listColors = document.querySelector(".list-colors");
let btnClear = document.querySelector(".btn-clear");
color.addEventListener("change",()=>{
    colorTheme.style.backgroundColor=color.value;

    let li= document.createElement("li")
    li.textContent=color.value;
    listColors.append(li)
    li.style.color=color.value

})

btnClear.addEventListener("click",()=>{
    listColors.remove()
})