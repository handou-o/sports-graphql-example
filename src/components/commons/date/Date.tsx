import React from 'react';
import Moment from 'moment';

export function Date(props: {date: string | Date, format?: string}) {

	return (<> { Moment(props.date).format(props.format || "DD-MM-YYYY")} </>)
}