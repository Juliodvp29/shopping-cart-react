/* eslint-disable no-unused-vars */
import {useReducer} from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import ProductItem from './ProductItem'
import '../styles/style.css'
import CartItem from './CartItem'
import { TYPES } from '../actions/shoppingAction'

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  const {products, cart} = state

  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id,
    })
  }
  const deleteFromCart = (id) => {
    dispatch({
      type: TYPES.REMOVE_FROM_CART,
      payload: id,
    })
  }
  const deleteOneFromCart = (id) => {
    dispatch({
      type: TYPES.REMOVE_ONE_FROM_CART,
      payload: id,
    })
  }
    
    
  const clearCart = () => {
    dispatch({
      type: TYPES.CLEAR_CART,
    })
  }
  return (
    <div className="container">
      <h3>Products</h3>
      <article className="products grid">
        {products.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart}/>))}
      </article>
      <h3>Carrito</h3>
      <button className='clear' onClick={clearCart}>Clear</button>
      <article className='cart-container'>
        {cart.map((item, i) => (<CartItem key={i} data={item} deleteFromCart={deleteFromCart} deleteOneFromCart={deleteOneFromCart}/>))}
      </article>
    </div>
  )
}

export default ShoppingCart