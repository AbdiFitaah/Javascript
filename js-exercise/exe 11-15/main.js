

// exercise 11

for(let i=1; i<51; i++){
    console.log(i);
}

// exercise 12
 let items=['apple','banana','chery'];

 for(let i=0; i<items.length; i++){
    console.log(items[i]);
 }

//  excersies 13

let n = 5;
while(n > 0 ){
    console.log(n);
    n--;
}


// exercise 14
let number;
do{
    number=prompt("Enter Your Number: ")
}while(number < 10)

console.log("your number is " + number);



// exercise 15

const people =[
    {name:'Ali',age:25,city:"Moqdisho"},
    {name:'Muuse',age:30,city:"Hargeysa"},
    {name:'Ahmed',age:25,city:"Bosaaso"},
]

for(const peoples of people){
    for(const pkey in peoples){
        console.log("Your "+pkey+" " +peoples[pkey]);
    }
    console.log("----------");
}