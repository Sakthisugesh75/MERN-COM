
const ProductDetails = () => {

const selectedProduct={
  name:"sakthi",
  price:120,
  originalPrice:150,
  description:"this is a stylish jacket"
}

  return (
   <>
   <div className="p-6">
<div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
    <div className="flex flex-col md:flex-row">

<div className="hidden md:flex flex=col space-y-4 mr-6">
{selectedProduct}
</div>
        
    </div>
</div>
   </div>
   
   </>
  )
}

export default ProductDetails