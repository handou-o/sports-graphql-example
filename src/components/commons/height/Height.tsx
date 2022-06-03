import React from 'react';
import { useTranslation } from 'react-i18next';

export function Height(props: {height: number}){
	const { t } = useTranslation();

	return (<span>
		{props.height.toString()} {t('heightUnity')}
	</span>)
}
