import React from 'react';

function Basics(props) {
	return (
		<div className='basic-box'>
			<div className='basic-list'>
				<div className='basic-item'>
					<ion-icon name={props.icon1}></ion-icon>
					<div className='descrip'>
						<p>{props.par1}</p>
					</div>
				</div>
				<div className='basic-item'>
					<ion-icon name={props.icon2}></ion-icon>
					<div className='descrip'>
						<p>{props.par2} </p>
					</div>
				</div>
				<div className='basic-item'>
					<ion-icon name={props.icon3}></ion-icon>
					<div className='descrip'>
						<p>{props.par3}</p>
					</div>
				</div>
				<div className='basic-item'>
					<ion-icon name={props.icon4}></ion-icon>
					<div className='descrip'>
						<p>{props.par4}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Basics;
