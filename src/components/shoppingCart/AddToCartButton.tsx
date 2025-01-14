'use client'; // Mark as a Client Component
import { useCart } from '@/context/CartContext';
import { Image as IImage } from "sanity";
import { urlForImage } from '@/sanity/lib/image';
import { Flip, ToastContainer, toast } from 'react-toastify';

interface CartItem {
    _id: string;
    title: string;
    price: number;
    image: IImage;
}

export const AddToCartButton = ({ product }: { product: CartItem }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: product._id,
            title: product.title,
            price: product.price,
            image: urlForImage(product.image).url(),
            quantity: 1,
        });
        toast.success(`${product.title} is Added to Cart!`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        });
    };
 
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
            <button
                onClick={() => handleAddToCart()}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
                Add to Cart
            </button>
        </>
    );
};