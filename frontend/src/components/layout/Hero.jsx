import heroimg from "../../asset/hero.png"

const Hero = () => {
  return (
    <>
    <section className="relative">
<img src={heroimg}
alt="rabbit"
className=" w-full h-[400px] md:h-[500px] lg:h-[650px] object-cover "
/>  
<div className="absolute inset-0 bg-black opacity-5 flex items-center justify-center">
  <div className="text-center text-white p-6">
    <div className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
New Beginning  Ready <br/>  </div>
  </div>
</div>
</section>

    </>
  )
}

export default Hero