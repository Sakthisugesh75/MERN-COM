import { IoClose } from "react-icons/io5"
import CardContent from "../Cart/CardContent"

const CardDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <>
      {/* Overlay */}
    {drawerOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-20 z-40" // 40 → 20 opacity
    onClick={toggleCartDrawer}
  />
)}

      {/* Drawer — */}
      <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-2/4 h-full bg-white 
        shadow-lg transform transition-transform duration-300 flex flex-col z-50 
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleCartDrawer}>
            <IoClose className="h-5 w-5 text-gray-600 hover:text-black" />
          </button>
        </div>

        {/* Cart content scroll */}
        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          <CardContent />
        </div>

        {/* Checkout button */}
        <div className="p-4 bg-white sticky bottom-0 border-t">
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Checkout
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            Shipping, taxes, and discount codes calculated at checkout
          </p>
        </div>

      </div>{/* closing*/}
    </>
  )
}

export default CardDrawer