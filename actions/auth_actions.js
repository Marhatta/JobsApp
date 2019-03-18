import {AsyncStorage} from 'react-native';
import {Facebook} from 'expo';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

//using redux thunk because we want out action to fire at particular time not instantly i.e async action creator
export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');

    if(token){
      //Dispatch an action saying fb login is done
      dispatch({type:FACEBOOK_LOGIN_SUCCESS,payload:token})
    } else {
      //start up fb login process
      doFacebookLogin(dispatch);
    }
  };


const doFacebookLogin = async dispatch => { //helper function
  let {type,token} = await Facebook.logInWithReadPermissionsAsync('1139454166229491',{
    permissions:['public_profile']
  });

  if(type==='cancel'){
    return dispatch({type:FACEBOOK_LOGIN_FAIL})
  }

  await AsyncStorage.setItem('fb_token',token);
  dispatch({type:FACEBOOK_LOGIN_SUCCESS,payload:token});
};
