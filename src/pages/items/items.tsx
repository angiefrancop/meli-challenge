"use client";
import React, { useEffect, useState } from 'react';
import './items.scss';
import { useParams } from 'react-router-dom';
import { createItemAdapter } from '../../adapters';
import useFetchAndLoad from '../../hooks/useFetch.hook';
import { createItems } from '../../redux/states';
import { getItemToId } from '../../services/public.service';
import search from '../search/search';
import { useDispatch } from 'react-redux';

export type ItemsProps = {
	// types...
}

const Items: React.FC<ItemsProps>  = ({}) => {
	const { id } = useParams() as { id: string };
	const [itemData, setItemData] = useState();
	const {error, loading, callEndpoint } = useFetchAndLoad();
	const dispatch = useDispatch();

	const sendItemsToIdRequest = async () => {
		const data = await callEndpoint(getItemToId(id));
		setItemData(data.data);
	}

	useEffect(() => {
		sendItemsToIdRequest();
	}, [id]);
	return (
		<div className='container'>
 			{JSON.stringify(itemData)}
 		</div>
	);
};

export default Items;
