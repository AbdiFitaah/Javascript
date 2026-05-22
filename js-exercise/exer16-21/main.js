

// exercise 16
let score=51;
if(score>50){
    console.log('You Passed');
}else{
    console.log('You failed');
}


// exercise 17
let temp=0

if(temp<0){
    console.log('Very Cold');
}else if(temp < 15 ){
    console.log('Cold');
}else if(temp < 25){
    console.log('warm');
}else{
    console.log('Hot');
}

// exercise 18
let grade=60;
let result = grade > 60 ? 'Passed' : 'Fail';
console.log(result);

// exercise 19
let number=[1,2,3,4,5];

number.forEach((num)=>{
    console.log(' ' + num);
})

// exercise 20
let fruits=['apple','banana','cherry'];

fruits.map((fruit)=>{
    console.log("length: "+fruit.length);
})

// exercise 21
let num2=[1,2,3,4,5];

let newaray=num2.reduce((total,num)=> total*num)
console.log('total result '+newaray);