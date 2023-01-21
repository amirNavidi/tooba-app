export function products(item){
  let product =[]

  if(item ==="jewellery"){
    product=["Necklece" ,"Braclet" ,"Ring"]
  }
  else if(item==="stones"){
    product =["Diamond" ,"Emerald" ,"Sppahire"]
  }
  else if(item ==="gold"){
    product =["Necklace" ,"Braclet" ,"Ring" ,"Earing"] 
  }
  else if(item ==="silver"){
    product =["Necklece" ,"Braclet"]
  }
  else if(item ==="watch"){
    product =["classic" ,"sport" ,"automatic"]
  }
  else{
    product =""
  }
  return product
}