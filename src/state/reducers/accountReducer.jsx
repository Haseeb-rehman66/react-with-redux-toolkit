import React from 'react'

const accountreducer = (state= 0, action) => {
    switch (action.type) {
        case "deposite":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;
    }
  
};

export default accountreducer;