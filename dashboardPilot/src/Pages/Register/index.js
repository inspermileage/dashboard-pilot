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
import {sendCarInfo, sendRoundInfo, sendTrackInfo} from '../../Functions/axios';

export default function Register() {
  const [carName, setCarName] = useState('');
  const [carDescription, setCarDescription] = useState('');
  const [carId, setCarId] = useState();

  const [round, setRound] = useState('');
  const [description, setDescription] = useState('');
  const [reason, setReason] = useState('');
  const [roundId, setRoundId] = useState();

  const [trackName, setTrackName] = useState('');
  const [trackDescription, setTrackDescription] = useState('');
  const [trackId, setTrackId] = useState();

  const [phoneNumber, setPhoneNumber] = useState('');

  const scroll = useRef();
  const changeStep = () => {
    scroll.current?.scrollTo({x: 0, y: 0, animated: true});
  };

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
              sendCarInfo(carName, carDescription, setCarId), changeStep;
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
            <Car
              setCarName={setCarName}
              setCarDescription={setCarDescription}
            />
          </ProgressStep>

          {/* TRACK */}
          <ProgressStep
            onNext={() => {
              sendTrackInfo(trackName, trackDescription, setTrackId),
                changeStep;
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
            <Track
              setTrackName={setTrackName}
              setTrackDescription={setTrackDescription}
            />
          </ProgressStep>

          {/* ROUND */}
          <ProgressStep
            onNext={() => {
              sendRoundInfo(
                round,
                description,
                reason,
                trackId,
                carId,
                setRoundId,
              ),
                changeStep;
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
            <Round
              setRound={setRound}
              setDescription={setDescription}
              setReason={setReason}
            />
          </ProgressStep>

          {/* PHONE */}
          <ProgressStep
            onPrevious={changeStep}
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
            label="Phone">
            <Phone setPhoneNumber={setPhoneNumber} />
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
