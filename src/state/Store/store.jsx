import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import React from 'react'
import reducers from '../reducers/index';
import thunk from 'redux-thunk';

export const  store = createStore(
    reducers, 
    applyMiddleware(thunk)
    
) 