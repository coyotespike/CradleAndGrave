/* eslint-disable */
import { ADD_PATIENT, ADD_NOTE, ADD_TREATMENT, LOGOUT, LOGIN, SIGNUP } from './actionTypes';

// The below is ES6 object shorthand.
// It will add a property to our object we are returning
// firstName: firstName


export const loginUser = ({username, password, specialty}) => ({
  type: LOGIN,
  username,
  password,
  specialty
});

export const signupUser = ({ username, password, specialty }) => ({
  type: SIGNUP,
  username,
  password,
  specialty
});

export const logoutUser = () => ({
  type: LOGOUT
});

let nextPatientStateId = 0;
const addPatient = ({ userType, providerId, firstName, lastName, sex, birthdate, age }) => {
  return {
    type: ADD_PATIENT,
    id: nextPatientStateId++,
    userType,
    providerId,
    firstName,
    lastName,
    sex,
    birthdate,
    age
  };
};

const addNote = ({ userId, body, datetime }) => {
  return {
    type: ADD_NOTE,
    userId,
    body,
    datetime
  };
};

const addTreatment = ({ userId, name, dose, note, action, datetime }) => {
  return {
    type: ADD_TREATMENT,
    userId,
    name,
    dose,
    notes,
    action,
    datetime
  };
};

const addName = ({ firstName, lastName }) => {
  return {
    type: ADD_NAME,
    name: { firstName, lastName }
  };
};

export { addPatient, addNote, addTreatment, addName };
