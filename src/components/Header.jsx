import React from 'react';
import Navigation from './Navigation';

function Header() {
	return (
		<header>
			<div className='title'>
				<h1>Hi! I'm Katie</h1>
				<div className='quotation'>
					<h6 className='quote'>
						"Design is not for philosophy - it's for life."
					</h6>
					<em className='credit'>Issey Miyake</em>
				</div>
			</div>
			<Navigation />
		</header>
	);
}

export default Header;
