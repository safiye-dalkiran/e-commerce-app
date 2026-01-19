// Initial State
const initialState = {
    cart: [], // [{ count: 1, checked: true, product: { ... } }]
    payment: {},
    address: {}
};

// Action Types
export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT";
export const TOGGLE_CART_CHECK = "TOGGLE_CART_CHECK";
export const CLEAR_CART = "CLEAR_CART";

// Reducer
const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return { ...state, cart: action.payload };
        case SET_PAYMENT:
            return { ...state, payment: action.payload };
        case SET_ADDRESS:
            return { ...state, address: action.payload };
        case ADD_TO_CART:
            const existingItemIndex = state.cart.findIndex(item => item.product.id === action.payload.id);
            if (existingItemIndex >= 0) {
                const newCart = [...state.cart];
                newCart[existingItemIndex] = {
                    ...newCart[existingItemIndex],
                    count: newCart[existingItemIndex].count + 1
                };
                return { ...state, cart: newCart };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { count: 1, checked: true, product: action.payload }]
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== action.payload)
            };
        case UPDATE_ITEM_COUNT:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.product.id === action.payload.productId
                        ? { ...item, count: action.payload.count }
                        : item
                )
            };
        case TOGGLE_CART_CHECK:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.product.id === action.payload
                        ? { ...item, checked: !item.checked }
                        : item
                )
            };
        case CLEAR_CART:
            return { ...state, cart: [] };
        default:
            return state;
    }
};

export default shoppingCartReducer;
