import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SalesSync</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/products" className="hover:text-gray-200">Products</Link>
          <Link to="/inventory" className="hover:text-gray-200">Inventory</Link>
          <Link to="/sales" className="hover:text-gray-200">Sales</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
