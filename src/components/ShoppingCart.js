/* eslint-disable no-unused-vars */
import {useReducer} from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import ProductItem from './ProductItem'
import '../styles/style.css'

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  const {products, cart} = state

  const addToCart = (id) => {
    console.log('addToCart', id)
  }
  const deleteFromCart = () => {}
  const clearCart = () => {}
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <h3>Products</h3>
      <article className="products grid">
        {products.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart}/>))}
      </article>
      <h3>Carrito</h3>
      <article></article>
    </div>
  )
}

export default ShoppingCart