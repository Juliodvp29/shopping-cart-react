/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 0,
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      quantity: 0,
      img: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Product 3",
      price: 15,
      quantity: 0,
      img: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Product 4",
      price: 70,
      quantity: 0,
      img: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Product 5",
      price: 50,
      quantity: 0,
      img: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      name: "Product 6",
      price: 45,
      quantity: 0,
      img: "https://picsum.photos/200/300",
    },
  ],
  cart: [],
};



export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      const cart = state.cart.find((item) => item.id === action.payload);
      if (cart) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                quantity: item.quantity + 1,
                // price: (item.price += product.price / 2),       
              };
            }
            return item;
          }),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }

    case TYPES.REMOVE_FROM_CART: {
        const product = state.products.find( (product) => product.id === action.payload );
        return {
            ...state,
            cart: state.cart.filter( (item) => item.id !== action.payload ),
        };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
        const product = state.cart.find(item => item.id === action.payload);
    
        if(product.quantity > 1){
            
            return {
                ...state,
                cart: state.cart.map(item => {
                    if(item.id === action.payload){
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                            
                        };
                    }
                    return item;
                }
                ),
            }

        }else{
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            }
        }
         
         
    }

    case TYPES.CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
}
