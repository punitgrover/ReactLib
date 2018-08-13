import React from 'react';
import { Dimensions } from 'react-native';

//Base URL
//export const BASE_URL = 'http://192.168.5.57/camelot/camelot_php7/api';

//export const BASE_URL = 'http://111.93.41.194:8087/camelot/api';
export const BASE_URL = 'http://ds412.projectstatus.co.uk/chilleed_foods/camlot_admin/api';


export const PROJECTNAME = 'Inventory Management System';
export const EMAILREG = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORDREG = /^\S{3,}$/;
export const AlPHABETREG = /^[A-z]+$/;

export const HeaderColor = 'rgba(173,32,33,1)';

export const ApiMethods = {

    login: 'users/login',
    forgot: 'users/forgot',
    zones: 'zones',
    orders: 'orders',
    orderDetail: 'orders/detail',
    boxes: 'boxes',
    logout: 'users/logout',
    completeOrder: 'orders/complete',
    startOrder: 'orders/start'
};

export const Messages = {
    server_error: 'Something went wrong, please try again.',
    no_internet: 'No internet, please check your internet.',
    submit_OrderItem: 'Are you sure you want to submit this order?',
    logout_message: 'Are you sure you want to logout?'
};

export const ScreenSize = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
};
