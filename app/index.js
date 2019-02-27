import React from "react";
import ReactDom from "react-dom";
import App from './App.js'
import '../app/css/index.sass';
import '../app/css/test.css';

ReactDom.render(
    <App />,
    // <h1 className="sss">hello, world，就想测试实时a!</h1>,
    // <image src="../src/images/logo.jpg"></image>,
    document.getElementById("root")
);
