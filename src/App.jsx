import { Provider } from "react-redux";
import store from "./store";
import Counter from './components/Counter';
import ControlBtn from './components/ControlBtn';

function App() {
  return (
    // provide the redux store using react-redux
    <Provider store={store}>
      <div className="App">
        <h1>react redux</h1>
        <Counter></Counter>
        <ControlBtn></ControlBtn>
      </div>
    </Provider>
  );
}

export default App;
