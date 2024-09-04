"use client";
import React, { useEffect, useState } from 'react';
import './items.scss';
import { useParams } from 'react-router-dom';
import { createItemAdapter } from '../../adapters';
import useFetchAndLoad from '../../hooks/useFetch.hook';
import { getItemToId } from '../../services/public.service';
import { useDispatch } from 'react-redux';
import { Button } from '../../components';
import { Item } from '../../models';

export type ItemsProps = {
	// types...
}

const Items: React.FC<ItemsProps>  = ({}) => {
	const { id } = useParams() as { id: string };
	const [itemData, setItemData] = useState({} as Item);
	const {error, loading, callEndpoint } = useFetchAndLoad();
	const dispatch = useDispatch();

	const sendItemsToIdRequest = async () => {
		const data = await callEndpoint(getItemToId(id));
		setItemData(createItemAdapter(data.data));
	}

	useEffect(() => {
		sendItemsToIdRequest();
	}, [id]);
	return (
		<div className='container'>
			<div className='breadcrumb'>
				<p>breadcrumb</p>
			</div>
			<section className='items'>
				<div className='items__info'>
					<div className='items__info__picture'>
						<img src={itemData.picture} alt={itemData.title} />
					</div>
					{itemData.description &&
					<div className='items__description'>
						<h2>Descripción del producto</h2>
						<p>{itemData.description}</p>
					</div>
					}
				</div>
				<div className='items__buy'>
					<div>
						<h1>{itemData.title}</h1>
					</div>
					<div className='items__buy__price'>
						<h2>$ {itemData.price?.amount}</h2>
					</div>
					<div className='items__buy__button'>
						<Button name='search'> Comprar </Button>
					</div>
				</div>

			</section>
 		</div>
	);
};

export default Items;
