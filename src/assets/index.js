import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// custom component 

import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
import Aboutus from './aboutus';
import Mainbody from './main';
import Layout from './Layout';
import Faculty from './faculty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <Header /> */}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Mainbody />}></Route>
                    <Route path='/aboutus' element={<Aboutus />}></Route>
                    <Route path='/faculty' element={<Faculty />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
