import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../Themes/colors';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Cadastro from '../../Components/Cadastro';

export default function Register() {
  return (
    <View style={styles.container}>
      <Cadastro />
      <ProgressSteps
        progressBarColor={colors.orange}
        completedProgressBarColor={colors.orange}
        activeStepIconBorderColor={colors.orange}
        completedStepIconColor={colors.orange}
        activeLabelColor={colors.orange}
        disabledStepIconColor={colors.orange}>
        <ProgressStep nextBtnTextStyle={{color: 'lightgray'}} label="Car">
          <Textinho pagina="car" />
        </ProgressStep>
        <ProgressStep
          nextBtnTextStyle={{color: 'lightgray'}}
          previousBtnTextStyle={{color: 'lightgray'}}
          label="Track">
          <Textinho pagina="track" />
        </ProgressStep>
        <ProgressStep
          nextBtnTextStyle={{color: 'lightgray'}}
          previousBtnTextStyle={{color: 'lightgray'}}
          label="Round">
          <Textinho pagina="round" />
        </ProgressStep>
        <ProgressStep
          nextBtnTextStyle={{color: colors.orange}}
          previousBtnTextStyle={{color: 'lightgray'}}
          label="Phone">
          <Textinho pagina="phone" />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}

// Componente que será apagado posteriormente
// Será substituído pelas páginas, que estarão
// entre as ProgressSteps
function Textinho(props) {
  return (
    <>
      <Text style={{alignSelf: 'center', color: colors.white}}>
        aqui estará a página do {props.pagina}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
