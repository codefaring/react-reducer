import React, { useReducer } from 'react';
import './FruitStore.css';
import storeReducer from './reducer/storeReducer';

export default function FruitStore() {
  const [store, dispatch] = useReducer(storeReducer, infoStore);
  const updateProduct = () => {
    const fruit = prompt('변경할 과일 이름을 입력하세요');
    const changeFruit = prompt(`${fruit}와 바꿀 과일을 입력하세요`);
    dispatch({ type: 'fruitUpdate', fruit, changeFruit });
  };
  const changePrice = () => {
    const fruit = prompt('변경할 과일 이름을 입력하세요');
    const changePrice = prompt(`${fruit}의 가격을 입력하세요`);
    dispatch({ type: 'priceUpdate', fruit, changePrice });
  };
  const addProduct = () => {
    const addFruit = prompt('추가할 과일 이름을 입력하세요');
    const addPrice = prompt(`추가할 ${addFruit} 가격을 입력하세요`);
    dispatch({ type: 'add', addFruit, addPrice });
  };
  const deleteProduct = () => {
    const deleteFruit = prompt('삭제할 상품명을 입력하세요');
    dispatch({ type: 'delete', deleteFruit });
  };
  return (
    <div className='text'>
      <h3>{`${infoStore.store} 상점의 판매품목 `}</h3>
      <ul>
        {store.products.map((product, id) => (
          <li>{`${product.fruit}의 가격은 ${product.price}원`}</li>
        ))}
      </ul>
      <button onClick={updateProduct}>과일 이름 변경</button>
      <button onClick={changePrice}>과일 가격 변경</button>
      <br />
      <button onClick={addProduct}>과일 추가</button>
      <button onClick={deleteProduct}>과일 삭제</button>
    </div>
  );
}

const infoStore = {
  store: '리액트',
  products: [
    {
      fruit: '사과',
      price: '500',
    },
    {
      fruit: '수박',
      price: '700',
    },
    {
      fruit: '딸기',
      price: '400',
    },
  ],
};
