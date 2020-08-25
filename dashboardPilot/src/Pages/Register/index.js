import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import colors from '../../Themes/colors';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Cadastro from '../../Components/Cadastro';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomArrow from '../../Components/bottomArrow';
import Car from './Car/Car';
import Phone from './Phone/Phone';
import Round from './Round/Round';
import Track from './Track/Track';

export default function Register() {
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
            onNext={changeStep}
            onPrevious={changeStep}
            nextBtnText={
              <Icon name={'arrow-right'} size={50} color={colors.orange} />
            }
            previousBtnText={
              <Icon name={'arrow-left'} size={50} color={colors.orange} />
            }
            nextBtnTextStyle={{color: 'lightgray', marginBottom: -20}}
            label="Car">
            <Car />
          </ProgressStep>

          {/* TRACK */}
          <ProgressStep
            onNext={changeStep}
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
            <Track />
          </ProgressStep>

          {/* ROUND */}
          <ProgressStep
            onNext={changeStep}
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
            <Round />
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
            <Phone />
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
