import mencollection from "../../asset/men.png"
import womencollection from "../../asset/women.png"

const Gendercollection = () => {
  return (
    <>
    <section className="py-16 px-4 lg:px-0">
<div className="container mx-auto flex flex-col md:flex-row gap-8">
      {/* womens collection */}

    <div className="relative flex-1">
      <img src={womencollection} 
      alt="womens collections"
      className="w-full h-[700px] object-cover">
      </img>
      
    </div>

</div>
    </section>
    </>
  )
}

export default Gendercollection