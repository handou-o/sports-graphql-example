import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMockEnvironment } from 'relay-test-utils';
import { PlayerType } from '../../graphql/types/player.type';
import i18n from '../../translations/i18n';
import { Player } from './Player';

describe('Player Component', () => {
  let player: PlayerType;
  beforeAll(() => {
    const environment = createMockEnvironment();
    i18n.init();
    player = {
      id: 'player-2',
      shortname: 'R.NAD',
      sex: 'MAN',
      firstname: 'Rafael',
      lastname: 'Nadal',
      picture: {
        url: 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg',
      },
      country: {
        picture: {
          url: 'https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png',
        },
      },
      stats: { rank: 1, points: 1982, weight: 84000, height: 185, age: 33 },
    };
  });

  test('Print user informations', () => {

    render(
      <React.StrictMode>
        <BrowserRouter>
          <Player player={player} />
        </BrowserRouter>
      </React.StrictMode>
    );
    const linkShortNameElement = screen.getByText(player.shortname);
    expect(linkShortNameElement).toBeInTheDocument();

    const linkWeightElement = screen.getByText(new RegExp((player.stats.weight / 1000).toString()));
    expect(linkWeightElement).toBeInTheDocument();

    const linkHeightElement = screen.getByText(new RegExp(player.stats.height.toString()));
    expect(linkHeightElement).toBeInTheDocument();
  });
});
