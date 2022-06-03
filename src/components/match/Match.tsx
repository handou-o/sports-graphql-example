import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MatchType } from '../../graphql/types/match.type';
import { Date } from '../commons/date/Date';
export function Match(props: { match: MatchType; playerId: string }) {
  const { t } = useTranslation();
  const isWin = props.match.winner.id === props.playerId;
  const otherPlayer = props.match.players.find((p) => p.id !== props.playerId);

  return (
    <>
      <p>
        <span>
          {' '}
          <Date date={props.match.endTime}></Date>
        </span>
        {isWin ? <span className="text-success fw-bold">{t('win')} </span> : <span className="text-danger fw-bold">{t('lose')} </span>}
        <span>
          {t('vs')} <Link to={`/${otherPlayer?.id}/stats`}>{otherPlayer?.shortname}</Link>
        </span>
      </p>
    </>
  );
}
