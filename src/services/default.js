import { AsyncStorage } from 'react-native';
import {
    BASE_URL,
} from '../types';


const getHeaders = () => {
    const headers = {
        'Csrf-Token': 'default11',
        'Content-Type': 'application/json'
    };

    try {
        return AsyncStorage.getItem('userInfo').then((value) => {
           if (value !== null) {
                const data = JSON.parse(value);
                headers['Auth-Token'] = data.auth_token;
            } 
            
            return headers;
        });
      } catch (error) {
      }

      return headers;
};
const getImageHeader = () => {
    const headers = {
        'Csrf-Token': 'default11',
        'Content-Type': 'multipart/form-data'
    };

    try {
        return AsyncStorage.getItem('userInfo').then((value) => {
           if (value !== null) {
                const data = JSON.parse(value);
                headers['Auth-Token'] = data.auth_token;
            } 
            
            return headers;
        });
      } catch (error) {
        
      }

      return headers;
};


//Salon List
export const postData = (methodName, postValue, urlParameter) => {

    return getHeaders().then(args => {
        var url = `${BASE_URL}${methodName}`;
         if (urlParameter !== undefined) {
            url = `${BASE_URL}${methodName}${urlParameter}`;
         }
         
            return fetch(url, {
                method: 'POST',
                headers: args,
                body: JSON.stringify(postValue)
            }).then(response => {

                if (response.status >= 200 && response.status < 300) {
                   
                    return response.json();
                } 
                const error = new Error(response.statusText);
                error.response = response;
                throw error; 
            })
            .catch((error) => {
               
            });
        });
};

export const getData = (methodName) => {

    return fetch(`${BASE_URL}${methodName}`)  
    .then(response => {
        
        if (response.status >= 200 && response.status < 300) {
            
            return response.json();
        } 

        const error = new Error(response.statusText);
        error.response = response;
        throw error; 
    })
    .catch((error) => {
     
    });
};

//Salon List
export const postDataWithImage = (methodName, postValue) => {
    // debugger;
    return getImageHeader().then(args => {
       
        return fetch(`${BASE_URL}${methodName}`, {
            method: 'POST',
            headers: args,
            body: postValue,
            
    }).then(response => {
    
        if (response.status >= 200 && response.status < 300) {
           
            return response.json();
        } 

        const error = new Error(response.statusText);
        error.response = response;
        throw error; 
    })
    .catch((error) => {
        // debugger;
       
    });  
    });   
};
