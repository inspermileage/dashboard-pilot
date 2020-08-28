import React from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';
import {setCarData} from '../../../Store/register/actions';

export default function Car(props) {
  const {dispatch} = props;

  function setData(values, label) {
    dispatch(setCarData({[label]: values}));
  }

  return (
    <View>
      <InputBasic
        label="Car"
        height={40}
        type="default"
        onChangeText={(e) => {
          setData(e, 'name');
        }}
      />
      <InputBasic
        label="Description"
        height={120}
        type="default"
        onChangeText={(e) => {
          setData(e, 'description');
        }}
      />
    </View>
  );
}
