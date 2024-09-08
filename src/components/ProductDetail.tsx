import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchProducts } from '../features/productSlice';
import { addToCart } from '../features/cartSlice';
import { Product } from '../types'; // Import Product type
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const product = products.find((prod) => prod.id === parseInt(id!));
  
  const [quantity, setQuantity] = useState(1);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!product) return <div className="text-center text-gray-500 py-8">Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, title: product.title, price: product.price, quantity, image: product.image }));
    setButtonClicked(true);
    toast.success('Product added to cart!', { position: 'top-center' });
    setTimeout(() => setButtonClicked(false), 300); // Reset button click state after animation
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl h-screen">
      <div className="flex flex-col md:flex-row gap-10 bg-slate-50  h-3/4 p-4">
        <div className="w-full md:w-1/2">
          <motion.img
            src={product.image || 'path/to/default/image.jpg'} // Fallback image
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-yellow-600 mb-6">${product.price.toFixed(2)}</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="border border-gray-300 rounded-lg px-3 py-2 text-lg w-24 md:w-32 text-center"
            />
            <motion.button
              onClick={handleAddToCart}
              className={`bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-700 transition-colors duration-300 ${buttonClicked ? 'scale-105' : ''}`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
