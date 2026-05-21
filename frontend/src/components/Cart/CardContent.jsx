import { RiDeleteBin3Line } from "react-icons/ri"

const CardContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirts",
      size: "M",
      color: "red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200/300?random=1"
    },
    {
      productId: 2,
      name: "Shirts",
      size: "M",
      color: "red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200/300?random=2"
    },
    {
      productId: 3,
      name: "T-shirts",
      size: "M",
      color: "orange",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200/300?random=3"
    },
  ]

  return (
    <>
      {cartProducts.map((product, index) => (
        <div key={index} className="flex justify-between py-4 border-b">

          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
          </div>

          <div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-gray-500">
              Size: {product.size} | Color: {product.color}
            </p>

            <div className="flex items-center mt-2">
              <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
              <span className="mx-4">{product.quantity}</span>
              <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
            </div>

            <p className="mt-1">$ {product.price.toLocaleString()}</p>

            <button className="mt-2">
              <RiDeleteBin3Line className="h-5 w-5 text-red-500 hover:text-red-700" />
            </button>
          </div>

        </div>
      ))}
    </>
  )
}

export default CardContent