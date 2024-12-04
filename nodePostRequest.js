async function sendDataToBackEnd(){
     
    let DataToSend={
      productName:"Wireless Mouse",
      productCode:"wm12345",
      img:"https:/example.com/image.wireless-mouse.jpg",
      unitPrice:20.99,
      quantity:2,
      totalPrice:41.98
    }
  

   let URL="https://crud.teamrabbil.com/api/v1/CreateProduct"
  
  let res= await fetch(
    URL,
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(DataToSend)
    }
  )
  let data=await res.json();
  console.log(data)

}
sendDataToBackEnd();
