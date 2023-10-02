import React from "react";
import { render } from "react-dom";

export default function App() {
    return (
        <h1>Testing123</h1>
    )
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)