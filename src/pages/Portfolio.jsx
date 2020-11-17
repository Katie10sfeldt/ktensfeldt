import React from 'react';
import Section from '../components/Section';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortfolioItem from '../components/PortfolioItem';

import './Portfolio.css';

export default function Portfolio() {
	return (
		<div className='port'>
			<Section header='React Projects'>
				<Container>
					<Row>
						<Col>
							<PortfolioItem
								link='https://flicks.netlify.app/'
								title='Flicks App'
								img='./images/flicksimg.png'
								name='flicks website'
								description='Web application designed to consolidate all your streaming service watch
				lists, as well as manage all your viewing recommendations.'
							/>
						</Col>
						<Col>
							<PortfolioItem
								link='https://videos-hooks-4saszwk41.vercel.app/'
								title='Video Search'
								name='simple video search site'
								description='Simple video search app built with YouTube API.'
							/>
						</Col>
					</Row>
				</Container>
			</Section>
			<Section header='Designs'>Websites here</Section>
			<Section header='SASS Builds'>Websites here</Section>
		</div>
	);
}
