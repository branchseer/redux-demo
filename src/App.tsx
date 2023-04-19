import { createStore } from "redux";
import { counterReducer } from "./reducer";
import { Provider } from "react-redux";
import { ConnectedCounter } from "./Counter";

const store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
      <ConnectedCounter />
    </Provider>
  );
}

export default App
