// Import all libriries for making component

import React from 'react';
import { Text, View } from 'react-native';

// Make a component

const Header = (props) => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
);
};

const styles = {
viewStyle: {
    backgroundColor: '#0076c6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
},
textStyle: { 
    fontSize: 20
}

};
// Make the component available to other parts of the app

export { Header };
