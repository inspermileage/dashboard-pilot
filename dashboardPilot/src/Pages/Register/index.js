import React, {useRef, useState} from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
import colors from '../../Themes/colors';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Cadastro from '../../Components/Cadastro';
import Icon from 'react-native-vector-icons/FontAwesome';
import Car from './Car/Car';
import Phone from './Phone/Phone';
import Round from './Round/Round';
import Track from './Track/Track';
import {postData, getData} from '../../Functions/axios';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function Register() {
  const dispatch = useDispatch();
  const dataCar = useSelector((state) => state.register.carData);
  const dataTrack = useSelector((state) => state.register.trackData);
  const dataRound = useSelector((state) => state.register.roundData);
  // const dataPhone = useSelector((state) => state.register.phoneData);

  const {sendCarInfo, sendTrackInfo, sendRoundInfo} = postData(
    dataCar,
    dataTrack,
    dataRound,
  );

  const {getCarInfo, getTrackInfo} = getData();

  // const [phoneNumber, setPhoneNumber] = useState('');

  const scroll = useRef();
  const changeStep = () => {
    scroll.current?.scrollTo({x: 0, y: 0, animated: true});
  };

  const navigation = useNavigation();

  function goTopage() {
    console.log('uhullllll');

    sendRoundInfo();
    // navigation.navigate('Main');
  }

  return (
    <View style={styles.container}>
      <Cadastro />
      <ScrollView ref={scroll}>
        <ProgressSteps
          progressBarColor={colors.orange}
          completedProgressBarColor={colors.orange}
          activeStepIconBorderColor={colors.orange}
          completedStepIconColor={colors.orange}
          activeLabelColor={colors.orange}
          disabledStepIconColor={colors.orange}>
          {/* CAR */}
          <ProgressStep
            onNext={() => {
              sendCarInfo();
              getCarInfo();
            }}
            onPrevious={changeStep}
            nextBtnText={
              <Icon name={'arrow-right'} size={50} color={colors.orange} />
            }
            previousBtnText={
              <Icon name={'arrow-left'} size={50} color={colors.orange} />
            }
            nextBtnTextStyle={{color: 'lightgray', marginBottom: -20}}
            label="Car">
            <Car dispatch={dispatch} />
          </ProgressStep>

          {/* TRACK */}
          <ProgressStep
            onNext={() => {
              sendTrackInfo(), changeStep;
            }}
            onPrevious={changeStep}
            nextBtnText={
              <Icon name={'arrow-right'} size={50} color={colors.orange} />
            }
            previousBtnText={
              <Icon name={'arrow-left'} size={50} color={colors.orange} />
            }
            nextBtnTextStyle={{color: 'lightgray', marginBottom: -20}}
            previousBtnTextStyle={{color: 'lightgray', marginBottom: -20}}
            label="Track">
            <Track dispatch={dispatch} />
          </ProgressStep>

          {/* ROUND */}
          {/* <ProgressStep
            onNext={() => {
              sendRoundInfo(), changeStep;
            }}
            onPrevious={changeStep}
            nextBtnText={
              <Icon name={'arrow-right'} size={50} color={colors.orange} />
            }
            previousBtnText={
              <Icon name={'arrow-left'} size={50} color={colors.orange} />
            }
            nextBtnTextStyle={{color: 'lightgray', marginBottom: -20}}
            previousBtnTextStyle={{color: 'lightgray', marginBottom: -20}}
            label="Round">
            <Round dispatch={dispatch} />
          </ProgressStep> */}

          {/* PHONE */}
          <ProgressStep
            onPrevious={changeStep}
            onSubmit={()=> goTopage()}
            finishBtnText={'Salvar'}
            previousBtnText={
              <Icon name={'arrow-left'} size={50} color={colors.orange} />
            }
            nextBtnTextStyle={{
              color: colors.white,
              backgroundColor: colors.orange,
              width: 120,
              height: 40,
              textAlign: 'center',
              padding: 10,
              marginBottom: -20,
            }}
            previousBtnTextStyle={{color: 'lightgray', marginBottom: -20}}
            label="Round">
            <Round dispatch={dispatch} />
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
