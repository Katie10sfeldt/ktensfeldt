import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function MyCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const slides = [
		{
			img: 'images/comp.jpg',
			title: 'Front End Development',
			caption:
				'I am comfortable taking webpages from concept to full launch, using a variety of libraries and frameworks.',
		},
		{
			img: 'images/colab.jpg',
			title: 'Collaboration - Teamwork',
			caption:
				'I am very comfortable working in a team environment to complete products. I am not afraid to work on my own, but am great at asking for help if needed.',
		},
		{
			img: 'images/color.jpg',
			title: 'Creativity',
			caption: 'I am familiar with UI/UX concepts and best practices.',
		},
	];

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img
					className='back d-block w-100 carouselimg'
					src={slides[0].img}
					alt='first slide'
				/>
				<Carousel.Caption>
					<h4>{slides[0].title}</h4>
					<p className='caption'>{slides[0].caption}</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='back d-block w-100 carouselimg'
					src={slides[1].img}
					alt='second slide'
				/>
				<Carousel.Caption>
					<h4>{slides[1].title}</h4>
					<p className='caption'>{slides[1].caption}</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='back d-block w-100 carouselimg'
					src={slides[2].img}
					alt='third slide'
				/>
				<Carousel.Caption>
					<h4>{slides[2].title}</h4>
					<p className='caption'>{slides[2].caption}</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
