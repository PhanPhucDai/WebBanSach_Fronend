
import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './homepage/HomePage';


function Footer() {
    const [tuKhoaTimKiem, setTuKhoaTimKiem] = useState("");
    return (
        <div>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted">&copy; Phan Phuc Dai - 29/12/2024</p>
                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use href="#bootstrap" /></svg>
                    </a>
                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item">
                           
                        </li>
                        <li className="nav-item"><a href="https://www.facebook.com/phanphucdai.14?locale=vi_VN" className="nav-link px-2 text-muted">Facebook: Phan Phuc Dai</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Zalo: 0379917903</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About me</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}
<style></style>

export default Footer