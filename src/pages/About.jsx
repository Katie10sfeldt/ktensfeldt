import React from 'react';
import './About.css';
import MyCarousel from '../components/MyCarousel';
import Section from '../components/Section';
import Basics from '../components/Basics';

export default function About() {
	return (
		<div>
			<Section header='Who am I?' description='The basics'>
				<Basics
					par1='Front End Web Developer familiar with HTML5, CSS3, and JavaScript with multiple frameworks under my belt.'
					par2='Creative type with keen eye for color and designs.'
					par3='Friendy, happy and energetic - I bring a positive energy to my workplace.'
					par4='Hard worker. I set my goals and I achieve them.'
					icon1='code-slash-outline'
					icon2='color-palette-outline'
					icon3='sunny-outline'
					icon4='hammer-outline'
				/>
			</Section>
			<div className='carousel'>
				<MyCarousel />
			</div>
		</div>
	);
}
