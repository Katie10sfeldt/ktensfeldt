import React from 'react';

import {
	ThemeProvider,
	createMuiTheme,
	makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		margin: theme.spacing(1),
	},
}));

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#a0d3c6',
			main: '#89c9b8',
			dark: '#5f8c80',
		},
		secondary: {
			light: '#e7ffce',
			main: '#e1ffc2',
			dark: '#9db287',
		},
	},
});

export default function Form() {
	const classes = useStyles();

	return (
		<form className='form'>
			<ThemeProvider theme={theme}>
				<TextField
					required
					className={classes.margin}
					label='Your Name'
					variant='outlined'
					id='outlined-full-width'
					type='name'
				/>
				<br />
				<TextField
					required
					className={classes.margin}
					label='Email'
					variant='outlined'
					id='outlined-full-width'
					type='email'
				/>
				<br />
				<TextField
					multiline
					id='outlined-multiline-static outlined-full-width'
					label='Your message'
					rows={4}
					defaultValue=''
					variant='outlined'
				/>
				<br />
				<Button className='send' variant='contained' color='secondary'>
					Send
				</Button>
			</ThemeProvider>
		</form>
	);
}
