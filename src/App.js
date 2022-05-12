import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import theme from './style/theme';
import GlobalStyle from 'style/GlobalStyle';
import ProductList from './pages/ProductList';
import rootReducer from 'modules';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ProductList />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
