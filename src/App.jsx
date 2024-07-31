import React from "react";
import Home from "./Components/Home";
import WebEditor from "./Components/WebEditor";
import MarkdownEditor from "./Components/MarkdownEditor";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Layout from "./Components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<WebEditor />} />
        <Route path="/markdown" element={<MarkdownEditor />} />
      </Route>
    </Routes>
  );
}

export default App;
