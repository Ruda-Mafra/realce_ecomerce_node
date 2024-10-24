import { combineReducers, createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { productListReducer, productReducer } from "./Reducers/Product";
import { thunk } from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./Reducers/User";
import { cartReducer } from "./Reducers/Cart";
import { orderDetailReducer, orderListReducer, orderPaymentReducer, orderReducer } from "./Reducers/Order";
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  productListReducer,
  productReducer,
  userLoginReducer,
  userRegisterReducer,
  cartReducer,

  orderReducer,
  orderDetailReducer,
  orderPaymentReducer,
  orderListReducer

});

// const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export let persistor = persistStore(store);
