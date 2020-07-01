import React from 'react';
import { RangeInput } from '../RangeInput';
import { ProductCard } from '../ProductCard';

import './App.scss';

export const App = () => {
  return (
    <>
      <RangeInput min='1' max='155' step='0' />
      <ProductCard />
    </>
  );
};
