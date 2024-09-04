import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './Header.scss';
import useFetchAndLoad from '../../hooks/useFetch.hook';
import { getItems } from '../../services/public.service';
import { createItemAdapter } from '../../adapters';
import { useDispatch } from 'react-redux';
import { createItems } from '../../redux/states';
import { useNavigate, useSearchParams } from 'react-router-dom';

export type HeaderProps = {
	// types...
}

const Header: React.FC<HeaderProps>  = ({}) => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSearchParams({ search: searchQuery });

		navigate(`/items?search=${encodeURIComponent(searchQuery)}`);

	}
	return (
		<>
			<div className="header">
				<div className="search">
					<form onSubmit={handleSubmit} className='search__form'>
						<input type="text" className="search__input" name='search' value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)} aria-label='Search'/>
						<button type="submit" className="search__button" name='search' aria-label="Buscador">
							<FaSearch className="icon-search" aria-label='Icono del buscador'/>
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Header;
