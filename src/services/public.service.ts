import axios from 'axios';
import { loadAbort } from '../utilities';
import { Item } from '../models';

export const getItems = (search: string) => {
  const LIMIT_ITEMS = 4;
  const controller = loadAbort();
  return {
    call: axios.get<Item>(`${import.meta.env.VITE_API_SEARCH}${search}&limit=${LIMIT_ITEMS}`,{signal: controller.signal}),
    controller
  };
}

export const getItemToId = (id: string) => {
  const controller = loadAbort();
  return {
    call: axios.get<Item>(`${import.meta.env.VITE_API_SEARCH_ITEM_ID}/${id}`,{signal: controller.signal}),
    controller
  };
}

export const getDescriptionToItemToId = (id: string) => {
  const controller = loadAbort();
  return {
    call: axios.get<Item>(`${import.meta.env.VITE_API_SEARCH_ITEM_ID}/${id}/description`,{signal: controller.signal}),
    controller
  };
}
