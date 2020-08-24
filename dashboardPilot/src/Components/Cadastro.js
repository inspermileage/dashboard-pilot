import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import colors from '../misc/colors';

export default function Cadastro() {
  return (
    <View style={styles.viewIn}>
      <StatusBar backgroundColor={colors.black} hidden={true} />
      <Image
        style={styles.image}
        source={require('../../assets/images/logo.png')}
      />
      <Text style={styles.txt}>CADASTRAR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewIn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.orange,
  },
  image: {
    margin: 20,
  },
  txt: {
    fontSize: 35,
    color: colors.orange,
    //fontFamily: 'Roboto',
    marginRight: Dimensions.get('screen').width * 0.15,
    marginTop: Dimensions.get('screen').height * 0.1,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
