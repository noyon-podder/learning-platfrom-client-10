
import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import {  RouterProvider } from 'react-router-dom';
import { router } from './router/Route';

// import "./styles.css";



function App() {
  return (
    <div className="App">
     
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;