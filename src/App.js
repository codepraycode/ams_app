import React from "react";
import { BrowserRouter } from 'react-router-dom';
// import "./scss/ams_styles.scss";
import AppRoutes from './routes';

import ErrorBoundary from "./errors/ErrorBoundary.jsx";

const App = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </ErrorBoundary>
    );
};

export default App;