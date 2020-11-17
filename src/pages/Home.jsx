import React from 'react';
import Basics from '../components/Basics';
import './Home.css';
import Section from '../components/Section';

export default function HomePage() {
	return (
		<div>
			<Section header='Who am I?' description='The basics'>
				<Basics
					par1='Front End Web Developer familiar with HTML5, CSS3, and JavaScript with multiple frameworks under my belt.'
					par2='Creative type with keen eye for color and designs.'
					par3='Friendy, happy and energetic - I bring a positive energy to my workplace.'
					icon1='code-slash-outline'
					icon2='color-palette-outline'
					icon3='sunny-outline'
				/>
			</Section>
		</div>
	);
}
