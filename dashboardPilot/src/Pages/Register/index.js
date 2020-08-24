import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import colors from '../../Themes/colors';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Cadastro from '../../Components/Cadastro';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomArrow from '../../Components/bottomArrow';
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
        <ProgressStep
          nextBtnText={
            <Icon name={'arrow-right'} size={50} color={colors.orange} />
          }
          previousBtnText={
            <Icon name={'arrow-left'} size={50} color={colors.orange} />
          }
          nextBtnTextStyle={{color: 'lightgray'}}
          label="Car">
          <Textinho pagina="car" />
        </ProgressStep>
        <ProgressStep
          nextBtnText={
            <Icon name={'arrow-right'} size={50} color={colors.orange} />
          }
          previousBtnText={
            <Icon name={'arrow-left'} size={50} color={colors.orange} />
          }
          nextBtnTextStyle={{color: 'lightgray'}}
          previousBtnTextStyle={{color: 'lightgray'}}
          label="Track">
          <Textinho pagina="track" />
        </ProgressStep>
        <ProgressStep
          nextBtnText={
            <Icon name={'arrow-right'} size={50} color={colors.orange} />
          }
          previousBtnText={
            <Icon name={'arrow-left'} size={50} color={colors.orange} />
          }
          nextBtnTextStyle={{color: 'lightgray'}}
          previousBtnTextStyle={{color: 'lightgray'}}
          label="Round">
          <Textinho pagina="round" />
        </ProgressStep>
        <ProgressStep
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
          }}
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
