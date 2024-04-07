
const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo192.png" alt="My Logo" className="h-8 mr-2" />
          <span className="text-white font-bold">Training Management Software</span>
        </div>
        <ul className="flex space-x-8 text-white">
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Team</a></li>
        </ul>
        <div className="flex">
          <button className="bg-white text-orange-500 py-2 px-4 rounded-md mr-2">Log In</button>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-md">Register</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;