
export const createItemAdapter = (items: any) =>{
  return items.data.results.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      description: ""
    })
  );


};