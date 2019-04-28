import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import HoverFilter from "./Components/HoverFilter";
import Bg from "./Components/bg";

const WithHoverFilter = HoverFilter(Bg);

function App() {
  return (
    <div className="App">
      <WithHoverFilter src="http://dummyimage.com/300x200.jpg/ff4444/ffffff" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
