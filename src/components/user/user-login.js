import React, { Component } from 'react';
import {
    View,
    Image,
  Dimensions,  
    TouchableHighlight,
    Text,
    AsyncStorage,
    TouchableOpacity,
    Platform,
    Keyboard, DeviceEventEmitter, TouchableWithoutFeedback, TextInput
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { RNProgressHUD } from 'react-native-simplest-hud';
// import Drawer from 'react-native-drawer';
import bgImage from '../../Images/login_circle.png';
import { Input } from '../common';
import logoImage from '../../Images/iTunesArtwork.png';
import { userLogin } from '../../services/user';

import * as Common from '../../common';
import * as Constant from '../../types';

const {height, width} = Dimensions.get('window');
class UserLogin extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            password: '',
            isReset: true,
            validate: () => {
                let message = '';
                const reg = Constant.EMAILREG;
                const preg = Constant.PASSWORDREG;
                if (this.state.email === '') {
                    message = 'Please enter email.';
                } else if (!reg.test(this.state.email)) {
                    message = 'Please enter valid email.';
                } else if (this.state.password === '') {
                    message = 'Please enter password.';
                } else if (!preg.test(this.state.password)) {
                    message = 'Password does not allow space.';
                }
                if (message === '') {
                    return true;
                }

                Common.showAlertWithDefaultTitle(message);
                return false;
            }
        });
        
    }
   
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F1F5F8'}}>
              {Common.addNavTitleWithback('Login')}
            <Image style={{ flex: 1, width: null, height: null, marginBottom: 50, marginTop: 50, resizeMode: 'cover' }} source={bgImage} />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}>
                        <KeyboardAwareScrollView style={{ backgroundColor: 'transparent' }} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled automaticallyAdjustContentInsets={false} keyboardShouldPersistTaps={true}>
                          <Text style={{ flex: 1, marginTop: width > 414 ? responsiveWidth(55) : responsiveWidth(45), fontSize: responsiveFontSize(4.0), fontWeight: '400', marginLeft:  width > 414 ? responsiveScreenWidth(25) : responsiveScreenWidth(15), marginRight: width > 414 ? responsiveScreenWidth(25) : responsiveScreenWidth(15), textAlign: 'center'}} > Please login to view this content </Text>
                          <View style={{ flex: 1, marginTop: responsiveWidth(7), backgroundColor: 'white', marginLeft: responsiveScreenWidth(15), marginRight: responsiveScreenWidth(15), height: responsiveWidth(15), borderRadius: responsiveWidth(7.5)}} >
                          <TextInput 
                           style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: 5, marginBottom: 5, textAlign: 'center', backgroundColor: 'transparent', fontSize: responsiveFontSize(2), fontWeight: '600' }}
                           secureTextEntry={false}
                           autoCorrect={false}
                           autoCapitalize={'none'}
                           placeholder={'Email'}
                           value={this.state.email}
                        //    onFocus={this.props.onfocusInvoke}
                        onChangeText={email => this.setState({ email })}
                           underlineColorAndroid={'transparent'}
                           placeholderTextColor="#728692"
                           returnKeyType={'next'}
                           keyboardType={'email-address'}
                           onSubmitEditing={() => { 
                            this.refs.password.focus(); 
                          }}  
                          />
                          </View>
                          <View style={{ flex: 1, marginTop: responsiveWidth(4), backgroundColor: 'white', marginLeft: responsiveScreenWidth(15), marginRight: responsiveScreenWidth(15), height: responsiveWidth(15), borderRadius: responsiveWidth(7.5)}}>
                          <TextInput 
                           ref='password'
                           style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: 5, marginBottom: 5, textAlign: 'center', backgroundColor: 'transparent', fontSize: responsiveFontSize(2), fontWeight: '600' }}
                           secureTextEntry
                           autoCorrect={false}
                           autoCapitalize={'none'}
                           placeholder={'Password'}
                           value={this.state.password}
                        //    onFocus={this.props.onfocusInvoke}
                           onChangeText={password => this.setState({ password })}
                           underlineColorAndroid={'transparent'}
                           placeholderTextColor="#728692"
                           returnKeyType={'done'}
                           keyboardType={'default'}
                           onSubmitEditing={() => { 
                            
                          }}  
                          />
                         </View> 
                         <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => console.log(this.state)}>
                          <View style={{ flex: 1, marginTop: responsiveWidth(8), backgroundColor: '#13AAEB', alignContent: 'center', justifyContent: 'center', marginLeft: responsiveScreenWidth(20), marginRight: responsiveScreenWidth(20), height: responsiveWidth(15), borderRadius: responsiveWidth(7.5),}} >
                          <Text style={{ alignSelf: 'center', color: 'white', textAlign: 'center', backgroundColor: 'transparent', fontSize: responsiveFontSize(2.5), fontWeight: '700' }} > LOGIN </Text>
                          </View>
                        </TouchableHighlight>  
                        </KeyboardAwareScrollView>
                    </View>

                </TouchableWithoutFeedback>
                <RNProgressHUD
                    isVisible={this.state.isLoading}
                    color='#434c54'
                    label='Loading'
                    isActivityIndicator
                />
           </View>
        );
    }

}
const Styles = {
    inputStyle: {
        flex: 1,
        color: '#666666',
        fontSize: responsiveFontSize(2.2),
        fontWidth: '700',
        marginLeft: 10,
        marginLeft: 10,
        backgroundColor: 'transparent',
    },
    containerStyle: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        width: null,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default UserLogin;
// transparent