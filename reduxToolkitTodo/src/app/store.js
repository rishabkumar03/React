import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
}) 

// For managing store, an inbuilt method is present known as configureStore

// In this store.js, we have only one key-value properties. It can be multiple. The store doesn't updates whole data on its own, it follows flux data-flow i.e. the specific key-value should be directed for updation. 

// here, for the updation of reducer, go to todoSlice.js (Take a look at ../features/todo/todoSlice.js)