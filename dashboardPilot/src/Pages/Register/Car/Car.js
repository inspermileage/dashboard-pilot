import React from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';
import {setCarData} from '../../../Store/register/actions';
import {useDispatch} from 'react-redux';
import {getData,getCarTest} from '../../../Functions/axios';
import DropDown from '../../../Components/Dropdown'
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../Themes/colors';

export default function Car(props) {
  const {getCarInfo, getTrackInfo} = getData();
  //const {dispatch} = props;
  const dispatch = useDispatch();
  function setData(values, label) {
    dispatch(setCarData({[label]: values}));
  };

  // getCarInfo().map(data =>{
  //   console.log(data.name);
  // });
  
  // let data=[
  //   {label: 'Test', value: 'Test', icon: () => <Icon name="flag" size={18} color={colors.light_orange} />},
  //   {label: 'Competition', value: 'Competition', icon: () => <Icon name="flag" size={18} color={colors.orange} />},
  //   {label: 'Inspection', value: 'Inspection', icon: () => <Icon name="flag" size={18} color={colors.red} />},
  // ];
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
      {/* <DropDown
        label="Car"
        height={40}
        data = {data}
        onChangeItem={item => setData(item.value,'name')}
        defaultValue={'Test'}
      /> */}
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
