import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Registrar from './components/Registrar';
import ListarClientes from './components/ListarClientes';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter,HashRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Registrar/>}/>
        <Route exact path="/Registro" element={<Registrar/>}/>
        <Route exact path="/Listar_Clientes" element={<ListarClientes/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
