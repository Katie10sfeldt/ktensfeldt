import React from 'react';

import Form from '../components/Form';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './Contact.css';

export default function Contact() {
	return (
		<div className='box'>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Paper>
						<Form />
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper>
						<Form />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
