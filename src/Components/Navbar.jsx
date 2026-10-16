import { ShoppingCartMinus, UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">Logo</h1>
      <ul className="flex gap-6 font-medium text-gray-700">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/contact">Contact</a></li>
     
      </ul>
           <div className="flex items-center gap-5 text-gray-800">
        <ShoppingCartMinus className="cursor-pointer" />
        <UserRound className="cursor-pointer" />
      </div>
     
      
    </nav>
  );
};

export default Navbar;