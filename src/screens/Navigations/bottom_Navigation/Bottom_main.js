import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ludo_UI from '../../Dashboard/Mywork/Ludo/Ludo_UI'
import Login from '../../Login_signup/Login'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../../Dashboard/Dashboard'
import screen from '../../../constants/constants'



const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Home_bottom() {
  return (
    <Tab.Navigator
   screenOptions={
    {
      tabBarActiveTintColor: "white",
      tabBarShowLabel:false,
      tabBarHideOnKeyboard:true,
    }
   }
   >
         <Tab.Screen
        name="Home"
        
        component={Drawer_Stack_navigator}
        options={{
          title:'Home',
                  headerTintColor:"black",
                  tabBarStyle:{height:screen.height/14.3,backgroundColor:"#841592",},
          tabBarItemStyle:{
                  height:screen.width/7,
                  backgroundColor:"#841592"
                  
          },
          
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
           
            return  <Iconm name={color=="white"?'dice-multiple':'dice-multiple-outline'} size={color=="white"?screen.width/6.8:screen.width/13} color={"white"} />;
          },
        }}
      />
       <Tab.Screen
        name="Home2"
        
        component={Drawer_Stack_navigator}
        options={{
          title:'Home',
                  headerTintColor:"black",
                  tabBarStyle:{height:screen.height/13.3,backgroundColor:"#841592",},
          tabBarItemStyle:{
                  height:screen.width/7,
                  backgroundColor: "#841592",
                  justifyContent:"center"
                  
          },
          
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
           
            return  <Iconm name={color=="white"?'ethereum':'ethereum'} size={color=="white"?screen.width/6.8:screen.width/13} color={"white"} />;
          },
        }}
      />
        <Tab.Screen
        name="Home_2"
        
        component={Drawer_Stack_navigator}
        options={{
          title:'Home',
                  headerTintColor:"black",
                  tabBarStyle:{height:screen.height/14.3,backgroundColor:"#841592",},
          tabBarItemStyle:{
                  height:screen.width/7,
                  backgroundColor:"#841592"
                  
          },
          
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
           
            return  <Iconm name={color=="white"?'face-man-outline':'face-man'} size={color=="white"?screen.width/6.8:screen.width/13} color={"white"} />;
          },
        }}
      />
    </Tab.Navigator>
  )
}
const Drawer=createDrawerNavigator()

const Drawer_Stack_navigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="ludo" component={Ludo_UI} />
    </Drawer.Navigator>
  );
}
const Login_Stack_navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="drawer" component={Ludo_UI} />
      <Stack.Screen name="About" component={Login} />
    </Stack.Navigator>
  );
}
export default Home_bottom
