/* eslint-disable import/no-anonymous-default-export */
import { GET_EMPLOYEES } from "../actions/types";

const initialState = {
  employees: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: payload,
      };
    default:
      return state;
  }
}
