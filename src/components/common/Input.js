import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

var createReactClass = require('create-react-class');

var Input = createReactClass({
    focus: function () {
      // Explicitly focus the text input using the raw DOM API.
      if (this.myTextInput !== null) {
        this.myTextInput.focus();
      }
    },
    render: function () {
      return (
            <View style={{ flex: 1, height: responsiveWidth(15) }}>
                <View style={Styles.containerStyle}>
                    <View style={{ width: (responsiveWidth(12) - 5), height: (responsiveWidth(12) - 5), backgroundColor: 'transparent', marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                        {/* <Image source={require('../../images/user_name.png')} style={{ width: 17, height: 22, resizeMode: 'contain', marginLeft: 20 }} /> */}
                    </View>
                    <TextInput
                        ref={(input) => { this.myTextInput = input; }}
                        editable={this.props.isEditable}
                        secureTextEntry={this.props.isSequre || false}
                        autoCorrect={false}
                        autoCapitalize={this.props.autoCapitalize === undefined ? 'none' : 'sentences'}
                        placeholder={this.props.placeholderText}
                        style={Styles.inputStyle}
                        value={this.props.value}
                        onFocus={this.props.onfocusInvoke}
                        onChangeText={this.props.onChangeText}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor="#728692"
                        returnKeyType={this.props.returnKeyType}
                        keyboardType={this.props.keyboardType}
                        onSubmitEditing={this.props.onSubmitEditing}        
                    />
                </View>
                <View style={{ height: 1, backgroundColor: '#D3D3D3', marginLeft: 10, marginRight: 10, marginBottom: 5 }} />
            </View>
        );
    }
  });

const Styles = {
    inputStyle: {
        flex: 1,
        color: '#666666',
        fontSize: responsiveFontSize(2.2),
        fontWeight: '700',
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

export { Input };