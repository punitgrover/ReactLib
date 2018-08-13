import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const timer = require('../../Images/refresh-button.png');

const NoSalonView = ({ imageName, message, onPressRefresh }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={imageName} style={{ marginTop: -80, height: responsiveWidth(30), width: responsiveWidth(60), justifyContent: 'space-around', resizeMode: 'contain' }} />
            <Text style={{ fontSize: responsiveFontSize(3), color: '#C0C0C0', marginTop: 20, textAlign: 'center', fontStyle: 'normal', fontFamily: 'Proxima Nova', }}>{message}</Text>
            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={onPressRefresh}>
            <Text style={{ fontSize: responsiveFontSize(2.2), color: '#C0C0C0', marginTop: 20, textAlign: 'center', fontStyle: 'normal', fontFamily: 'Proxima Nova', }}>Refresh again</Text>
            {/* <View style={{ width: responsiveWidth(10), height: responsiveWidth(10), backgroundColor: '#F5F5F5', marginTop: 10, alignItems: 'center', justifyContent: 'center' }} >  
                 <Image source={timer} style={{ flex: 1, justifyContent: 'space-around', resizeMode: 'contain' }} />
             </View>  */}
          </TouchableHighlight>   
        </View>    
    );
};  

export { NoSalonView };
