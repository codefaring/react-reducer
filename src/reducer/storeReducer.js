export default function storeReducer(store, action) {
  switch (action.type) {
    case 'fruitUpdate': {
      const { fruit, changeFruit } = action;
      return {
        ...store,
        products: store.products.map((product) => {
          if (product.fruit === fruit) {
            return { ...product, fruit: changeFruit };
          }
          return product;
        }),
      };
    }
    case 'priceUpdate': {
      const { fruit, changePrice } = action;
      return {
        ...store,
        products: store.products.map((product) => {
          if (product.fruit === fruit) {
            return { ...product, price: changePrice };
          }
          return product;
        }),
      };
    }
    case 'add': {
      const { addFruit, addPrice } = action;
      return {
        ...store,
        products: [...store.products, { fruit: addFruit, price: addPrice }],
      };
    }
    case 'delete': {
      return {
        ...store,
        products: store.products.filter(
          (product) => product.fruit !== action.deleteFruit
        ),
      };
    }
    default: {
      throw Error(`you don't know action type! ${action.type}`);
    }
  }
}
