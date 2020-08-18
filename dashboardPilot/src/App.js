import React from 'react';

import BottomArrow from './Components/bottomArrow';
import colors from './Themes/colors';
import {View, Text} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: colors.white}}> Dashboard</Text>
      {/* <BottomArrow /> */}
    </View>
  );
}
