import React from 'react'

const Description = () => {
  return (
    <div className='md:w-[80%] md:ml-[10%] w-[95%] ml-[2.5%] mt-32 font-["ubuntu"] text-justify'>
        <div className=''>This is a simple e-commerce application built with React and Redux Toolkit. The project demonstrates the basic functionalities of an online store, including product listing, shopping cart management, and state persistence.</div>
        <div className='md:text-lg text-md font-bold mt-12'>Features</div>
        <div>
            <li>Product Listing: Browse a list of products with details such as name and price.</li>
            <li> Shopping Cart: Add products to the cart, increment/decrement product quantities, and remove products from the cart.</li>
            <li>State Management: Utilizes Redux Toolkit for efficient state management.</li>
            <li>State Persistence: Uses redux-persist to save the cart state in local storage, ensuring the cart contents are preserved across sessions.</li>
            <li>Notifications: Implements alertifyjs for user notifications on cart actions.</li>
        </div>

        <div className='md:text-lg text-md font-bold mt-12'>Technologies Used</div>
        <div className='mb-16'>
            <li>React: A JavaScript library for building user interfaces.</li>
            <li>Redux Toolkit: The official, opinionated toolset for efficient Redux development.</li>
            <li>redux-persist: A library to persist and rehydrate a Redux store.</li>
            <li>alertifyjs: A JavaScript library for displaying notifications</li>
        </div>
    </div>
  )
}

export default Description