import React, { lazy } from 'react';

const Search = lazy(() => import('./pages/search/search'));
const Results = lazy(() => import('./pages/results/results'));
const Items = lazy(() => import('./pages/items/items'));

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

