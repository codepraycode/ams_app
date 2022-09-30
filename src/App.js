import React from "react";
import { BrowserRouter } from 'react-router-dom';
import "./scss/ams_styles.scss";
import AppRoutes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    );
};

export default App;