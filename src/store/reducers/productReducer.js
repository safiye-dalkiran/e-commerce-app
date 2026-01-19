// Initial State
const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    sort: "",
    filter: "",
    fetchState: "NOT_FETCHED", // "NOT_FETCHED" | "FETCHING" | "FETCHED" | "FAILED"
    activeProduct: {}
};

// Action Types
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_SORT = "SET_SORT";
export const SET_ACTIVE_PRODUCT = "SET_ACTIVE_PRODUCT";

// Reducer
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case SET_PRODUCT_LIST:
            return { ...state, productList: action.payload };
        case SET_TOTAL:
            return { ...state, total: action.payload };
        case SET_FETCH_STATE:
            return { ...state, fetchState: action.payload };
        case SET_LIMIT:
            return { ...state, limit: action.payload };
        case SET_OFFSET:
            return { ...state, offset: action.payload };
        case SET_FILTER:
            return { ...state, filter: action.payload };
        case SET_SORT:
            return { ...state, sort: action.payload };
        case SET_ACTIVE_PRODUCT:
            return { ...state, activeProduct: action.payload };
        default:
            return state;
    }
};

export default productReducer;
