import React from 'react'
import SingleProduct from './singleProduct';
import useFetch from './fetchProducts';
import Loading from '../Loading';

const Products = () => {
    const {data,loading} = useFetch("https://fakestoreapi.com/products")

    if(loading) return <Loading />

  return (
    <div>
      <div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 mt-24 mb-16 justify-center md:w-[80%] md:ml-[10%] w-[95%] ml-[2.5%]'>
        {!data ? <div>No Products To Show!</div> :
        data.map((item)=>(
        <SingleProduct key={item.id} item={item} />
        ))}
      </div>  
    </div>
  )
}

export default Products
