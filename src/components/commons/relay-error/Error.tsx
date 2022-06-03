import { useTranslation } from 'react-i18next';
import React from 'react';

export function Error(props: { tCode?: string}){
	const { t } = useTranslation();

	return (<h1 className="fw-bold text-danger">{t(props.tCode || 'error')}</h1>)
}