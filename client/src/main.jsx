import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import { ChainId,ThirdwebProvider } from "@thirdweb-dev/react";

import {BrowserRouter as Router} from "react-router-dom"
import { StateContextProvider } from './context/index.jsx';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <ThirdwebProvider activeChain={ChainId.Mumbai}>
      <Router>
     <StateContextProvider>
     <App />
     </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  
);
