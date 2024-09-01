import React from 'react';
import { Search } from './pages';
import { Results } from './pages';
import { Items } from './pages';

const routes = [
  {
    path: '/',
    element: <Search />
  },
  {
    path: '/results',
    element: <Results />
  },
  {
    path: '/items',
    element: <Items />
  },
];

export default routes;

