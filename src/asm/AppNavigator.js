import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './Signup';
import Login from './Login';
import { AppContext } from './AppContext';
import Home from './Home';
import Explore from './Explore';
import Profile from './Profile';
import Bookmark from './Bookmark';
import ListView from './Listview';
import Newdetail from './Newdetail';
import Fillprofile from './Fillprofile';
import Postnews from './Postnews';

// login,signup
const Stack = createNativeStackNavigator();
const User = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  )
}

const News = () => {
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Bookmark' component={Bookmark} />
      <Stack.Screen name='Newdetail' component={Newdetail} />
      <Stack.Screen name='Main' component={Main}/>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Fillprofile' component={Fillprofile} />
      <Stack.Screen name='Postnews' component={Postnews} />
    </Stack.Navigator>
  )
}


// home,ex,book,pro
const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle:{paddingBottom:15,paddingTop:15,height:78} }}>
      <Tab.Screen name="Home" component={Home}  options={{
        title: "Home",
        tabBarIcon: ({ focused }) => {
          const icon = focused ? require('../asm/img/iconhome0.png') : require('../asm/img/iconhome1.png');
          return (
            <Image source={icon} />
          );
        }
      }} />
      <Tab.Screen name="Explore" component={Explore}
        options={{
          tabBarIcon: ({ focused }) => {
            const icon = focused ? require('../asm/img/iconEx0.png') : require('../asm/img/iconEx1.png');
            return (
              <Image source={icon} />
            );
          }
        }} />
      <Tab.Screen name="Bookmark" component={Bookmark} options={{
        tabBarIcon: ({ focused }) => {
          const icon = focused ? require('../asm/img/iconBook1.png') : require('../asm/img/iconBook0.png');
          return (
            <Image source={icon} />
          );
        }
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => {
          const icon = focused ? require('../asm/img/iconPro1.png') : require('../asm/img/iconPro0.png');
          return (
            <Image source={icon} />
          );
        }
      }} />
    </Tab.Navigator>
  )

}
const AppNavigator = () => {
  const { isLogin } = useContext(AppContext);
  return (
    <>
      {
        isLogin == false ? <User /> : <News />
      }
    </>
  )
}

export default AppNavigator

const styles = StyleSheet.create({
})