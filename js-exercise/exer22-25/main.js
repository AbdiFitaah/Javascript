

// exercise 22
let array=['red','green','blue'];

let [frist,second,third]=array;
console.log(`first element ${frist} and third elelmnet${third}`);

// exercise 23

let obj={ make:"Toyota",model: "carolla",year:2000};
let {make,model} = obj;
console.log(make,model);

// exercise 24

function calCulateArea(width, height=width){
    console.log('Erea of squere waa '+width*height );
}
calCulateArea(2,3)


// exercise 25

let oldarray = [1,2,3];
let newArray = [...oldarray,4,5,6]
console.log(newArray);


function multiply(...numbers){
    return numbers.reduce((total,num) => total * num)
}
console.log(multiply(2,2));