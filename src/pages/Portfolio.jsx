import React from 'react';
import Section from '../components/Section';
import PortfolioItem from '../components/PortfolioItem';

import './Portfolio.css';

export default function Portfolio() {
	return (
		<div className='port'>
			<Section header='React Projects'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm'>
							<PortfolioItem
								link='https://flicks.netlify.app/'
								title='Flicks App'
								img='./images/flicksimg.png'
								name='flicks website'
								description='Web application designed to consolidate all your streaming service watch
				lists, as well as manage all your viewing recommendations.'
							/>
						</div>
						<div className='col-sm'>
							<PortfolioItem
								link='https://videos-hooks-4saszwk41.vercel.app/'
								title='Video Search'
								img='./images/video.png'
								name='simple video search site'
								description='Simple video search app built with YouTube API. Simply look for your video and enjoy! *'
							/>
						</div>
					</div>
				</div>
			</Section>
			<Section header='Designs'>Websites here</Section>
			<Section header='SASS Builds'>Websites here</Section>
			<p>* - Not an original design. Built during classes.</p>
		</div>
	);
}
