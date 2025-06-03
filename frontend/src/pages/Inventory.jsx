import { useState, useEffect } from 'react';
import axios from 'axios';

function Inventory() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
  });

  // Fetch products on page load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', formData);
      setFormData({ name: '', quantity: '', price: '' });
      fetchProducts(); // Refresh product list
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Product Name" className="border p-2 rounded" />
          <input name="quantity" value={formData.quantity} onChange={handleChange} type="number" placeholder="Quantity" className="border p-2 rounded" />
          <input name="price" value={formData.price} onChange={handleChange} type="number" placeholder="Price" className="border p-2 rounded" />
        </div>
        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Product
        </button>
      </form>

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold mb-2">Product List</h3>
        <ul>
          {products.length === 0 ? (
            <li className="text-gray-500">No products found.</li>
          ) : (
            products.map(product => (
              <li key={product._id} className="border-b py-2">
                {product.name} – Qty: {product.quantity} – ₹{product.price}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Inventory;
