import React from 'react';
import ProductList from './ProductList';
import { SORT_ASC } from './constants';


const App = ({products}) => {
  return (
    <div>
      <ProductList products={products} initSortField="name" initSortDirection={SORT_ASC} />
    </div>
  )
}

export default App;
