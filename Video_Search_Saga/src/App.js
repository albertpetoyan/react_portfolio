import "./App.css"
import React from 'react'
import _ from 'lodash'
import { BrowserRouter} from "react-router-dom";
import Navigator from "./Navigator"


function App() {
  return (
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>

  );
}

export default App;
