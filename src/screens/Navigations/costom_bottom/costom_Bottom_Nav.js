import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Ludo from '../../Dashboard/my_works/Ludo'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator()
function Tab_bar() {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={Ludo}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'map-outline'} size={25} color={"red"} />
          }
        }}
      />
      {/* <Tab.Screen
        name="Login"
        
        component={Login_Stack_navigator}
        options={{
          tabBarHideOnKeyboard:true,
          title:"Login",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'log-in-outline'} size={30} color={color} />
          }
        }}
      /> */}
    </Tab.Navigator>
  )
}

