import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMockEnvironment } from 'relay-test-utils';
import { MatchType } from '../../graphql/types/match.type';
import { PlayerType } from '../../graphql/types/player.type';
import i18n from '../../translations/i18n';
import { Match } from './Match';

describe('Match component', () => {
  let match: MatchType;

  beforeAll(() => {
    const environment = createMockEnvironment();
    i18n.init();
    match = {
      id: 'match-6',
      players: [
        { id: 'player-1', shortname: 'S.WAW' },
        { id: 'player-2', shortname: 'R.NAD' },
      ],
      winner: { id: 'player-1' },
      startTime: '2021-03-27T08:55:00.000Z',
      endTime: '2021-03-27T17:55:00.000Z',
    };
  });

  test('Win has success class', () => {
    const { container } = render(
      <React.StrictMode>
        <BrowserRouter>
          <Match playerId={match.winner.id} match={match} />
        </BrowserRouter>
      </React.StrictMode>
    );

    expect(container.getElementsByClassName('text-success').length).toBe(1);
  });

  test('Lose has danger class', () => {
    const { container } = render(
      <React.StrictMode>
        <BrowserRouter>
          <Match playerId={match.winner.id} match={match} />
        </BrowserRouter>
      </React.StrictMode>
    );

    expect(container.getElementsByClassName('text-success').length).toBe(1);
  });
});
