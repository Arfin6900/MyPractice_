/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import screen from './src/constants/constants';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
  import {Appbar,  TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Login from './src/screens/Login_signup/Login';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// import { StyleSheet, Text, View } from 'react-native'

const App = () => {
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
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
    <Login />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
  },
  div_2: {
    height: screen.height / 1.8,
    width: screen.width / 1.2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  div_3: {
    height: '90%',
    // backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
  },
  div_3_a: {
    height: '80%',
    justifyContent: 'flex-end',
  },
  div_3_a_1: {
    height: '60%',
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
    height: '40%',
    borderRadius: 10,
    width: '100%',
    backgroundColor: 'white',
  },
});
('');
