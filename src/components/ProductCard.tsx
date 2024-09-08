import React from 'react';
import { formatPrice } from '../utils/formatPrice';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div className="border p-4 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
        <h2 className="text-xl font-bold mt-2">{product.title}</h2>
        <p className="text-gray-500">{formatPrice(product.price)}</p>
        <p className="text-gray-500">{formatPrice(product.price)}</p>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
