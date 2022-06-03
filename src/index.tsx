import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/commons/relay-error/Relay-error-boundary';
import { Router } from './components/commons/routes/Router';
import { NavBar } from './components/header/Navbar';
import relayEnvironment from './graphql/relayEnvironment';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './translations/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ErrorBoundary environment={relayEnvironment}>
        <RelayEnvironmentProvider environment={relayEnvironment}>
          <NavBar></NavBar>
          <div className="container-fluid">
            <Router></Router>
          </div>
        </RelayEnvironmentProvider>
      </ErrorBoundary>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
