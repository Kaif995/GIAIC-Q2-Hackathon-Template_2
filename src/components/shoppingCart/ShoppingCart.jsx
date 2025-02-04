// "use client"
// import { useState } from "react";
// import { cartItems } from "./CartData";
// import CartItem from "./CartItem";
// import QuantityControl from "./QuantityControl";


// export default function ShoppingCart() {
//   const [items, setItems] = useState(cartItems);

//   const updateQuantity = (id, change) => {
//     setItems(
//       items.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(1, item.quantity + change) }
//           : item
//       )
//     );
//   };

//   const subtotal = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <main className="flex flex-col justify-center items-center px-20 py-14 bg-stone-50 max-md:px-5">
//       <div className="flex flex-col w-full max-w-[1064px] max-md:max-w-full">
//         <h1 className="self-start text-4xl leading-snug text-indigo-950">
//           Your shopping cart
//         </h1>
//         <div className="flex gap-5 justify-between mt-12 text-sm leading-snug whitespace-nowrap text-indigo-950 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
//           <div>Product</div>
//           <div>Quantity</div>
//           <div>Total</div>
//         </div>
//         <div className="shrink-0 mt-3 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
//         <div className="flex flex-wrap gap-5 justify-between mt-5 max-md:mr-1.5 max-md:max-w-full">
//           <div className="flex flex-col text-indigo-950">
//             {items.map((item) => (
//               <div key={item.id} className="mt-5 first:mt-0">
//                 <CartItem {...item} />
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-col self-start mt-3 whitespace-nowrap">
//             {items.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex gap-5 justify-between items-start w-full mt-28 first:mt-0 max-md:mt-10"
//               >
//                 <QuantityControl
//                   quantity={item.quantity}
//                   onIncrement={() => updateQuantity(item.id, 1)}
//                   onDecrement={() => updateQuantity(item.id, -1)}
//                 />
//                 <div className="text-lg text-indigo-950">
//                   £{item.price * item.quantity}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="shrink-0 mt-8 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
//         <div className="flex flex-col self-end mt-7 max-w-full w-[282px]">
//           <div className="flex flex-col items-end text-right">
//             <div className="flex gap-4 items-center leading-snug whitespace-nowrap">
//               <div className="self-stretch my-auto text-xl text-indigo-800">
//                 Subtotal
//               </div>
//               <div className="self-stretch my-auto text-2xl text-indigo-950">
//                 £{subtotal}
//               </div>
//             </div>
//             <div className="mt-3 text-sm text-indigo-800">
//               Taxes and shipping are calculated at checkout
//             </div>
//           </div>
//           <button
//             className="overflow-hidden gap-2.5 self-end px-8 py-4 mt-4 text-base text-white bg-indigo-950 max-md:px-5"
//             aria-label="Proceed to checkout"
//           >
//             Go to checkout
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
// "use client"
// import QuantityControl from "./QuantityControl";
// import { useCart } from '@/context/CartContext';


// export default function ShoppingCart() {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();




//   const subtotal = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <main className="flex flex-col justify-center items-center px-20 py-14 bg-stone-50 max-md:px-5">
//       <div className="flex flex-col w-full max-w-[1064px] max-md:max-w-full">
//         <h1 className="self-start text-4xl leading-snug text-indigo-950">
//           Your shopping cart
//         </h1>
//         <div className="flex gap-5 justify-between mt-12 text-sm leading-snug whitespace-nowrap text-indigo-950 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
//           <div>Product</div>
//           <div>Quantity</div>
//           <div>Total</div>
//         </div>
//         <div className="shrink-0 mt-3 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
//         <div className="flex flex-wrap gap-5 justify-between mt-5 max-md:mr-1.5 max-md:max-w-full">
//           <div className="flex flex-col text-indigo-950">
//             {cartItems.map((item) => (
//               <div key={item.id} className="mt-5 first:mt-0">
//                 <cartItems {...item} />
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-col self-start mt-3 whitespace-nowrap">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex gap-5 justify-between items-start w-full mt-28 first:mt-0 max-md:mt-10"
//               >
//                 <QuantityControl
//                   quantity={item.quantity}
//                   onIncrement={() => updateQuantity(item.id, 1)}
//                   onDecrement={() => updateQuantity(item.id, -1)}
//                 />
//                 <div className="text-lg text-indigo-950">
//                   £{item.price * item.quantity}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="shrink-0 mt-8 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
//         <div className="flex flex-col self-end mt-7 max-w-full w-[282px]">
//           <div className="flex flex-col items-end text-right">
//             <div className="flex gap-4 items-center leading-snug whitespace-nowrap">
//               <div className="self-stretch my-auto text-xl text-indigo-800">
//                 Subtotal
//               </div>
//               <div className="self-stretch my-auto text-2xl text-indigo-950">
//                 £{subtotal}
//               </div>
//             </div>
//             <div className="mt-3 text-sm text-indigo-800">
//               Taxes and shipping are calculated at checkout
//             </div>
//           </div>
//           <button
//             className="overflow-hidden gap-2.5 self-end px-8 py-4 mt-4 text-base text-white bg-indigo-950 max-md:px-5"
//             aria-label="Proceed to checkout"
//           >
//             Go to checkout
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
"use client"
import QuantityControl from "./QuantityControl";
import { useCart } from '@/context/CartContext';

export default function ShoppingCart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
        <main className="flex flex-col justify-center items-center px-20 py-14 bg-stone-50 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1064px] max-md:max-w-full">
        <h1 className="self-start text-4xl leading-snug text-indigo-950">
          Your shopping cart
        </h1>
        <div className="flex gap-5 justify-between mt-12 text-sm leading-snug whitespace-nowrap text-indigo-950 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <div>Product</div>
          <div className="flex items-center">
            <div>Quantity</div>
          </div>
          <div>Total</div>
        </div>
        <div className="shrink-0 mt-3 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
        <div className="flex flex-wrap gap-5 justify-between mt-5 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex flex-col text-indigo-950">
            {cartItems.map((item) => (
              <div key={item.id} className="mt-5 first:mt-0">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
                  <div className="ml-4">
                    <h2 className="text-lg">{item.title}</h2>
                    <p className="text-sm text-gray-600">{item.description}</p> {/* Product description */}
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col self-start mt-3 whitespace-nowrap">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 justify-between items-start w-full mt-28 first:mt-0 max-md:mt-10"
              > 
                <div className="flex items-left">
                  <QuantityControl
                    quantity={item.quantity}
                    onIncrement={() => updateQuantity(item.id, item.quantity + 1)}
                    onDecrement={() => updateQuantity(item.id, item.quantity - 1)}
                  />
                </div>
                <div className="text-lg text-indigo-950">
                  £{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="shrink-0 mt-8 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
        <div className="flex flex-col self-end mt-7 max-w-full w-[282px]">
          <div className="flex flex-col items-end text-right">
            <div className="flex gap-4 items-center leading-snug whitespace-nowrap">
              <div className="self-stretch my-auto text-xl text-indigo-800">
                Subtotal
              </div>
              <div className="self-stretch my-auto text-2xl text-indigo-950">
                £{subtotal}
              </div>
            </div>
            <div className="mt-3 text-sm text-indigo-800">
              Taxes and shipping are calculated at checkout
            </div>
          </div>
          <button
            className="overflow-hidden gap-2.5 self-end px-8 py-4 mt-4 text-base text-white bg-indigo-950 max-md:px-5"
            aria-label="Proceed to checkout"
          >
            Go to checkout
          </button>
        </div>
      </div>
    </main>
  );
}