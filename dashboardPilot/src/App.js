import React, {useState} from 'react';

import BottomArrow from './Components/bottomArrow';

import Dashboard from './Pages/Main';
import Cadastro from './Components/Cadastro';

import Register from './Pages/Register';
import registerReducer from './Store/register/reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Car from './Pages/Register/Car';

// export default function App() {
//   return <Dashboard />;
// }

export default function AppWrapper() {
  const rootReducer = combineReducers({
    register: registerReducer,
  });
  function provideStore() {
    const initialState = {};
    const middlewares = [thunk];
    const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares),
    );
    return store;
  }

  return (
    <Provider store={provideStore()}>
      <Register />
    </Provider>
  );
}
