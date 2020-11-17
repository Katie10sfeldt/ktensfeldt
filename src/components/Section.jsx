import React from 'react';

export default function Section(props) {
	return (
		<div class='basics'>
			<div class='section-head'>
				<h2>{props.header}</h2>
				<h3>{props.description}</h3>
			</div>
			<div class='container'>{props.children}</div>
		</div>
	);
}
