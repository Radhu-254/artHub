import React, { useContext } from 'react';
// icons
import { IoArrowForward, IoCartOutline, IoClose } from 'react-icons/io5';
// context
import { CartContext } from '../context/CartContext';
// components
import CartItem from '../components/CartItem';
// stripe
import { loadStripe } from '@stripe/stripe-js';
import { request } from '../request';

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(
    'pk_test_51N194zSAVquUtGp2kz8NuwKISBQnQHNjVZ0NN4Ju8S7A6rBe8BkC91guKFkgOdW8RCDzSUF3NiUjxIi3WG6uyRwY005n5dQS2O'
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post('/orders', {
        cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full h-full px-4 bg-slate-400 text-white'>
      <div className='overflow-y-auto overflow-x-hidden h-[75vh]'>
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'
        >
          <IoClose />
        </div>
        <div className='flex flex-col gap-y-10 px-2'>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* subtotal & total */}
      {cart.length >= 1 && (
        <div className='px-6 py-2 flex flex-col'>
          {/* subtotal */}
          <div className='flex justify-between text-lg'>
            <div>Subtotal</div>
            <div> ₹{total}</div>
          </div>
          {/* discount */}
          <div className='flex justify-between text-lg'>
            <div>Discount</div>
            <div> ₹00.00</div>
          </div>
          {/* total */}
          <div className='flex justify-between text-xl'>
            <div>Total</div>
            <div> ₹ {total}</div>
          </div>
        </div>
      )}

      {/* buttons */}
      <div className='px-6 mb-2'>
        {cart.length >= 1 ? (
          <div className='flex justify-between gap-x-4'>
            <button
              onClick={clearCart}
              className='btn bg-white hover:bg-slate-200 text-primary'
            >
              Remove all items
            </button>
            <button
              onClick={handlePayment}
              className='btn bg-white hover:bg-slate-200 text-primary flex-1 px-2 gap-x-2'
            >
              Checkout
              <IoArrowForward className='text-lg' />
            </button>
          </div>
        ) : (
          <div className='h-full absolute top-0 right-0 left-0 flex justify-center items-center z-10 flex-col text-white'>
            <div className='text-2xl '>Your cart is empty</div>
            <div className='text-6xl'>
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
