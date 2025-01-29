"use client"; // Mark this file as a Client Component

import React, { useState, useEffect } from "react";
import { CreditCard, Truck, CheckCircle, ArrowLeft } from "lucide-react";

type CartItem = {
  _id: string;
  title: string;
  price: string;
  imageUrl: string;
  quantity: number;
};

type ShippingDetails = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export default function Checkout() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const subtotal = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  const shipping = 10.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStep(3);
    setIsLoading(false);
    localStorage.removeItem("cart"); // Clear cart after successful order
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          <Truck className="h-4 w-4" />
        </div>
        <div className={`w-20 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          <CreditCard className="h-4 w-4" />
        </div>
        <div className={`w-20 h-1 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          <CheckCircle className="h-4 w-4" />
        </div>
      </div>
    </div>
  );

  const renderShippingForm = () => (
    <form onSubmit={handleSubmitShipping} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            required
            value={shippingDetails.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            required
            value={shippingDetails.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          value={shippingDetails.email}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
        <input
          type="text"
          name="address"
          required
          value={shippingDetails.address}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input
            type="text"
            name="city"
            required
            value={shippingDetails.city}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <input
            type="text"
            name="state"
            required
            value={shippingDetails.state}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
          <input
            type="text"
            name="zipCode"
            required
            value={shippingDetails.zipCode}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <input
            type="text"
            name="country"
            required
            value={shippingDetails.country}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
      >
        Continue to Payment
      </button>
    </form>
  );

  const renderPaymentForm = () => (
    <form onSubmit={handleSubmitPayment} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
        <input
          type="text"
          required
          placeholder="1234 5678 9012 3456"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
          <input
            type="text"
            required
            placeholder="MM/YY"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
          <input
            type="text"
            required
            placeholder="123"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200 disabled:bg-blue-400"
      >
        {isLoading ? "Processing..." : "Place Order"}
      </button>
      <button
        type="button"
        onClick={() => setStep(1)}
        className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition duration-200"
      >
        Back to Shipping
      </button>
    </form>
  );

  const renderOrderComplete = () => (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="h-8 w-8 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
      <p className="text-gray-600 mb-6">
        Thank you for your order. We&apos;ll send you a confirmation email shortly.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        <ArrowLeft className="h-4 w-4" />
        Continue Shopping
      </button>
    </div>
  );

  const renderOrderSummary = () => (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <div className="space-y-3">
        {cart.map((item) => (
          <div key={item._id} className="flex justify-between text-sm">
            <span className="text-gray-600">
              {item.title} x {item.quantity}
            </span>
            <span className="font-medium">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="h-px bg-gray-200 my-4"></div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="h-px bg-gray-200 my-4"></div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span className="text-blue-600">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {renderStepIndicator()}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                {renderShippingForm()}
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                {renderPaymentForm()}
              </>
            )}
            {step === 3 && renderOrderComplete()}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          {step === 1 && renderOrderSummary()}
        </div>
      </div>
    </div>
  );
}
