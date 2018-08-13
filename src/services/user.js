import { ApiMethods } from '../types';

import {
    postData, postDataWithImage
} from './default';
 

export const userLogin = (postValue, callback) => {
    postData(ApiMethods.USER_LOGIN, postValue)
        .then(response => {
            if (response.status === true) {
                callback(true, response.data, response.message);
            } else {
                callback(false, null, response.message);
            }
        }) 
        .catch((e => callback(false, null, 'server not responding')));
};
