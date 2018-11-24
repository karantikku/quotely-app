import { FETCH_QOD_REQUEST, FETCH_QOD_RESPONSE } from "../actions/qod";

const defaultQODState = {
  QOD: "",
  isFetching: false,
  requestedAt: ""
};

export const qodReducer = (state = defaultQODState, action) => {
  switch (action.type) {
    case FETCH_QOD_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case FETCH_QOD_RESPONSE:
      return {
        ...state,
        QOD: action.QOD,
        isFetching: action.isFetching,
        requestedAt: Date.now()
      };
    default:
      return state;
  }
};
