import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Players from './components/players/Players';
import './translations/i18n';

function App(props: any) {
  return (
      <div className="main">
        <Players></Players>
      </div>
  );
}


function AppRoot(props: any) {
  const { t } = useTranslation();

  return (
    <React.Suspense fallback={t('loading')}>
      <App />
    </React.Suspense>
  );
}

export default AppRoot;
