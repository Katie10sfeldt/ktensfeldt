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
			<Section header='React Projects' description=''>
				<Container>
					<Row>
						<Col>
							<PortfolioItem
								link='https://flicks.netlify.app/'
								title='Flicks App'
								img='./images/flicksimg.png'
								name='flicks website'
							/>
							<PortfolioItem />
							<PortfolioItem />
						</Col>
					</Row>
				</Container>
			</Section>
			<Section header='Designs' description=''>
				Websites here
			</Section>
		</div>
	);
}
