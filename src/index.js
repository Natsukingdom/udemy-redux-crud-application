import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import reducer from './reducers'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)

// 以下のようにして app を provider で lap して provider の store 属性に store を渡すと
// storeがapp内で利用できるようになる．
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
