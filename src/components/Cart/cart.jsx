import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity,decrementQuantity,removeFromCart } from '../redux/cartSlice';
import { Minus, Plus, X } from 'lucide-react';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cart.reduce(
          (accumulator, item) => accumulator + item.quantity * item.price,
          0
        );
      };
    
    const TotalPrice = getTotalPrice().toFixed(2);

    return(
        <div className='mt-16 md:w-[50%] md:ml-[25%] w-[95%] ml-[2.5%]'>
            {cart.length === 0 ? <div className='w-full mt-32 mb-48 text-xl animate-pulse text-center font-["ubuntu"]'>Your Cart Is Empty!</div> :
            cart.map((item) => (
                <div key={item.id}>
                  <div className='block  rounded-xl shadow-md border-slate-400 dark:border-slate-600  bg-slate-400 dark:bg-slate-600 h-32 mt-4'>
                    <div className='flex justify-between'>
                    <div className='block'>
                    <div className='p-2 font-semibold font-["ubuntu"] md:text-md text-sm h-20'>{item.title}</div> 
                      <div className='flex'>
                        <div className='flex w-32'>
                          <button className='rounded ml-2 shadow-md bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 mr-1' onClick={() => dispatch(incrementQuantity(item.id))}><Plus /></button>
                          <button className='rounded shadow-md bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 mr-1' onClick={() => dispatch(decrementQuantity(item.id))}><Minus /></button>
                          <button className='rounded shadow-md bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600' onClick={() => dispatch(removeFromCart(item.id))}><X /></button>   
                        </div>
                        <div className='flex'>
                          <div className='font-["ubuntu"] md:text-md text-sm'>{item.price}</div>
                          <div>*</div>
                          <div className='font-["ubuntu"] md:text-md text-sm'>{item.quantity}</div>
                          <div>=</div>
                          <div className='font-["ubuntu"] md:text-md text-sm'>{item.price * item.quantity}</div>
                        </div>
                      </div>
                    </div>
                    <img src={item.image} alt={item.title} className='w-32 h-32 min-w-32 rounded-r-xl' />
                    </div>
                  </div>
                </div>
            ))}
            {cart.length > 0 &&
            <div className='mt-8 text-center w-[50%] ml-[25%] rounded-xl font-semibold font-["ubuntu"] text-white p-2 mb-32 md:text-xl text-lg bg-red-600'>Total: {TotalPrice}</div>}
        </div>
    )
}

export default Cart
