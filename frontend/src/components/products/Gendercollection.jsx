import mencollection from "../../asset/men.png"
import womencollection from "../../asset/women.png"
import {Link} from "react-router-dom"
const Gendercollection = () => {
  return (
    <>
    <section className="py-16 px-4 lg:px-0">
<div className="container mx-auto flex flex-col md:flex-row gap-8">
      {/* womens collection */}

    <div className="relative flex-1">
      <img src={womencollection} 
      alt="womens collections"
      className="w-full h-[500px] object-cover"/>
      <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Womens collection
        </h2>
        <Link to="/collections/all?gender=women" className="text-gray-900 underline">
        Shop Now</Link>
      </div>
      
    </div>

      {/* mens collection */}

      <div className="relative flex-1">
      <img src={mencollection} 
      alt="mens collections"
      className="w-full h-[500px] object-cover"/>
      <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Mens collection
        </h2>
        <Link to="/collections/all?gender=women" className="text-gray-900 underline">
        Shop Now</Link>
      </div>
      
    </div>
</div>
    </section>
    </>
  )
}

export default Gendercollection