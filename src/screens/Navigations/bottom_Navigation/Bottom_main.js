import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
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
      tabBarActiveTintColor: "red",
      tabBarShowLabel:false,
      tabBarHideOnKeyboard:true,
    }
   }
   >
      <Tab.Screen
        name="Map"
        component={Drawer_Stack_navigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'map-outline'} size={25} color={"red"} />
          }
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login_Stack_navigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'log-in-outline'} size={25} color={color} />
          }
        }}
      />
        <Tab.Screen
        name="Home_2"
        
        component={Drawer_Stack_navigator}
        options={{
          title:'Home',
                  headerTintColor:"black",
                  tabBarStyle:{height:screen.height/14.3,backgroundColor:"#1884C8",},
          tabBarItemStyle:{
                  height:screen.width/7,
                  backgroundColor:"#1884C8"
                  
          },
          
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
           
            return  <Icon name={color=="red"?'home-circle-outline':'home'} size={color=="red"?screen.width/6.8:screen.width/13} color={"white"} />;
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
