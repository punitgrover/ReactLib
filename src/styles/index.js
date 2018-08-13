import React from 'react';
import { StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from 'react-native-responsive-dimensions';

const Styles = StyleSheet.create({

    style_row_view: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },

    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    applyContainer: {
        height: 40,
        width: null,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 0,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textCenterStyle: {
        
    },

    regularFontStyle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'normal',
    },  

    middumFontStyle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: '300',
    },

    boldFontStyle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
    alignItemsCenterStyle: {
        //justifyContent: 'center',
        alignItems: 'center'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    salonNameStyle:{
        color: '#545c64',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        //backgroundColor: 'red',
        width: null
    },
   salonDetailsImageContainerStyle: {
       flex: 1,
       //height: responsiveHeight(40),
       width: null,
       backgroundColor: 'white'
   },
   salonDetailsImageStyle: {
    //flex: 1,
    // height: responsiveWidth(40),
    // width: null,
    backgroundColor: 'transparent',
   // resizeMode: 'contain',
    // aspectRatio: 2.5, 
    //resizeMode: 'stretch'
    //alignSelf: 'center',
},
salonDetailsSalonTitleStyle: {
    flexDirection: 'row',
    height: responsiveWidth(10),
    width: null,
     backgroundColor: 'transparent',
     marginTop: 5,
    //backgroundColor: 'pink',
    padding: 5, 
    //flex: 1,
    

},
salonStarRateContainerStyle: {
     backgroundColor: 'transparent',
    //backgroundColor: 'blue',
    flex: 2,
    flexDirection: 'row' 


},
salonReviewContainer: { 
    flex: 1.5,
     //backgroundColor: 'yellow', 
     backgroundColor: 'transparent',
     flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
     },

salonTextReviewStyle: {
    color: '#eb534b',
    marginRight: 5,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#eb534b",
    fontSize: responsiveFontSize(2)
    // 717171
},     

 salonStarContainer: {
    flex: 1,
    //backgroundColor: 'green',
     backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
 },
 salonTextStarStyle: {
    color: '#717171',
    fontSize: responsiveFontSize(2)
 },
 salonStarIconContainer: {
      flex: 1,
      marginBottom: 10,
      marginTop: 10,
      width: 1,
      backgroundColor: 'red'
     },
 salonStarIconStyle: { 
  backgroundColor: 'transparent',
 height: responsiveWidth(5),
 width: responsiveWidth(5),
 justifyContent: 'center',
 alignItems: 'center',
 marginLeft: 10
 },  
       
salonDetailsDescriptionStyle: {

// marginBottom: 15,
 marginLeft: 5,
 marginRight: 5,
 marginTop:  5, 
 color: '#737373'
},
salonDetailsPagerStyle: {
    flex: 1,
    backgroundColor: '#e9e9ef',
    height: responsiveWidth(80)
},
checkboxContainerStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
    backgroundColor: 'transparent'
   // height: 50
},
seperatorStyle: {
    marginTop: 5,
    height: 1,
    backgroundColor: '#dfdfdf',
    width: responsiveWidth(100)
}

});

module.exports = Styles;

