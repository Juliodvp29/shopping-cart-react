import React from 'react'
import '../styles/style.css'

const ProductItem = ({data, addToCart}) => {
    let {id, name, price, img} = data
  return (
    <div className='product-container'>
        <img className='product-img' src={img} alt={name}/>
        <h2 className='img'>{name}</h2>
        <h3 className='price'>${price}.00</h3>
        <button className='btn-add' onClick={() => addToCart(id)}>Add to cart</button>
    </div>
  )
}

export default ProductItem