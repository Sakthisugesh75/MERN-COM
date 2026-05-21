import { useState } from "react"
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2"

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleSearchToggle = () => {
    setIsOpen(!isOpen)
    setSearchTerm("") // close பண்ணும்போது reset
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Search Term", searchTerm)
    setIsOpen(false)
    setSearchTerm("")
  }

  return (
    <div
      className={`flex items-center justify-center transition-all duration-300 ${
        isOpen
          ? "absolute top-0 left-0 w-full bg-white h-24 z-50"
          : "w-auto"
      }`}
    >
      {isOpen ? (
        // ✅ onSubmit — Enter key & button click இரண்டுமே work ஆகும்
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus // 🆕 search bar open ஆனதும் cursor போகும்
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            {/* Search submit button */}
            <button
              type="submit"
              className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-5 w-5" />
            </button>
            {/* Close button */}
            <button
              type="button"
              onClick={handleSearchToggle}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiXMark className="h-5 w-5" />
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

export default Searchbar