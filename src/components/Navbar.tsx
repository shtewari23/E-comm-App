import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ShoppingCartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'; // Import Heroicons

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold hover:text-indigo-400 transition-colors duration-300">
          <ShoppingBagIcon className="h-8 w-8 text-white mr-2" aria-hidden="true" />
          E-Shop
        </Link>
        <ul className="flex space-x-6 items-center">
          <li className="flex items-center space-x-2">
            <Link
              to="/"
              className="flex items-center hover:text-indigo-400 transition-colors duration-300"
            >
              <HomeIcon className="h-6 w-6 text-white mr-1" aria-hidden="true" />
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link
              to="/cart"
              className="flex items-center hover:text-indigo-400 transition-colors duration-300"
            >
              <ShoppingCartIcon className="h-6 w-6 text-white mr-1" aria-hidden="true" />
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
