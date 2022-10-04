import React from "react";
import { BrowserRouter } from 'react-router-dom';
import './scss/app.scss';
import AppRoutes from './routes';

import { Provider } from "react-redux";
import store from "./app/store";

import ErrorBoundary from "./errors/ErrorBoundary.jsx";

const App = () => {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <BrowserRouter>
                    <AppRoutes/>
                </BrowserRouter>
            </Provider>
        </ErrorBoundary>
    );
};

export default App;