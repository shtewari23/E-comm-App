import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchProducts } from '../features/productSlice';
import { Link } from 'react-router-dom';
import { Product } from '../types'; // Import Product type
import { motion } from 'framer-motion';

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className="text-center text-gray-500 py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="group block bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <motion.img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300 p-4"
              whileHover={{ scale: 1.1 }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                {product.title}
              </h2>
              <p className="text-lg font-medium text-gray-700">${product.price}</p>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
