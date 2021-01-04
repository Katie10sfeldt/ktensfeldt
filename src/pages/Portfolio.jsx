import React from 'react';
import Section from '../components/Section';
import PortfolioItem from '../components/PortfolioItem';

import './Portfolio.css';

export default function Portfolio() {
	return (
		<div className='port'>
			<Section header='React Projects'>
				<div className='line'>
					<PortfolioItem
						link='https://flicks.netlify.app/'
						title='Flicks App'
						img='./images/flicksimg.png'
						name='flicks website'
						description='Web application designed to consolidate all your streaming service watch
				lists, as well as manage all your viewing recommendations.'
					/>

					<PortfolioItem
						link='https://videos-hooks-4saszwk41.vercel.app/'
						title='Video Search *'
						img='./images/video.png'
						name='simple video search site'
						description='Simple video search app built with YouTube API. Simply look for your video and enjoy!'
					/>
				</div>
			</Section>
			<Section header='SASS Builds'>
				<div className='line'>
					<PortfolioItem
						link='https://natours-tau.vercel.app/'
						title='Natours *'
						img='./images/natourshero.png'
						name='natours website'
						description='A fictional nature tour company. A beautiful website (showcasing SASS features) for beautiful experiences.'
					/>
					<PortfolioItem
						link='https://nexter-blue.vercel.app/'
						title='Nexter *'
						img='./images/nexter.png'
						name='nexter website'
						description='A fictional luxury real estate company. Design by Jonas Schmedtmann.'
					/>
				</div>
			</Section>

			<p>* - Not an original design. Built in a class.</p>
		</div>
	);
}
