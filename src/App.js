import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "./state/index";
// import { account } from "./state/reducers/index";
import { deposite,withdraw } from "./state/slice";
import {account} from "./state/slice";

import "./App.css"; 

function App() {
  const account = useSelector((state) => state.account.value);
  const dispatch = useDispatch();

  // const {deposite, withdraw} = bindActionCreators(actionCreators, dispatch);


  return <div className="App">
    <h1>{account}</h1>
    <button onClick={() => dispatch(deposite(1000))}>Deposite</button>
    <button onClick={() => dispatch(withdraw(1000))}>Withdraw</button>
  </div>;
}

export default App;
