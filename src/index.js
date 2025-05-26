import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        {/* Wrapping the App component with BrowserRouter to enable routing */}
        <App />
    </BrowserRouter>,    
    document.getElementById("root")
);