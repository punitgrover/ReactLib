import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from 'react-native-responsive-dimensions';
const Button = ({ onPress, children }) => {
    return (
        <View style={{ height: responsiveWidth(18), width: null, backgroundColor: 'white' }}>
        <View style={{ width: null, height: 0.5, backgroundColor: '#dfdfdf' }} />
             <View style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
               <View style={{ backgroundColor: '#e9453c', flex: 1, borderRadius: 5 }} >  
                 <TouchableOpacity style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={onPress} >
                      <Text style={{ color: 'white', textAlign: 'center', fontSize: responsiveFontSize(2.5), backgroundColor: 'transparent' }} > 
                           {children} 
                     </Text>                                
                 </TouchableOpacity>   
              </View>   
             </View>  
         </View>  
        
    );
};

export { Button };
