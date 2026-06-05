import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {Link} from "react-router-dom"
const NewArrivals = () => {

const scrollRef =useRef(null);
const [isDragging, setIsDragging]=useState(false)
const [startX ,setStartX]=useState(0)
const [scrollLeft,setScrollLeft]=useState(false)
const [canScrollRight,setCanScrollRight]=useState(true)



const newArrivals=[
    
    {
        _id:"1",
        name:"Stylist Jacket",
        price:120,
        images:[
            {
                url:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
                altText:"Stylist Jacket"
            }
        ]
    },
    {
        _id:"2",
        name:"Stylist Jacket",
        price:120,
        images:[
            {
                url:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
                altText:"Stylist Jacket"
            }
        ]
    },
    {
        _id:"3",
        name:"Stylist Jacket",
        price:120,
        images:[
            {
                url:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
                altText:"Stylist Jacket"
            }
        ]
    },
    {
        _id:"4",
        name:"Stylist Jacket",
        price:120,
        images:[
            {
                url:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
                altText:"Stylist Jacket"
            }
        ]
    },
    {
        _id:"5",
        name:"Stylist Jacket",
        price:120,
        images:[
            {
                url:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
                altText:"Stylist Jacket"
            }
        ]
    }
]

console.log(newArrivals);
const updateScrollButtons=()=>{
    const container =scrollRef.current;


}
useEffect(()=>{
    const container =scrollRef.current;
    if(container){
        container.addEventListener("scroll", updateScrollButtons);
        updateScrollButtons
    }
})

  return (
   
    <>
    <section>
        <div className="container mx-auto text-center mb-10 relative">

   <h2 className="text-3xl font-bold mb-4">
    Explore New Arrivals
    </h2>          
    <p className="text-lg text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, beatae at. Eos dolore ducimus quae dolor quibusdam ipsum, amet ad 
    </p>

<div className="absolute right-0 bottom-[30px] flex space-x-2">
    <button className="p-2 rounded border bg-white text-black">
        <FiChevronLeft className="text-2xl"/>
    </button>

    <button className="p-2 rounded border bg-white text-black">
        <FiChevronRight className="text-2xl"/>
    </button>
</div>


<div ref={scrollRef} className="container mx-auto overflow-x-scroll flex space-x-6 relative">
    {newArrivals.map((product)=>(
        <div key={product._id}>
           
                <img 
              src={product.images[0]?.url}
          alt={product.images[0]?.altText}
           className="w-full h-80 object-cover"
                />
    <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
        <Link to={`/product/${product._id}`} className="block">
        <h4 className="font-medium">
        {product.name}
        </h4>
        <p className="mt-1">${product.price}</p>
        </Link>
       
    </div>


            
        </div>
    ))}
</div>

</div>
        
    </section>
    </>
  )
}

export default NewArrivals