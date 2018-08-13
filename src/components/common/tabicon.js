import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import FontelloConfig from '../../config.json';
const Icon = createIconSetFromFontello(FontelloConfig);
class TabIcon extends Component {
    render() {
      var color = this.props.selected ? 'red' : 'green';
  
      return (
        //  <Image source={require('../../Images/events.png')} style={{ width: responsiveWidth(5), height: responsiveWidth(5), backgroundColor: 'transparent', resizeMode: 'contain' }} />
       // <Image 
          <Icon color={color} name={ "calendar" || "circle"} size={20} />
        
      );
    }
  }
  export default TabIcon;
// `${BASE_URL}${methodName}${urlParameter}`;