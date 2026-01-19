import {
    SET_CATEGORIES,
    SET_PRODUCT_LIST,
    SET_TOTAL,
    SET_FETCH_STATE,
    SET_LIMIT,
    SET_OFFSET,
    SET_FILTER,
    SET_SORT,
    SET_ACTIVE_PRODUCT
} from "../reducers/productReducer";
import { AxiosInstance } from "../../api/axios";

export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (productList) => ({ type: SET_PRODUCT_LIST, payload: productList });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({ type: SET_FETCH_STATE, payload: fetchState });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setSort = (sort) => ({ type: SET_SORT, payload: sort });
export const setActiveProduct = (product) => ({ type: SET_ACTIVE_PRODUCT, payload: product });

export const fetchCategories = () => (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    AxiosInstance.get("/categories")
        .then((res) => {
            dispatch(setCategories(res.data));
            dispatch(setFetchState("FETCHED"));
        })
        .catch((err) => {
            console.error("Fetch Categories Error:", err);
            dispatch(setFetchState("FAILED"));
        });
};
export const fetchProduct = (id) => (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    AxiosInstance.get(`/products/${id}`)
        .then((res) => {
            dispatch(setActiveProduct(res.data));
            dispatch(setFetchState("FETCHED"));
        })
        .catch((err) => {
            console.error("Fetch Product Error:", err);
            dispatch(setFetchState("FAILED"));
        });
};

export const fetchProducts = (params = {}) => (dispatch) => {
    const { category, filter, sort, limit = 25, offset = 0 } = params;
    let queryString = "/products?";

    if (category) queryString += `category=${category}&`;
    if (filter) queryString += `filter=${filter}&`;
    if (sort) queryString += `sort=${sort}&`;
    queryString += `limit=${limit}&`;
    queryString += `offset=${offset}&`;

    // Remove trailing '&' if any parameters were added
    if (queryString.endsWith('&')) {
        queryString = queryString.slice(0, -1);
    }

    dispatch(setFetchState("FETCHING"));
    AxiosInstance.get(queryString)
        .then((res) => {
            dispatch(setProductList(res.data.products));
            dispatch(setTotal(res.data.total));
            dispatch(setFetchState("FETCHED"));
        })
        .catch((err) => {
            console.error("Fetch Products Error:", err);
            dispatch(setFetchState("FAILED"));
        });
};
