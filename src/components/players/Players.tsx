import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { loadQuery, usePreloadedQuery } from 'react-relay';
import { getPlayersQuery } from '../../graphql/queries/players.query';
import { playersQuery$data } from '../../graphql/queries/__generated__/playersQuery.graphql';
import relayEnvironment from '../../graphql/relayEnvironment';
import { Player } from '../player/Player';

const preloadedQuery = loadQuery(relayEnvironment, getPlayersQuery, {});

function Players() {
  const data: playersQuery$data = usePreloadedQuery(
    getPlayersQuery,
    preloadedQuery
  ) as playersQuery$data;
  return (
    <div>
      <Row>
        {data.players.map((player) => (
          <Col key={player.id} xs={12} md={6}>
            <Player  player={player}></Player>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Players;
