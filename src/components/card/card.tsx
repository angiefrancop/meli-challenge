"use client";
import React from 'react';
import './card.scss';

export type CardProps = {
	picture: string;
	title: string;
	price: {
		currency: string;
		price: number;
	};
}

const Card: React.FC<CardProps> = (item) => {
	return (
		<div className='card'>
			<div className='card__image'>
				<img src={item.picture} alt={item.title} />
			</div>
			<div className='card__info'>
				<p className='card__info__price'>
					$ {item.price.price}
				</p>
				<p className='card__info__title'>
					{item.title}
				</p>
			</div>
			<div className='card__location'>
				<span>Location</span>
			</div>
		</div>
	);
};

export default Card;
