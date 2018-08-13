import { NetInfo } from 'react-native';
import { Messages, ApiMethods } from '../types';
import * as Constant from '../../src/constant';

import {
    postData
} from './default';

export const fetchSchoolList = (postValue, urlParameter, callback) => {
    NetInfo.isConnected.fetch().done((isConnected) => {
        if (isConnected) {
            postData(ApiMethods.NEAR_POSTCODE, postValue, urlParameter)
                .then(response => {
                    if (response.status === true) {
                        callback(true, response.data, response.api_timestamp);
                    } else {
                        callback(false, null, 'server not responding');
                    }
                })
                .catch((() => callback(false, null, Messages.SERVER_ERROR)));
        } else {
            callback(false, null, Constant.Messages.no_internet);
        }
    });
};

export const fetchSchoolListByLocation = (postValue, urlParameter, callback) => {
    NetInfo.isConnected.fetch().done((isConnected) => {
        if (isConnected) {
            postData(ApiMethods.NEAR_BYLOCATION, postValue, urlParameter)
                .then(response => {
                    if (response.status === true) {
                        callback(true, response.data, response.api_timestamp);
                    } else {
                        callback(false, null, 'server not responding');
                    }
                })
                .catch((() => callback(false, null, Messages.SERVER_ERROR)));
        } else {
            callback(false, null, Constant.Messages.no_internet);
        }
    });
};

export const fetchSchoolNewsList = (postValue, callback) => {
    NetInfo.isConnected.fetch().done((isConnected) => {
        if (isConnected) {
            postData(ApiMethods.NEWS, postValue)
                .then(response => {
                    if (response.status === true) {
                        callback(true, response.data, response.api_timestamp);
                    } else {
                        callback(false, null, 'server not responding');
                    }
                })
                .catch((() => callback(false, null, Messages.SERVER_ERROR)));
        } else {
            callback(false, null, Constant.Messages.no_internet);
        }
    });
};
export const fetchSchoolNewsLetters = (postValue, callback) => {
    NetInfo.isConnected.fetch().done((isConnected) => {
        if (isConnected) {
            postData(ApiMethods.NEWS_LETTERS, postValue)
                .then(response => {
                    if (response.status === true) {
                        callback(true, response.data, response.api_timestamp);
                    } else {
                        callback(false, null, 'server not responding');
                    }
                })
                .catch((() => callback(false, null, Messages.SERVER_ERROR)));
        } else {
            callback(false, null, Constant.Messages.no_internet);
        }
    });
};

export const fetchSchoolEvent = (postValue, callback) => {
    NetInfo.isConnected.fetch().done((isConnected) => {
        if (isConnected) {
            postData(ApiMethods.EVENT, postValue)
                .then(response => {

                    if (response.status === true) {
                        callback(true, response.data, response.api_timestamp);
                    } else {
                        callback(false, null, 'server not responding');
                    }
                })
                .catch((() => callback(false, null, Messages.SERVER_ERROR)));
        } else {
            callback(false, null, Constant.Messages.no_internet);
        }
    });
};

export const fetchSchoolAlbums = (postValue, callback) => {
    NetInfo.isConnected.fetch().done((isConnected) => {
        if (isConnected) {
            postData(ApiMethods.ALBUMS, postValue)
                .then(response => {
                    if (response.status === true) {
                        callback(true, response.data, response.api_timestamp);
                    } else {
                        callback(false, null, 'server not responding');
                    }
                })
                .catch((() => callback(false, null, Messages.SERVER_ERROR)));
        } else {
            callback(false, null, Constant.Messages.no_internet);
        }
    });
};

export const fetchSchoolPlaces = (postValue, callback) => {
    NetInfo.isConnected.fetch().done((isConnected) => {
        if (isConnected) {
            postData(ApiMethods.PLACE, postValue)
                .then(response => {
                    if (response.status === true) {
                        callback(true, response.data, response.api_timestamp);
                    } else {
                        callback(false, null, 'server not responding');
                    }
                })
                .catch((() => callback(false, null, Messages.SERVER_ERROR)));
        } else {
            callback(false, null, Constant.Messages.no_internet);
        }
    });
};

export const fetchSchoolCategories = (postValue, callback) => {
    NetInfo.isConnected.fetch().done((isConnected) => {
        if (isConnected) {
            postData(ApiMethods.CATEGPRIES, postValue)
                .then(response => {
                    if (response.status === true) {
                        callback(true, response.data, response.api_timestamp);
                    } else {
                        callback(false, null, 'server not responding');
                    }
                })
                .catch((() => callback(false, null, Messages.SERVER_ERROR)));
        } else {
            callback(false, null, Constant.Messages.no_internet);
        }
    });
};