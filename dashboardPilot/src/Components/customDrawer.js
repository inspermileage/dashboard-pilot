import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Themes/colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {DrawerItemList} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  const dataCar = useSelector((state) => state.register.carData);
  const dataTrack = useSelector((state) => state.register.trackData);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topMenu}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name={'navicon'} size={65} color={colors.orange} />
          </TouchableOpacity>
          <Text style={styles.title}> Menu</Text>
        </View>
        <View style={styles.line} />

        <View>
          <Text style={styles.txt}> Car: {dataCar?.name}</Text>
        </View>

        <View style={styles.line} />

        <View>
          <Text style={styles.txt}> Track: {dataTrack?.name}</Text>
        </View>

        <View style={styles.line} />
      </View>
      <View style={styles.logout}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.reset({
              index: 0,
              routes: [{name: 'Cadastro'}],
            });
          }}
          style={styles.btn}>
          <Icon2
            name={'exit-to-app'}
            size={55}
            color={colors.orange}
            style={{
              transform: [{rotateY: '180deg'}],
            }}
          />
          <Text style={styles.logoutTxt}> Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light_gray,
    justifyContent: 'space-between',
  },
  topMenu: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    color: colors.white,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  line: {
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  txt: {
    marginLeft: 20,
    marginTop: 10,
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  logout: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7A7A7A',
  },
  btn: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoutTxt: {
    alignSelf: 'center',
    fontSize: 25,
    color: colors.white,
    marginLeft: 15,
    fontWeight: 'bold',
  },
});
