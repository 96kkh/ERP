import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);

const headerNav = [
    {
        title: "intro",
        url: "#intro",
    },
    {
        title: "skill",
        url: "#skill",
    },
    {
        title: "site",
        url: "#site",
    },
    {
        title: "portfolio",
        url: "#port",
    },
    {
        title: "contact",
        url: "#contact",
    },
];