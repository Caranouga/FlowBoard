import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} /> */}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals(console.log);
