import React, { useState } from 'react';

const menuItems = [
  {
    id: 1,
    name: 'Blueberry Pancakes',
    description: 'Fluffy pancakes topped with blueberries and syrup.',
    price: 8.99,
    image: 'images/pancakes.jpg',
  },
  {
    id: 2,
    name: 'Avocado Toast',
    description: 'Sourdough toast topped with smashed avocado and poached egg.',
    price: 7.5,
    image: 'images/avocadotoast.jpg',
  },
  {
    id: 3,
    name: 'Cheese Omelette',
    description: 'Three-egg omelette with cheddar and herbs.',
    price: 6.99,
    image: 'images/omelette.jpg',
  },
  {
    id: 4,
    name: 'French Toast',
    description: 'Cinnamon brioche dipped in vanilla egg wash and grilled.',
    price: 9.25,
    image: 'images/frenchtoast.jpg',
  },
  {
    id: 5,
    name: 'Breakfast Burrito',
    description: 'Eggs, cheese, sausage, and hash browns wrapped in a warm tortilla.',
    price: 8.75,
    image: 'images/burrito.jpg',
  },
  {
    id: 6,
    name: 'Iced Latte',
    description: 'Espresso with cold milk and ice.',
    price: 4.5,
    image: 'images/latte.jpg',
  },
];

export default function CafeFrostMenu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="font-sans text-gray-800">
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-blue-800">
            <a href="index.html">Cafe Frost</a>
          </h1>
          <nav className="space-x-4 hidden md:flex">
            <a href="index.html" className="hover:text-blue-600">Home</a>
            <a href="#" className="text-blue-600 font-bold">Menu</a>
            <a href="about.html" className="hover:text-blue-600">About</a>
            <a href="contact.html" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-12 px-6 md:px-16 lg:px-32">
        <h1 className="text-4xl font-bold text-center mb-10">Our Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-bold">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-2">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center">
                    <span>
                      {item.name} x{item.quantity} - ${
                        (item.price * item.quantity).toFixed(2)
                      }
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">Total: ${total.toFixed(2)}</span>
                <button
                  onClick={clearCart}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      <footer className="bg-gray-100 text-center py-6 mt-10">
        <div className="space-x-4 mb-2">
          <a href="#" className="text-blue-600">Facebook</a>
          <a href="#" className="text-pink-600">Instagram</a>
        </div>
        <p className="text-sm">Open daily from 8 AM – 4 PM</p>
      </footer>
    </div>
  );
}
