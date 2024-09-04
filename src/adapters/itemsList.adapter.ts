import { log } from 'console';

export const createItemListAdapter = (items: any) =>{
  return items.map((item: any) => ({
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
    })
  );


};