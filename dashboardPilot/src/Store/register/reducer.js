import {
  REGISTER_CAR,
  REGISTER_TRACK,
  REGISTER_ROUND,
  REGISTER_PHONE,
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

  phoneData: {
    phoneNumber: '',
  },
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
    case REGISTER_PHONE:
      return {
        ...state,
        phoneData: {...state.phoneData, ...payload},
      };

    default:
      return state;
  }
}

export default registerReducer;
