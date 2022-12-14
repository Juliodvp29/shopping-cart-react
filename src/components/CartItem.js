/* eslint-disable no-unused-vars */
import React from 'react'

const CartItem = ({data, deleteFromCart, deleteOneFromCart}) => {
    let {id, name, price, quantity, img} = data
  return (
    <>
    <div className='cart'>
        <div className='desc-cart'>
        <h4>{name}</h4>
        <img src={img} alt={name}/>
        <h5>${price * quantity}.00</h5>
        </div>
        <p>{quantity}</p>

        <div className='btn-action'>
            <button onClick={() => deleteOneFromCart(id)}>-1</button>
            <button onClick={() => deleteFromCart(id)}>Delete</button>
        </div>
    </div>
    <hr/>
    </>
  )
}

export default CartItem