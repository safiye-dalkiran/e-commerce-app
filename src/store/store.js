import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import { loadState, saveState } from "./localStorage";

const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer
});

const persistedState = loadState();

export const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk, logger)
);

store.subscribe(() => {
    saveState({
        shoppingCart: store.getState().shoppingCart
    });
});
