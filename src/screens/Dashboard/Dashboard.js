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
 
 const Dashboard = () => {
  
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
    
   });
   return (
     <View style={{backgroundColor: 'white', flex: 1}}>
       <StatusBar />
       <LinearGradient
         colors={['#602f9c', 'grey', 'white']}
         style={styles.linearGradient}>
       </LinearGradient>
     </View>
   );
 };
 
 export default Dashboard;
 
 ('');
 