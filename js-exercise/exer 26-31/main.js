
// exercise 26

function showData() { 

    alert("xogtaan aqbal si laguu tuso waxa dhiman");

}
showData();
console.log('after aan aqbalay ');


function RunData(callback){

        setTimeout(() => {
            alert("waxaan ka imaan doonaa gadaal madama aan ahy Asyn");
        }, 2000);
        callback()
}

RunData(()=>{
    console.log('waa ka hor imanaya alertga madama aan ahy Async');
})



// exercise 27

function returnOnPromise(){
    return new Promise((res,rej)=>{

        setTimeout(() => {
            
            const sucsses=true
            if(sucsses){
                res('waa la helay xogta');
            }else{
                rej("fialed data lama helin xog");
            }
        }, 3000);
    })
}
returnOnPromise()
            .then((data)=>{console.log(data);})
            .catch((err)=>{console.log(err);})

// exercise 28

async function ayscnPromese() {
    try{
    const data= await returnOnPromise()
    console.log(data);
    }catch(err){
        console.log(err);
    }
    
}



// exercise 29

async function fetchData() {
    
    const responce = await fetch("data.json");
    const data = await responce.json()
    console.log(data);


}
fetchData();


// exercise 30  

function operate(a,b,callback) {  
    return callback(a,b);
}
function multiply(a,b,callback) {  
    return a * b;
}
function divide(a,b,callback) {  
    return a / b;
}

console.log('Mulltiplication : ',operate(3,4,multiply));
console.log('Divisition : ',operate(3,4,divide));



// exercise 31

async function getUsers() {
    
    try {
        
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new error("there is no data")
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}
getUsers();
