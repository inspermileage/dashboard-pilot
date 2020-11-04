import React from 'react';
import {View, TextInput, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import colors from '../Themes/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
export default function DropDown(props) {
  const {height, label,data,placeholder} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      
        <DropDownPicker
            {...props}
            items={data}
            defaultValue={null}
            placeholder={placeholder}
            
            containerStyle={{height: 40,width:600}}
            style={[styles.input, {height: height}]}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.85,
    alignSelf: 'center',
    marginVertical: 5,
  },
  label: {
    fontSize: 20,
    color: colors.white,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  internView: {
    alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    backgroundColor: colors.white,
    width: Dimensions.get('window').width * 0.82,
    paddingHorizontal: 20,
  },
  scroll:{
    
  },
});
