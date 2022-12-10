/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
// import type {Node} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import screen, {images} from '../../constants/constants';
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { launchImageLibrary } from 'react-native-image-picker';
import { check, PERMISSIONS } from 'react-native-permissions';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// import { StyleSheet, Text, View } from 'react-native'

const Login = () => {
  const [image, setImage] = React.useState({value:null,height:0});
  const pickImage = async auction => {
    if (Platform.OS == 'ios') {
      const IosPermstatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      console.log('IosPermstatus', IosPermstatus);
    }
    if (Platform.OS == 'android') {
      const androidPermstatus = await check(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );
      console.log('androidPermstatus', androidPermstatus);
    }

    launchImageLibrary(
      {
        mediaType: "photo",
        selectionLimit: 5,
      },
      async response => {
        try {
          const files = response.assets.map(v => ({
            uri: v.uri,
            name: `${Date.now()}.${v.type.split('/')[1]}`,
            type: v.type,
            height: v.height,
            width: v.width,
            size: v.fileSize,
            url: v.uri,
          }));
          console.log(files);
          console.log('image path==================', files[0].url);
          setImage({value:files,height:0});
        } catch (error) {
          console.log('error1', error);
        }
      },
    );
  };
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const [issignup, set_is_signup] = useState({open: true});

  const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',

      // paddingLeft: 15,
      // paddingRight: 15,
      // borderRadius: 5
    },
    div_3: {
      height: '90%',
      // backgroundColor: 'white',
      width: '90%',
      borderRadius: 10,
    },
    div_3_a: {
      height: '90%',
      justifyContent: 'flex-end',
    },
    div_3_a_1: {
      height: '70%',
      justifyContent: 'space-around',
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    input: {
      color: 'purple',
      height: !issignup.open ? '35%' : '25%',
      borderRadius: 10,
      width: '100%',
      backgroundColor: 'white',
    },
  });
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar />
      <LinearGradient
        colors={['#602f9c', 'grey', 'white']}
        style={styles.linearGradient}>
        <ScrollView
          style={{
            height:
              isKeyboardVisible && !issignup.open
                ? screen.height / 1.8
                : issignup.open
                ? screen.height / 1.3
                : screen.height / 1.8,
            width: !issignup.open ? screen.width / 1.2 : screen.width / 1.1,
            borderRadius: 20,
          }}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            height:
              isKeyboardVisible && !issignup.open
                ? screen.height / 2
                : issignup.open
                ? screen.height / 1.3
                : screen.height / 1.8,
            width: !issignup.open ? screen.width / 1.2 : screen.width / 1.1,
            borderRadius: 20,
            top: issignup.open
              ? screen.height / 10
              : !issignup.open && !isKeyboardVisible
              ? screen.height / 5.5
              : screen.height / 32,
          }}>
          <LinearGradient
            colors={['purple', 'grey', 'black']}
            style={{
              height:
                isKeyboardVisible && !issignup.open
                  ? screen.height / 2
                  : issignup.open
                  ? screen.height / 1.3
                  : screen.height / 1.8,
              width: !issignup.open ? screen.width / 1.2 : screen.width / 1.1,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: '90%',
                // backgroundColor: 'white',
                width: '90%',
                borderRadius: 10,
              }}>
              <View
                style={{
                  height: '85%',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    height: '20%',
                    alignItems: 'baseline',
                    bottom: issignup.open ? 30 : 25,
                    width: '93%',
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: screen.width / 8,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    {!issignup.open ? 'L' : 'S'}
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: screen.width / 10,
                        textDecorationLine: 'underline',
                        textDecorationColor: 'white',
                      }}>
                      {!issignup.open ? 'ogin' : 'ignUP'}
                    </Text>
                  </Text>
                  {issignup.open ? (
                    <View style={{alignItems: 'center'}}>
                      <TouchableOpacity
                      onPress={pickImage}
                      onLongPress={()=>{setImage({value:image.value,height:100})}}
                      >
                        <Image
                          source={image.value!==null?image.value:images.add_profile}
                          resizeMode="center"
                          style={{
                            height:screen.width / 8,
                            width:screen.width / 7.5,
                            top: 5,
                            borderRadius: 10,
                          }}
                        />
                      </TouchableOpacity>

                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          top: 6,
                          textDecorationLine: 'underline',
                        }}>
                        Upload Image
                      </Text>
                    </View>
                  ) : null}
                </View>
                <View style={styles.div_3_a_1}>
                  <View
                    style={{height: '50%', width: '93%', alignSelf: 'center'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: screen.width / 23,
                        bottom: 5,
                      }}>
                      {!issignup.open ? 'EmaiL' : 'Name'}
                    </Text>
                    <TextInput
                      placeholder={!issignup.open ? 'EmaiL' : 'Name'}
                      placeholderTextColor={'purple'}
                      style={styles.input}
                      backgroundColor=""
                      right={
                        <TextInput.Icon
                          icon={!issignup.open ? 'email' : 'rename-box'}
                          size={20}
                          color={'purple'}
                        />
                      }
                    />
                  </View>
                  <View
                    style={{height: '50%', width: '93%', alignSelf: 'center'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: screen.width / 23,
                        bottom: 5,
                      }}>
                      {!issignup.open ? 'Password' : 'Email'}
                    </Text>
                    <TextInput
                      right={
                        <TextInput.Icon
                          icon={!issignup.open ? 'eye' : 'email'}
                          size={23}
                          color={'purple'}
                        />
                      }
                      placeholder={!issignup.open ? 'Password' : 'Email'}
                      placeholderTextColor={'purple'}
                      style={styles.input}
                    />
                  </View>
                  {/* Singup_condition */}
                  {issignup.open ? (
                    <>
                      <View
                        style={{
                          height: '50%',
                          width: '93%',
                          alignSelf: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: screen.width / 23,
                            fontWeight: 'bold',
                            color: 'purple',
                            bottom: 5,
                          }}>
                          Password
                        </Text>
                        <TextInput
                          placeholder="password"
                          placeholderTextColor={'purple'}
                          style={styles.input}
                          right={
                            <TextInput.Icon
                              icon="eye"
                              size={20}
                              color={'purple'}
                            />
                          }
                        />
                      </View>
                      <View
                        style={{
                          height: '50%',
                          width: '93%',
                          alignSelf: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: screen.width / 23,
                            fontWeight: 'bold',
                            color: 'purple',
                            bottom: 5,
                          }}>
                          Confirm password
                        </Text>
                        <TextInput
                          right={
                            <TextInput.Icon
                              icon="eye"
                              size={23}
                              color={'purple'}
                            />
                          }
                          placeholder="Password"
                          placeholderTextColor={'purple'}
                          style={styles.input}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          width: '96%',
                          alignSelf: 'center',
                          bottom: 10,
                        }}>
                        <CheckBox />
                        <Text style={{fontWeight: 'bold', color: 'white'}}>
                          I agree with terms & conditions
                        </Text>
                      </View>
                    </>
                  ) : null}
                </View>
              </View>
              <View
                style={{
                  height: '20%',
                  justifyContent: 'space-between',
                  width: '95%',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  alignItems: !issignup ? 'center' : 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (issignup.open) {
                      set_is_signup({open: false});
                    } else {
                      set_is_signup({open: true});
                    }
                  }}
                  style={{
                    height: '40%',
                    width: '30%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LinearGradient
                    colors={['black', 'grey', 'black']}
                    style={{
                      height: '100%',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 7,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 16,
                      }}>
                      {issignup.open ? 'Login' : 'SingUp'}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: '40%',
                    width: '23%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LinearGradient
                    colors={['purple', 'black', 'black']}
                    style={{
                      height: '100%',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 7,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 16,
                      }}>
                      {!issignup.open ? 'Login' : 'SingUp'}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Login;

('');
