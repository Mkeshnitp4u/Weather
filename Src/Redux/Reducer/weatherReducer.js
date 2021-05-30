
import * as types from '../actionTypes';

const INITIAL_STATE = {
  weatherDetail: undefined,
  isLoading: false,
  error:false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.WEATHER_API_INITIATED:
      return {
        ...state,
        isLoading: true
      };
    case types.WEATHER_API_SUCCESS:
      return {
        ...state,
        weatherDetail: action.payload,
        isLoading: false,
        error:false
      };
    case types.WEATHER_API_FAILURE:
      return {
        ...state,
        weatherDetail: action.payload,
        isLoading: false,
        error:true
      };

    default:
      return state;
  }
};
