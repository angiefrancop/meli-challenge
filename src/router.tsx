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
    path: '/items',
    element: <Results />
  },
  {
    path: '/items/:id',
    element: <Items />
  },
];

export default routes;

