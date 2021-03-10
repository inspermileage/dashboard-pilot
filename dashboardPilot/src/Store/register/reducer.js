import {
  REGISTER_CAR,
  REGISTER_TRACK,
  REGISTER_ROUND,
  REGISTER_TELEMETRY,
} from './types';

const initialState = {
  carData: {
    name: '',
    description: '',
    creation_date: '',
  },

  trackData: {
    name: '',
    description: '',
  },

  roundData: {
    name: '',
    description: '',
    ref_date: '',
    reason: '',
    track_id: 0,
    car_id: 0,
  },


  telemetryData:{

    speed: 0,
    distance: 0,
    engine_temp: 0,
    creation_time: "2020-10-18T15:29:25.253Z",
    energy_cons: 0,
    rpm: 0,
    battery: 0,
    round_id: 0

  },

  // phoneData: {
  //   phoneNumber: '',
  // },
};

function registerReducer(state = initialState, {type, payload}) {
  switch (type) {
    case REGISTER_CAR:
      return {...state, carData: {...state.carData, ...payload}};
    case REGISTER_TRACK:
      return {
        ...state,
        trackData: {...state.trackData, ...payload},
      };
    case REGISTER_ROUND:
      return {
        ...state,
        roundData: {...state.roundData, ...payload},
      };

    case REGISTER_TELEMETRY:
      return {
        ...state,
        telemetryData: {...state.telemetryData, ...payload},
      };

    // case REGISTER_PHONE:
    //   return {
    //     ...state,
    //     phoneData: {...state.phoneData, ...payload},
    //   };

    default:
      return state;
  }
}

export default registerReducer;
