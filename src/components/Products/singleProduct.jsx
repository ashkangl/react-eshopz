import React from 'react'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux';

const SingleProduct = ({item}) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(item))
  }
  return (
    <div className='justify-center bg-slate-300 rounded-lg hover:scale-105 duration-200 shadow-md shadow-slate-500'>
      <div className='block'>
        <img src={item.image} alt={item.title} className='w-full h-64 rounded-lg' />
        <div className='w-full'>
            <div>
            <div className="md:text-md text-sm p-1 font-semibold h-16 overflow-hidden">{item.title}</div>
            </div>
            <div className='flex justify-between'>
            <div className="md:text-sm text-xs p-1 m-2 font-semibold text-red-500">${item.price}</div>
            <button className='bg-green-500 text-white font-semibold md:text-lg text-md px-2 py-1 hover:bg-blue-500 m-2 rounded-lg' onClick={handleClick}>Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
