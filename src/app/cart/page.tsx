// import React from 'react'
// import ShoppingCart from '@/components/shoppingCart/ShoppingCart'


// const shopcart = () => {
//   return (
//     <ShoppingCart/>
//   )
// }

// export default shopcart
// components/Cart.tsx
"use client"
// import { useCart } from '@/context/CartContext';
import ShoppingCart from '@/components/shoppingCart/ShoppingCart'

export default function shopcart()  {
  // const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <ShoppingCart/>
    // <div className="fixed right-0 top-0 w-96 h-full bg-white shadow-lg p-6 overflow-y-auto">
    //   <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
    //   {cartItems.length === 0 ? (
    //     <p className="text-gray-600">Your cart is empty.</p>
    //   ) : (
    //     <ul>
    //       {cartItems.map((item) => (
    //         <li key={item.id} className="mb-4">
    //           <div className="flex items-center justify-between">
    //             <div className="flex items-center">
    //               <img
    //                 src={item.image}
    //                 alt={item.title}
    //                 className="w-16 h-16 object-cover rounded-lg mr-4"
    //               />
    //               <div>
    //                 <h3 className="font-semibold">{item.title}</h3>
    //                 <p className="text-gray-600">${item.price.toFixed(2)}</p>
    //               </div>
    //             </div>
    //             <div className="flex items-center">
    //               <input
    //                 type="number"
    //                 value={item.quantity}
    //                 onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
    //                 className="w-16 text-center border rounded-lg p-1 mr-2"
    //                 min="1"
    //               />
    //               <button
    //                 onClick={() => removeFromCart(item.id)}
    //                 className="text-red-500 hover:text-red-700"
    //               >
    //                 Remove
    //               </button>
    //             </div>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    //   <div className="mt-6">
    //     <p className="text-xl font-semibold">
    //       Total: $
    //       {cartItems
    //         .reduce((total, item) => total + item.price * item.quantity, 0)
    //         .toFixed(2)}
    //     </p>
    //     <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors mt-4">
    //       Checkout
    //     </button>
    //   </div>
    // </div>
  );
};