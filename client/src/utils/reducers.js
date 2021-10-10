import { useReducer } from 'react';
import {
  UPDATE_GAME,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CONSOLE,
  UPDATE_CURRENT_CONSOLE,
  UPDATE_GENRE,
  UPDATE_CURRENT_GENRE,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
    case UPDATE_GAME:
      return {
        ...state,
        game: [...action.game],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.game],
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.game],
      };
    // Returns a copy of state, sets the cartOpen to true and maps through the items in the cart.
    // If the item's `id` matches the `id` that was provided in the action.payload, we update the purchase quantity.
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((game) => {
          if (action._id === game._id) {
            game.purchaseQuantity = action.purchaseQuantity;
          }
          return game;
        }),
      };

    // First we iterate through each item in the cart and check to see if the `product._id` matches the `action._id`
    // If so, we remove it from our cart and set the updated state to a variable called `newState`
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((game) => {
        return game._id !== action._id;
      });

      // Then we return a copy of state and check to see if the cart is empty.
      // If not, we set the cartOpen status to  `true`. Then we return an updated cart array set to the value of `newState`.
      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CONSOLE:
      return {
        ...state,
        console: [...action.console],
      };

    case UPDATE_CURRENT_CONSOLE:
      return {
        ...state,
        currentConsole: action.currentConsole,
      };

      case UPDATE_GENRE:
        return {
          ...state,
          genre: [...action.genre],
        };
  
      case UPDATE_CURRENT_GENRE:
        return {
          ...state,
          currentGenre: action.currentGenre,
        };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}

