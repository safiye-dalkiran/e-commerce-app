// Initial State
const initialState = {
    user: {},
    addressList: [],
    cardList: [],
    creditCards: [],
    orderList: [],
    roles: [],
    theme: "light",
    language: "en"
};

// Action Types
export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
export const SET_CARD_LIST = "SET_CARD_LIST";
export const SET_ORDER_LIST = "SET_ORDER_LIST";

// Reducer
const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };
        case SET_ROLES:
            return { ...state, roles: action.payload };
        case SET_THEME:
            return { ...state, theme: action.payload };
        case SET_LANGUAGE:
            return { ...state, language: action.payload };
        case SET_ADDRESS_LIST:
            return { ...state, addressList: action.payload };
        case SET_CARD_LIST:
            return { ...state, cardList: action.payload };
        case SET_ORDER_LIST:
            return { ...state, orderList: action.payload };
        default:
            return state;
    }
};

export default clientReducer;
