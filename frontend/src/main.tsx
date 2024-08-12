import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { LoadingProvider } from "./context/loadingContext.tsx";
import { Provider } from "react-redux";
import store,{persistor}  from "./store";
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      </React.StrictMode>
  </Router>,
);
