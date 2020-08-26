import React from 'react';
import axios from 'axios';
import {Alert} from 'react-native';

export async function sendCarInfo(name, description, setCarId) {
  const dadosCar = {
    creation_date: '2020-08-01',
    description: description,
    name: name,
  };

  await axios
    .post('https://apirestmileage.herokuapp.com/api/car/', dadosCar)
    .then(function (response) {
      console.log(response.data);
      setCarId(response.data.id);
    })
    .catch(function (error) {
      console.log(error.response.status);
      Alert.alert('Deu errado :(');
    });
}

export async function sendTrackInfo(Name, Description, setTrackId) {
  const dadosTrack = {
    description: Description,
    name: Name,
  };

  await axios
    .post('https://apirestmileage.herokuapp.com/api/track/', dadosTrack)
    .then(function (response) {
      console.log(response.data);
      setTrackId(response.data.id);
    })
    .catch(function (error) {
      console.log(error.response.status);
      Alert.alert('Deu errado :(');
    });
}

export async function sendRoundInfo(
  round,
  description,
  reason,
  trackId,
  carId,
  setRoundId,
) {
  const dadosRound = {
    name: round,
    description: description,
    reason: reason,
    ref_date: '2020-08-26',
    track_id: trackId,
    car_id: carId,
  };

  await axios
    .post('https://apirestmileage.herokuapp.com/api/round/', dadosRound)
    .then(function (response) {
      console.log(response.data);
      setRoundId(response.data.id);
    })
    .catch(function (error) {
      console.log(error.response.status);
      Alert.alert('Deu errado :(');
    });
}
