import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";

async function prepare() {
  const { mockWorker } = await import("./mocks/browser");

  mockWorker.start({ onUnhandledRequest: "bypass" });
}

prepare().then(() => {
  const container = document.getElementById('root')

  if (!container) return

  const root = createRoot(container)

  root.render(
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  )
})