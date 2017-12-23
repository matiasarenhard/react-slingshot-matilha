import * as types from '../constants/actionTypes';

//import {getFormattedDateTime} from '../utils/dates';


export function userSave(email, password){
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_USER,
      email,
      password
    });
  };
}
//export function saveFuelSavings(settings) {
  //return function (dispatch) {
    //return dispatch({
      //type: types.SAVE_FUEL_SAVINGS,
      //dateModified: getFormattedDateTime(),
      //settings
    //});
  //};
//}

//export function calculateFuelSavings(settings, fieldName, value) {
//  return {
    //type: types.CALCULATE_FUEL_SAVINGS,
    //dateModified: getFormattedDateTime(),
    //settings,
    //fieldName,
  //  value
//  };
//}
