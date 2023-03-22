/* eslint-disable import/no-anonymous-default-export */
import { GET_CURRENT_LOCATION, GET_EMPLOYEES } from "../actions/types";

const initialState = {
  employees: [],
  currentLocation: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: payload,
      };
    case GET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: payload,
      };
    default:
      return state;
  }
}
