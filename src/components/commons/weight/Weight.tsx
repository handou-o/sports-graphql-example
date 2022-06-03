import React from 'react';
import { useTranslation } from 'react-i18next';

export function Weight(props: {weight: number}){
	const { t } = useTranslation();

	return (<span>
		{(props.weight / 1000).toString()} {t('weightUnity')}
	</span>)
}
