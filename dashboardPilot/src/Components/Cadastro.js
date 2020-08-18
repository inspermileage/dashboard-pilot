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

export default function Components() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} />
      <Image
        style={styles.image}
        source={require('../../assets/images/logo.png')}
      />
      <Text style={styles.txt}>CADASTRAR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    margin: 20,
  },
  txt: {
    fontSize: 35,
    color: colors.orange,
    fontFamily: 'Roboto',
    marginRight: Dimensions.get('screen').width * 0.4,
    marginTop: Dimensions.get('screen').height * 0.05,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
