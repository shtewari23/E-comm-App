import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation: React.FC = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.order) {
    return <div className="text-center text-gray-500 py-8">No order information available.</div>;
  }

  const { order } = state;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Order Confirmation</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
        <ul className="space-y-4">
          {order.items.map((item: any, index: number) => (
            <li key={index} className="flex justify-between">
              <span>{item.title} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-xl font-bold">${order.total.toFixed(2)}</span>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Shipping Address:</h3>
          <p>{order.shippingAddress}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Payment Method:</h3>
          <p>{order.paymentMethod}</p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
