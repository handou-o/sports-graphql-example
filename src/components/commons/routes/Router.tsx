import React from 'react';
import { loadQuery } from 'react-relay';
import { Route, Routes } from 'react-router-dom';
import App from '../../../App';
import { getPlayersQuery } from '../../../graphql/queries/players.query';
import relayEnvironment from '../../../graphql/relayEnvironment';
import Stats from '../../stats/Stats';

const preloadedQuery = loadQuery(relayEnvironment, getPlayersQuery, {
	/* query variables */
  });
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path=":id/stats" element={<Stats />} />
    </Routes>
  );
}
