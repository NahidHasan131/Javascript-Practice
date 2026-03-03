import {combineReducers, createStore} from 'redux'
import productsReducer from './productsReducer';
import cartReducer, { addItem,decreaseItemQuantity, increaseItemQuantity, removeItem } from './cartReducer';
import wishListReducer, { wishListItem, wishListRemoveItem } from './wishListReducer';
// import { productList } from './productsList';

// let initialState = {
//     products: productList,
//     cartItems: [],
//     wishList: [],
// }

//cart item
// const CART_ADD_ITEM = 'cart/addItem';
// const CART_REMOVE_ITEM = 'cart/removeItem';
// const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity'
// const CART_DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity'

// //wish list
// const WISHLIST_ADD_ITEM = 'wishList/addItem';
// const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

// function reducer(state = initialState, action ){
//     switch(action.type){
//         case CART_ADD_ITEM:
//             return {...state,cartItems: [...state.cartItems, action.payload]}
//         case CART_REMOVE_ITEM:
//             return {...state, cartItems: state.cartItems.filter((cartItem) => cartItem.productId !== action.payload.productId)}
//         case CART_INCREASE_ITEM_QUANTITY:
//             return {...state, cartItems: state.cartItems.map((cartItem) => {
//                 if(cartItem.productId === action.payload.productId) {
//                     return {...cartItem, quantity: cartItem.quantity + 1}
//                 }
//                 return cartItem
//             })}
//         case CART_DECREASE_ITEM_QUANTITY:
//             return{
//                 ...state, 
//                 cartItems: state.cartItems
//                 .map((cartItem)=>{
//                 if(cartItem.productId == action.payload.productId) {
//                     return {...cartItem, quantity: cartItem.quantity - 1}
//                 }
//                 return cartItem
//                 })
//                 .filter((cartItem)=> cartItem.quantity > 0)
//             }

//         case WISHLIST_ADD_ITEM:
//             return {...state, wishList: [...state.wishList, action.payload]}
//         case WISHLIST_REMOVE_ITEM:
//             return {...state, wishList: state.wishList.filter((cartItem) => cartItem.productId !== action.payload.productId)}
//         default:
//             return state
//     }
// }


const reducer = combineReducers({
    products: productsReducer,
    cartItems: cartReducer,
    wishList
    : wishListReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch(addItem(10))
store.dispatch(addItem(15))
store.dispatch(addItem(7))
store.dispatch(removeItem(15))
// store.dispatch({type: CART_ADD_ITEM, payload: {productId:10, quantity: 1}})

store.dispatch(increaseItemQuantity(10))
store.dispatch(increaseItemQuantity(10))
store.dispatch(decreaseItemQuantity(10))
store.dispatch(decreaseItemQuantity(10))
store.dispatch(decreaseItemQuantity(10))

store.dispatch(wishListItem(10))
store.dispatch(wishListItem(7))
store.dispatch(wishListRemoveItem(10))







// const increase = "post/increase";
// const decrease = "post/decrease";
// const increaseby = "post/increaseby";
// const decreaseby = "post/decreaseby";

// let initialState = {
//     eid: "101",
//     ename: "Jack",
//     eaddress: "New York",
//     post: 0
// }

// function reducer(state = initialState, action ){
// //    if(action.type === increase){
// //      return {...state, salary: state.salary + 1}
// //    }
// //    else if(action.type === decrease){
// //      return {...state, salary: state.salary - 1}
// //    }
// //    else if(action.type === increaseby){
// //      return {...state, salary: state.salary + action.payload}
// //    }
// //    else if(action.type === decreaseby){
// //     return{...state, salary: state.salary - action.payload}
// //    }
// //    return state

// switch(action.type){
//     case increase:
//         return {...state, post: state.post + 1};
//     case decrease:
//         return {...state, post: state.post - 1};
//     case increaseby:
//         return {...state, post: state.post + action.payload};
//     case decreaseby:
//         return{...state, post: state.post - action.payload};
//     default:
//         return state; 
// }
// }

// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());

// store.subscribe(()=>{
//     console.log(store.getState())
    
// })

// store.dispatch({type: increase});
// store.dispatch({type: increase});
// store.dispatch({type: decrease});
// store.dispatch({type: increaseby, payload: 10});
// store.dispatch({type: decreaseby, payload: 5});

