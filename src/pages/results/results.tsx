"use client";
import React, { useEffect } from 'react';
import './results.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../models';
import { AppStore } from '../../redux/store';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { createItemAdapter } from '../../adapters';
import useFetchAndLoad from '../../hooks/useFetch.hook';
import { createItems } from '../../redux/states';
import { getItems } from '../../services/public.service';
import search from '../search/search';

export type ResultsProps = {
	// types...
}

const Results: React.FC<ResultsProps>  = ({}) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const search = searchParams.get('search') || '';
	const {error, loading, callEndpoint } = useFetchAndLoad();
	const dispatch = useDispatch();
	const itemsState = useSelector((state: AppStore) => state.items);

	const sendItemsRequest = async () => {
		const items = await callEndpoint(getItems(search));
		createItemAdapter(items);
		dispatch(createItems(createItemAdapter(items)));
	}
	useEffect(() => {
		sendItemsRequest();
	}, [search]);

	const handleClick = (id: string) => {
		navigate(`/items/${id}`);
	}

	return (
		<div className='container'>
 			{itemsState.length === 0 ? <p>No results</p> :
			 <section className='search-results'>
				{itemsState.map((item: Item) => (
					<ol key={item.id} className='search-results__item' >
						<li className='search-results__item__image' onClick={() => handleClick(item.id)}>
							<img src={item.picture} alt={item.title} />
							<p className='search-results__item__info__price'>
								{item.price.currency} {item.price.amount}
							</p>
							<p className='search-results__item__info__title'>
								{item.title}
							</p>
						</li>
					</ol>
				))}
			</section>
			}
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
 		</div>
	);
};

export default Results;
