import { combineReducers, createStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  };


const rootReducer = combineReducers({
  cart: cartReducer
  });
  

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer);
  export const persistor = persistStore(store);
  
  export default store;
