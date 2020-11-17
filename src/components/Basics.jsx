import React from 'react';

function Basics(props) {
	return (
		<div class='basic-box'>
			<div class='row basic-list'>
				<div class='basic-item col-lg-4'>
					<ion-icon name={props.icon1}></ion-icon>
					<div class='descrip'>
						<p>{props.par1}</p>
					</div>
				</div>
				<div class='basic-item col-lg-4'>
					<ion-icon name={props.icon2}></ion-icon>
					<div class='descrip'>
						<p>{props.par2} </p>
					</div>
				</div>
				<div class='basic-item col-lg-4'>
					<ion-icon name={props.icon3}></ion-icon>
					<div class='descrip'>
						<p>{props.par3}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Basics;
