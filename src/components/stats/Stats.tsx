import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {
  loadQuery,

  useLazyLoadQuery,
  usePreloadedQuery
} from 'react-relay';
import { useParams } from 'react-router-dom';
import { getMatchesQuery } from '../../graphql/queries/matchs.query';
import { getPlayersQuery } from '../../graphql/queries/players.query';
import {
  matchsQuery,
  matchsQuery$data
} from '../../graphql/queries/__generated__/matchsQuery.graphql';
import {
  playersQuery,
  playersQuery$data
} from '../../graphql/queries/__generated__/playersQuery.graphql';
import relayEnvironment from '../../graphql/relayEnvironment';
import { Match } from '../match/Match';
import { Player } from '../player/Player';
import './stats.scss';

const preloadedQuery = loadQuery(relayEnvironment, getPlayersQuery, {});

export default function Stats() {
  const { t } = useTranslation();

  return (
    <React.Suspense fallback={t('loading')}>
      <StatsLoaded></StatsLoaded>
    </React.Suspense>

    //   <main style={{ padding: "1rem 0" }}>
    //   </main>
  );
}

function StatsLoaded() {
  let params = useParams();
  const playersData: playersQuery$data = usePreloadedQuery<playersQuery>(
    getPlayersQuery,
    preloadedQuery as any
  );
  const matchesData: matchsQuery$data = useLazyLoadQuery<matchsQuery>(
    getMatchesQuery,
    {}
  );

  const currentPlayer = playersData.players.find((p) => p.id === params.id);
	const { t } = useTranslation();
  const sortedMatch = Array.from(matchesData.matches).sort((a,b) => {
    return new Date(b.endTime).getTime() - new Date(a.endTime).getTime();
  });
  return (
    <Row className="players-stats">
      <Col xs={12} md={6}>
        <Player player={currentPlayer!}></Player>
      </Col>
      <Col xs={12} md={6} className="players-matches">
        <Card>
          <Card.Title className="bg-info p-3 p-md-2 text-center">{t('Stats')}</Card.Title>
          <ul>
            {sortedMatch.map((match) => (
              <li key={match.id}>
                {' '}
                <Match match={match} playerId={currentPlayer?.id!}></Match>{' '}
              </li>
            ))}
          </ul>
        </Card>
      </Col>
    </Row>
  );
}
