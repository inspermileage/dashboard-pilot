import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';
import {setRoundData} from '../../../Store/register/actions';
import DropDown from '../../../Components/Dropdown';


export default function Round(props) {
  const {dispatch} = props;

  function setData(values, label) {
    dispatch(setRoundData({[label]: values}));
  }

  return (
    <View>
      <InputBasic
        label="Round"
        height={40}
        type="default"
        onChangeText={(e) => {
          setData(e, 'name');
        }}
      />
      <DropDown
        label="Reason"
        height={40}
        onChangeItem={item => setData(item.value,'reason')}
        defaultValue={'Test'}
      />
      <InputBasic
        label="Description"
        height={100}
        type="default"
        onChangeText={(e) => {
          setData(e, 'description');
        }}
      />
      
    </View>
  );
}
