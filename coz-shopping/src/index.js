import React from 'react';
import ReactDOM from 'react-dom/client';//react-dom에서 ReactDOM을 import 시킴
import App from './App';

import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0px;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <GlobalStyle />
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
