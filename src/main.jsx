import React from "react"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"
import App from "./app/App";
import store from "./app/store";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)