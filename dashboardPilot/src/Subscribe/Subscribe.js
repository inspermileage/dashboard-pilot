import React from 'react';
import {View, Text} from 'react-native';
import Cadastro from '../Components/Cadastro';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import colors from '../misc/colors';

export default function Subscribe() {
  return (
    <View style={{flex: 1}}>
      <Cadastro />
      {/* <ProgressSteps
        progressBarColor={colors.orange}
        completedProgressBarColor={colors.orange}
        activeStepIconBorderColor={colors.orange}
        completedStepIconColor={colors.orange}
        activeLabelColor={colors.orange}>
        <ProgressStep label="Car"></ProgressStep>
        <ProgressStep label="Track"></ProgressStep>
        <ProgressStep label="Round"></ProgressStep>
        <ProgressStep label="Phone"></ProgressStep>
      </ProgressSteps> */}
    </View>
  );
}
