import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Redirect } from "react-router-dom";
import Teams from "./Teams";

export default function Homepage() {
    return (
    <Router>
        <Routes>
            <Route path='/' element={<h3>Homepage</h3>} />
            <Route path='/teams' element={<Teams />} />
        </Routes>
    </Router>
    );
}