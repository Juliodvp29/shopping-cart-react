/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
    products: [
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            img: 'https://picsum.photos/200/300',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20,
            img: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            name: 'Product 3',
            price: 15,
            img: 'https://picsum.photos/200/300',
        },
        {
            id: 4,
            name: 'Product 4',
            price: 70,
            img: 'https://picsum.photos/200/300',
        },
        {
            id: 5,
            name: 'Product 5',
            price: 50,
            img: 'https://picsum.photos/200/300',
        },
        {
            id: 6,
            name: 'Product 6',
            price: 45,
            img: 'https://picsum.photos/200/300',
        },

    ],
    cart: [],
}

export function shoppingReducer(state, action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{

        }
        case TYPES.REMOVE_ALL_FROM_CART:{

        }
        case TYPES.REMOVE_ONE_FROM_CART:{

        }
        case TYPES.CLEAR_CART:{

        }
        default:
            return state;

    }
}