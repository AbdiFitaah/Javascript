
  function gadaal(callback){

    console.log('i am gadaal ');
    const user= {id:1,name:"ali"}
    const arrya=[1,2,3,4]
    callback(user,arrya)
    
  }

//   gadaal(sooHormari)

  gadaal((user,arya)=>{
    console.log('qaab kale ayaa la ii wacay',user,arya);
  })



  // how Promise is writing

  function getData(){
    return new Promise((res,rej)=>{

      setTimeout(()=>{
        const possiple=true;
        if(possiple){
            res("Waa la helay xogta")
        }else{
          rej("Data aa raadineysid lama haayo")
        }
      },2000)

    })
  }
  //how is call
  getData()
        .then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err);});



// new way of promise data

async function display() {

  const data= await getData()
  console.log(data);

}

display();