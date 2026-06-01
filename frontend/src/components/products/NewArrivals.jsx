import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const NewArrivals = () => {

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


<div className="container mx-auto overflow-x-scroll flex space-x-6 relative">
    {newArrivals.map((product)=>{
        <div key={product._id}>
           
                <img 
              src={product.images[0]?.url}
          alt={product.images[0]?.altText}
           className="w-full h-80 object-cover"
                />
            
        </div>
    })}
</div>

</div>
        
    </section>
    </>
  )
}

export default NewArrivals