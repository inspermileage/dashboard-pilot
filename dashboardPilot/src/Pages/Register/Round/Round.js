import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';
import {setRoundData} from '../../../Store/register/actions';
import DropDown from '../../../Components/Dropdown';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../Themes/colors';

export default function Round(props) {
  const {dispatch} = props;

  function setData(values, label) {
    dispatch(setRoundData({[label]: values}));
  }
  let data=[
    {label: 'Test', value: 'Test', icon: () => <Icon name="flag" size={18} color={colors.light_orange} />},
    {label: 'Competition', value: 'Competition', icon: () => <Icon name="flag" size={18} color={colors.orange} />},
    {label: 'Inspection', value: 'Inspection', icon: () => <Icon name="flag" size={18} color={colors.red} />},
  ];

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
        data = {data}
        onChangeItem={item => setData(item.value,'reason')}
        placeholder = "Selecione uma razão "
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
