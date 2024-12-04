async function getProductListFromBackEnd(){
      
    let URL="https://crud.teamrabbil.com/api/v1/ReadProduct"
    let res=await fetch(URL)
    let data=await res.json()
    console.log(data)
  } 

  getProductListFromBackEnd()