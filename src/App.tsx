import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer";
import { Provider } from "react-redux";
import { ConnectedCounter } from "./Counter";

const store = configureStore({ reducer: counterReducer });

function App() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
      <ConnectedCounter />
    </Provider>
  );
}

export default App
