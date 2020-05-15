import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MainScreen } from './../screens/MainScreen';
import { PostScreen } from './../screens/PostScreen';
import { THEME } from './../theme';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { BookedScreen } from './../screens/BookedScreen';
import { CreateScreen } from './../screens/CreateScreen';
import { AboutScreen } from './../screens/AboutScreen';

const navigatorOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
}

const Stack = createStackNavigator()
const About = createStackNavigator()
const Create = createStackNavigator()
const Booked = createStackNavigator()

function BookedStack() {
  return (
    <Booked.Navigator
      screenOptions={{ ...navigatorOptions }}
    // screenOptions={{ gestureEnabled: false }}
    >
      <Booked.Screen
        name="Booked"
        component={BookedScreen}
        options={{ title: 'About me' }}
      />
      <Booked.Screen
        name="Post"
        component={PostScreen}
        options={{
          title: "Пост от " + new Date().toLocaleDateString(),
          headerStyle: {
            backgroundColor: 'red'
          },
          headerTintColor: '#fff'
        }}
        initialParams={{ user: 'post' }}
      />
    </Booked.Navigator>
  )
}

function AboutStack() {
  return (
    <About.Navigator
      screenOptions={{ ...navigatorOptions }}
    // screenOptions={{ gestureEnabled: false }}
    >
      <About.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About me' }}
      />
    </About.Navigator>
  )
}

function CreateStack() {
  return (
    <Create.Navigator
      screenOptions={{ ...navigatorOptions }}
    // screenOptions={{ gestureEnabled: false }}
    >
      <Create.Screen
        name="Create"
        component={CreateScreen}
        options={{ title: 'About me' }}
      />
    </Create.Navigator>
  )
}


function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ ...navigatorOptions }}
    // screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'Мой блок!' }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          title: "Пост от " + new Date().toLocaleDateString(),
          headerStyle: {
            backgroundColor: 'red'
          },
          headerTintColor: '#fff'
        }}
        initialParams={{ user: 'post' }}
      />

    </Stack.Navigator>
  );
}


const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()

function MyTabs() {

  return (
    <Tab.Navigator
      initialRouteName="Post"
      shifting={true}
      tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR,
      }}
    >
      <Tab.Screen
        name="Booked"
        component={BookedStack}
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: () => (
            <Ionicons name="ios-star" size={25} color={'red'} />
          )
        }}
      />

      <Tab.Screen
        name="Post"
        component={RootStack}
        options={{
          tabBarLabel: 'Все',
          tabBarIcon: () => (
            <Ionicons name="ios-albums" size={25} color={'green'} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator()

function CreateDrawer() {

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContentOptions={{
        activeTintColor:THEME.MAIN_COLOR,
        labelStyle: {
          fontFamily:'Open-Bold'
        }
      }}>
        <Drawer.Screen name="Главная" component={MyTabs} options={{
          drawerIcon: () => (
            <Ionicons name="ios-star" size={20} color={'blue'} />
          )
        }}/>
        <Drawer.Screen name="О приложении" component={AboutStack} options={{
          drawerIcon: () => (
            <Ionicons name="ios-pulse" size={20} color={'green'} />
          )
        }}/>
        <Drawer.Screen name="Новый пост" component={CreateStack} options={{
          drawerIcon: () => (
            <Ionicons name="ios-leaf" size={20} color={'#00FF00'} />
          )
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export function AppNavigation() {

  return <CreateDrawer />
}
