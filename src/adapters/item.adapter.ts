import { Item } from '../models';

export const createItemAdapter = (item: any):Item => {
  return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.price.currency,
        amount: item.price.price,
        decimals: item.price.decimals
      },
      picture: item.picture,
      condition: item.condition,
      free_shipping: item.free_shipping,
      description: item.description || ''
    };

};