import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  const account = useSelector((state) => state.account);
  console.log(account);

  const dispatch = useDispatch();
  console.log(dispatch);

  const { despositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  console.log(despositMoney);
  return (
    <div className="App">
      <h1>Hello CodeSandbox {account}</h1>
      <button onClick={() => despositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
