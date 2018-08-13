
import React from 'react';
import { Dimensions } from 'react-native';

//Base URL
export const BASE_URL = 'Your Base Url';

export const PROJECTNAME = 'ReactLib';
export const EMAILREG = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORDREG = /^\S{3,}$/;
export const ApiMethods = {
    LOGIN: 'user/login',
 
   
};

export const Messages = {
    SERVER_ERROR: 'Something went wrong, please try again.',
    POSTCODE_BLANK_ERROR: 'Please enter postcode.',
    NO_INTERNET: 'No internet, please check your internet.'
};  

export const screenSize = {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height
};

