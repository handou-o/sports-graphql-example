import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PlayerType } from '../../graphql/types/player.type';
import { Height } from '../commons/height/Height';
import { Weight } from '../commons/weight/Weight';

export function Player(props: {player: PlayerType}){
	const { t } = useTranslation();
	return (
	<Card>
	  <Card.Title className="bg-primary">
		<div className="d-flex space-between">
		  <img src={props.player.picture.url} alt={props.player.lastname} height="50" />
		  <span className="m-auto">{props.player.shortname}</span>
		  <img
			src={props.player.country.picture.url}
			alt={`${props.player.lastname}-country`}
			height="50"
		  />
		</div>
	  </Card.Title>
	  <div>
		<ul>
		  <li>
			{t('name')} : {props.player.firstname} {props.player.lastname}
		  </li>
		  <li>
			{t('sex')} : {t(props.player.sex.toLowerCase())}
		  </li>
		  <li>
			{t('age')} : {props.player.stats.age}
		  </li>
		  <li>
			{t('rank')} : {props.player.stats.rank}
		  </li>
		  <li>
			{t('points')} : {props.player.stats.points}
		  </li>
		  <li>
			{t('weight')} :{' '}
			<Weight weight={props.player.stats.weight}></Weight>
		  </li>
		  <li>
			{t('height')} :{' '}
			<Height height={props.player.stats.height}></Height>
		  </li>
		  <li>
			<Link to={`/${props.player.id}/stats`}>{t('statsLink')}</Link>
		  </li>
		</ul>
	  </div>
	  <Card.Text></Card.Text>
	</Card>)
}