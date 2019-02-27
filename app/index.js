import React from "react";
import ReactDom from "react-dom";
import '../src/css/index.sass'
import '../src/css/test.css'

ReactDom.render(
    <h1 className="sss">hello, world，就想测试实时a!</h1>,
    // <image src="../src/images/logo.jpg"></image>,
    document.getElementById("root")
);
