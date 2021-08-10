import React from "react";
import ReactDom from "react-dom";


function Greeting() {

  return <h1>hello React</h1>
}


ReactDom.render(<Greeting/>,document.getElementById('root'))