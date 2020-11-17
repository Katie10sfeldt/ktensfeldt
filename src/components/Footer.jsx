import React from 'react';

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer>
			<div className='socials'>
				<ul className='social-list'>
					<li>
						<a
							className='site logo-linked'
							href='https://www.linkedin.com/in/kathleentensfeldt/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<ion-icon name='logo-linkedin'></ion-icon>
						</a>
					</li>
					<li>
						<a
							className='site logo-git'
							href='https://github.com/Katie10sfeldt'
							target='_blank'
							rel='noopener noreferrer'
						>
							<ion-icon name='logo-github'></ion-icon>
						</a>
					</li>
					<li>
						<a
							className='site logo-drib'
							href='https://dribbble.com/k10sfeldt'
							target='_blank'
							rel='noopener noreferrer'
						>
							<ion-icon name='logo-dribbble'></ion-icon>
						</a>
					</li>
					<li>
						<a
							className='site logo-code'
							href='https://codepen.io/k10sfeldt'
							target='_blank'
							rel='noopener noreferrer'
						>
							<ion-icon name='logo-codepen'></ion-icon>
						</a>
					</li>
				</ul>
			</div>
			<div className='author'>
				<p>Designed and Coded by: Katie Tensfeldt</p>
			</div>
			<div className='copyright'>
				<p className='copyright'>&copy; Copyright {year} Kathleen Tensfeldt</p>
			</div>
		</footer>
	);
}

export default Footer;
