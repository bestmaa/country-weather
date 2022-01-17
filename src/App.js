import React from "react";
import { Route, Routes } from "react-router-dom";
import LoadPopUp from "./component/LoadPopUp.js";
import Search from "./component/Search.js";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Search />}/>
        <Route path="loadpage/:capital" element={<LoadPopUp />} />        
      </Routes>
    </div>
  );
}

export default App;
