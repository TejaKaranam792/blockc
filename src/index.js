// Importing necessary modules for React entry point
import React from "react";
import ReactDOM from "react-dom/client";

// Importing main application component
import App from "./App.tsx";

// Importing global styles
import "./index.css";

// Ensuring the root element exists before rendering
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure your HTML file has a <div id='root'></div>");
}

// Creating the React root and rendering the App component
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
