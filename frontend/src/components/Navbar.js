
const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/" className="text-white font-bold text-xl">My App</a>
        </div>
        <div className="hidden md:block">
          <a href="/" className="text-white mr-4 hover:text-gray-300">Home</a>
          <a href="/about" className="text-white mr-4 hover:text-gray-300">About</a>
          <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
