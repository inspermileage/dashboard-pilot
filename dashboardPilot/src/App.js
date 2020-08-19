import React, {useState} from 'react';

import BottomArrow from './Components/bottomArrow';
import colors from './Themes/colors';
import {View, Text, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import Dashboard from './Pages/Main';

const {width, height} = Dimensions.get('screen');

export default function App() {
  return <Dashboard />;
}
