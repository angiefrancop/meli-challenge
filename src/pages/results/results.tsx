"use client";
import React, { useEffect } from 'react';
import './results.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../models';
import { AppStore } from '../../redux/store';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { createItemListAdapter } from '../../adapters';
import useFetchAndLoad from '../../hooks/useFetch.hook';
import { createItems } from '../../redux/states';
import { getItems } from '../../services/public.service';
import { Card, Loading } from '../../components';

export type ResultsProps = {
	// types...
}

const Results: React.FC<ResultsProps>  = ({}) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const search = searchParams.get('search') || '';
	const {loading, callEndpoint } = useFetchAndLoad();
	const dispatch = useDispatch();
	const itemsState = useSelector((state: AppStore) => state.items);

	const sendItemsRequest = async () => {
		const items = await callEndpoint(getItems(search));
		dispatch(createItems(createItemListAdapter(items.data.items)));
	}
	useEffect(() => {
		sendItemsRequest();
	}, [search]);

	const handleClick = (id: string) => {
		navigate(`/items/${id}`);
	}

	return (

		<div className='container'>
			<div className='breadcrumb'>
				<p>Categorías</p>
			</div>
			{loading && <Loading />}
			{itemsState.length === 0 ? <p className='results__no-results'>No results found</p> :
			<section className='results'>
				<ol  className='results__items' >
				{itemsState.map((item: Item) => (
						<li key={item.id} className='item' onClick={() => handleClick(item.id)}>
							<div className='item__content'>
								<Card picture={item.picture} title={item.title} price={item.price} />
							</div>
						</li>

				))}
				</ol>
			</section>
			}

		</div>

	);
};

export default Results;
