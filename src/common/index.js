import React from 'react';
import { Alert, TouchableOpacity, Text, View, Image  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { responsiveWidth, responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions';
export const navigationHeight = () => {
    if (responsiveWidth(100) > 414) {
    return 74;
    } else {
      return 44;
    }
  };

export function showAlertWithDefaultTitle(message) {
    Alert.alert(
        'ReactLib',
        message,
        [
            { text: 'OK', onPress: () => {} }
        ],
        { cancelable: false });
}

export function showAlertWithDefaultTitleForConfirmOrder(message) {
    Alert.alert(
        'ReactLib',
        message,
        [
            { text: 'OK', onPress: () => {} }
        ],
        { cancelable: false });
}

export function showAlert(title, message) {
    Alert.alert(
        title,
        message,
        [
            { text: 'OK', onPress: () => {} }
        ],
        { cancelable: false });
}
export function showAlertWithCustomAction(message, onPressOk) {
    Alert.alert(
        'ReactLib',
        message,
        onPressOk,
       
        { cancelable: false });
}

export function addSearchBar(title, onSearchPress, onSideMenu) {
    return (
        <View
            style={{ height: navigationHeight(), width: null, justifyContent: 'center', backgroundColor: 'white' }}
        >
            <TouchableOpacity onPress={onSearchPress} >
                <View style={{ height: navigationHeight()-1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transprent', flexDirection: 'row' }} >
                    <Text
                        style={{
                            backgroundColor: 'transprents',
                            marginLeft: (10 + responsiveWidth(5)),
                            textAlign: 'center',
                            padding: 5,
                            flex: 1,
                            fontSize: responsiveFontSize(2.5),
                            fontWeight: '500',
                            color: '#43484E',
                            fontStyle: 'normal',
                            fontFamily: 'Proxima Nova',
                        }}
                    >
                        {title}
                    </Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'transprent' }}>
                    <Image source={require('../Images/add-plus-button.png')} style={{ width: responsiveWidth(5.5), height: responsiveWidth(5.5), resizeMode: 'contain', marginRight: 10 }} />
                    </View >
                </View>
            </TouchableOpacity>
            <View style={{ flex: 1, height: 40, width: 40, justifyContent: 'center', backgroundColor: 'transprent', position: 'absolute' }} >
                <TouchableOpacity
                    onPress={onSideMenu}
                >
                    <Image source={require('../Images/backArrow.png')} style={{ width: responsiveWidth(5.5), height: responsiveWidth(5.5), resizeMode: 'contain', marginLeft: 0 }} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: '#F5F5F5',
                    height: 1.0
                }}
            />

        </View>
    );
}

export function addNavTitlePlus(title) {
    return (
        <View
            style={{ height: navigationHeight(), width: null, justifyContent: 'center', }}
        >
            <View style={{ height: navigationHeight() - 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >
                <Text
                    style={{
                        backgroundColor: 'transparent',
                        //height: responsiveWidth(8),
                        marginLeft: 5,
                        textAlign: 'right',
                        fontSize: responsiveFontSize(2.2),
                        padding: 5,
                        fontStyle: 'normal',
                        fontFamily: 'Proxima Nova',
                    }}
                >
                    {title}
                </Text>
            </View>
            <View style={{ height: 40, width: 40, justifyContent: 'center', backgroundColor: 'transparent', position: 'absolute' }} >
                <TouchableOpacity
                  style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center',  }}
                    onPress={() => Actions.pop()}
                >
                 <Image source={require('../Images/backArrow.png')} style={{ width: responsiveScreenWidth(7.0), height: responsiveScreenWidth(7.0), resizeMode: 'contain', marginLeft: 0 }} />
                    {/* <Icon
                        name={'back'}
                        size={responsiveWidth(5)}
                        color={'#aa41ce'}
                        style={{
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    /> */}

                </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: '#F5F5F5',
                    height: 1.0
                }}
            />

        </View>
    );
}

export function addNavTitleWithback(title) {
    return (
        <View
            style={{ height: navigationHeight(), width: null, justifyContent: 'center', }}
        >
            <View style={{ height: navigationHeight() - 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >
                <Text
                    style={{
                        backgroundColor: 'transparent',
                        //height: responsiveWidth(8),
                    
                        textAlign: 'right',
                        fontSize: responsiveFontSize(2.5),  
                       
                        fontWeight: '700',
                        color: '#43484E',
                        fontStyle: 'normal',
                        fontFamily: 'Proxima Nova',
                    }}
                >
                    {title}
                </Text>
            </View>
            <View style={{ height: 40, width: 40, justifyContent: 'center', backgroundColor: 'transparent', position: 'absolute' }} >
                <TouchableOpacity
                style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center',  }}
                    onPress={() => Actions.pop()}
                >
                 <Image source={require('../Images/backArrow.png')} style={{ width: responsiveWidth(5.5), height: responsiveWidth(5.5), resizeMode: 'contain', marginLeft: 0 }} />
                    {/* <Icon
                        name={'back'}
                        size={responsiveWidth(5)}
                        color={'#aa41ce'}
                        style={{
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    /> */}

                </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: '#F5F5F5',
                    height: 1.0
                }}
            />

        </View>
    );
}
export function addNavTitle(title) {
    return (
        <View
            style={{ height: navigationHeight(), width: null, justifyContent: 'center', }}
        >
            <View style={{ height: navigationHeight() - 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >
                <Text
                    style={{
                        backgroundColor: 'transparent',
                        //height: responsiveWidth(8),
                        textAlign: 'center',
                        fontSize: responsiveFontSize(2.5),
                        fontWeight: '500',
                        color: '#43484E',
                        fontStyle: 'normal',
                        fontFamily: 'Proxima Nova',
                     }}
                >
                    {title}
                </Text>
            </View>
             <View
                style={{
                    backgroundColor: '#F5F5F5',
                    height: 1.0
                }}
            />

        </View>
    );
}

export function addNavWithSide(title, onSideMenu) {
    return (
        <View
            style={{ height: 64, width: null, justifyContent: 'center', }}
        >
            <View style={{ height: 63, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >
                <Text
                    style={{
                        backgroundColor: 'transparent',
                        //height: responsiveWidth(8),
                        marginLeft: 5,
                        textAlign: 'right',
                        fontSize: responsiveFontSize(2.2),
                        padding: 5,
                        fontStyle: 'normal',
                        fontFamily: 'Proxima Nova',
                    }}
                >
                    {title}
                </Text>
            </View>
            <View style={{ marginLeft: 10, height: 40, width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'absolute' }} >
            <TouchableOpacity
                onPress={onSideMenu}
            >
                {/* <Icon
                    name={'menu'}
                    size={responsiveWidth(5)}
                    color={'#aa41ce'}
                    style={{
                        marginTop: 10,
                        height: 40,
                        width: 40,
                        backgroundColor: 'transprent',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                /> */}

            </TouchableOpacity>
        </View>
            <View
                style={{
                    backgroundColor: '#F5F5F5',
                    height: 1.0
                }}
            />

        </View>
    );
}

export function addNavWithBackAction(title, onBackAction) {
    return (
        <View
            style={{ height: 64, width: null, justifyContent: 'center', }}
        >
            <View style={{ height: 63, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >
                <Text
                    style={{
                        backgroundColor: 'transparent',
                        marginLeft: 5,
                        textAlign: 'right',
                        fontSize: responsiveFontSize(2.2),
                        padding: 5,
                        fontStyle: 'normal',
                        fontFamily: 'Proxima Nova',
                    }}
                >
                    {title}
                </Text>
            </View>
            <View style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'absolute' }} >
            <TouchableOpacity
                onPress={onBackAction}
            >
                {/* <Icon
                    name={'back'}
                    size={responsiveWidth(5)}
                    color={'#aa41ce'}
                    style={{
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                /> */}

            </TouchableOpacity>
        </View>
            <View
                style={{
                    backgroundColor: '#F5F5F5',
                    height: 1.0
                }}
            />

        </View>
    );
}


// export function showAlertWithAction(title, message, buttonArray, callback) {
//     Alert.alert(
//                     title,
//                     message,
//                     buttonArray.map(buttonName =>
//                         { text: buttonName, onPress: {() => callback(buttonName)} }
//                     ),
//                     { cancelable: false });
// }