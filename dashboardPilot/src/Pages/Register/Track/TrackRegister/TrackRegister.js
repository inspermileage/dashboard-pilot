import React, {useState, useEffect} from 'react';

import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputBasic from '../../../../Components/InputBasic';
import Cadastro from '../../../../Components/Cadastro';
import colors from '../../../../Themes/colors';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import {Alert} from 'react-native';
import axios from 'axios';

export default function TrackRegister(props) {
  const navigation = useNavigation();
  const [track, setTrack] = useState("");
  const [description, setDescription] = useState("");
  async function sendTrackInfo(track,description) {
    const dadosTrack = {
      description: description,
      name: track,
    };
    console.log(dadosTrack);

    await axios
      .post('https://apirestmileage.herokuapp.com/api/track/', dadosTrack)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Deu errado :(');
      });
  }
  return (
    <View style= {styles.container}>
      <Cadastro/>
      <ScrollView>
      <InputBasic
        label="Track"
        height={40}
        type="default"
        onChangeText={(e) => {
          setTrack(e);
        }}
      />
      <View style={styles.header}>
      <InputBasic
        label="Description"
        height={120}
        type="default"
        onChangeText={(e) => {
          setDescription(e);
        }}
        />
        <TouchableOpacity
        style={{marginRight: 25}}
        onPress={() => {
          sendTrackInfo(track,description)
          navigation.goBack();
        }}>
        <Icon name={'save'} size={65} color={colors.orange} />
        </TouchableOpacity>
        </View>
        </ScrollView>
        
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});

