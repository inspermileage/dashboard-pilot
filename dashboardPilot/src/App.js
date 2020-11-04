import React from 'react';

import Dashboard from './Pages/Main';

import Register from './Pages/Register';
import registerReducer from './Store/register/reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import CustomDrawer from './Components/customDrawer';
import CarRegister from './Pages/Register/Car/CarRegister';
import TrackRegister from './Pages/Register/Track/TrackRegister';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
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
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawer {...props} />}>
          <Drawer.Screen
            name="Cadastro"
            component={Register}
            options={{headerShown: false}}
          />
          <Drawer.Screen
            name="Main"
            component={Dashboard}
            options={{headerShown: false}}
          />
          
          <Drawer.Screen
            name="CarRegister"
            component={CarRegister}
            options={{headerShown:false}}
            />
            <Drawer.Screen
            name="TrackRegister"
            component={TrackRegister}
            options={{headerShown:false}}
            />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
