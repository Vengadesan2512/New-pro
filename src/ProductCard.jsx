import { useState } from "react";
function ProductCard({productimage, productName,setIncart,inCart}){
  const [show,setshow]=useState(true)
  const handleAdd=()=>{
    setshow(!show)
    setIncart(inCart+1)
  }
  const handleRemove=()=>{
    setshow(!show)
    setIncart(inCart-1)
  }
  return(
    <div className="card-component">
      <img src={productimage} alt="no data"/>
      <h3>{productName}</h3>
      {
      show === true?<button onClick={handleAdd}>Add to Cart</button>  :
      <button id="btn-com" onClick={handleRemove}>Remove from Cart</button>
      }
    </div>
    
  )

}
export default ProductCard;