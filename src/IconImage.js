import React from 'react';
import { View } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import FontelloConfig from './config.json';
const Icon = createIconSetFromFontello(FontelloConfig);

const IconImage = (props) => {
    return (
        
            <Icon 
            name={props.name} 
            size={props.size} 
            color={props.color} 
            style={{ backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center' }}
            />
       

    );
};

export default IconImage;
// transparent