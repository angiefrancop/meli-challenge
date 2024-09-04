"use client";
import React from 'react';
import './search.scss'

export type SearchProps = {
	// types...
}

const Search: React.FC<SearchProps>  = ({}) => {
	return (
		<div className="container search">
 			<p className='search__message'>Has una búsqueda!</p>
 		</div>
	);
};


export default Search;
