import React from 'react';

import './Home.css';

export default function HomePage() {
	return (
		<div className='katie'>
			<div className='homePhoto'>
				<img
					className='homePhoto--image'
					src='./images/headshot.jpg'
					alt='Katie Tensfeldt'
				/>
			</div>
			<p className='homeDescription'>
				<span className='hilite'>
					Hi! I'm Kathleen, but please call me Katie.
				</span>{' '}
				I am a self-taught web developer from San Diego County in California.
				I'm a pretty chill person, most of the time. I love movies and shows
				(favorites being Star Wars or Marvel genre). On any given day, I can be
				found baking, watching something good, cheering on the Dodgers, or
				curating my Funko Pop collection. In addition, I am also an aspiring
				yoga enthusiast (hopefully getting better at that in the new year).{' '}
				<br />
				While you're here, feel free to take a look around and see what I can
				do!
			</p>
		</div>
	);
}
