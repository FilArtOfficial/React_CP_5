import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import Cart from './components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

export default App;

