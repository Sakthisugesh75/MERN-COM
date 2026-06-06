import Hero from "../components/layout/Hero"
import Gendercollection from "../components/products/Gendercollection"
import NewArrivals from "../components/products/NewArrivals"
import ProductDetails from "../components/products/ProductDetails"
const Home = () => {
  return (
<>
<Hero/>
<Gendercollection/>
<NewArrivals/>

{/* best Seller */}

<h2 className="text-3xl text-center font-bold mb-4">
  Best Seller
</h2>
<ProductDetails/>
</>

  )
}

export default Home