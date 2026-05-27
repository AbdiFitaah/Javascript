

async function PostData(){

  try{
    const response= await fetch("https://jsonplaceholder.typicode.com/posts",{
      method:'POST',
      headers:{
        'Content-Type':"application/json"
      },
      body: JSON.stringify({
        title:'hello',
        body:" kan waa body",
        userId:1
      })
    })
    if(!response.ok){
       throw new error("there is NO data")
    }
    console.log(response);

    const data = await response.json();
    console.log(data);

  }catch(err){
    console.error(err)
  }

}

PostData();