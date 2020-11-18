import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<nav className='my-nav navbar navbar-expand-lg navbar-dark'>
			<button
				className='navbar-toggler toggle-button'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon nav-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='full-nav navbar-nav'>
					<li className='nav-item navi'>
						<Link className='nav-link' to='/'>
							Home
						</Link>
					</li>
					<li className='nav-item navi'>
						<Link className='nav-link' to='/About'>
							About
						</Link>
					</li>
					<li className='nav-item navi'>
						<Link className='nav-link' to='/Portfolio'>
							Portfolio
						</Link>
					</li>
					<li className='nav-item navi'>
						<Link className='nav-link' to='/Contact'>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
