import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainScreen } from './../screens/MainScreen';
import { PostScreen } from './../screens/PostScreen';
import { THEME } from './../theme';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { BookedScreen } from './../screens/BookedScreen';


const Stack = createStackNavigator()

function RootStack (){
    return (
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{
                    headerStyle:{
                        backgroundColor: Platform.OS === 'android'? THEME.MAIN_COLOR : '#fff'
                    },
                    headerTintColor: Platform.OS === 'android'? '#fff': THEME.MAIN_COLOR
                }}
            // screenOptions={{ gestureEnabled: false }}
            >
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{title: 'Мой блок'}}
                />
                <Stack.Screen
                    name="Post"
                    component={PostScreen}
                    options={{title: "Пост от " + new Date().toLocaleDateString(),
                                headerStyle:{
                                    backgroundColor: 'red'
                                },
                                headerTintColor: '#fff'}}
                    initialParams={{ user: 'post' }}
                />

            </Stack.Navigator>
    );
}


const Tab = createBottomTabNavigator()

function MyTabs() {
    
  return (
    <NavigationContainer>
    <Tab.Navigator
        initialRouteName="Booked"
        tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR
      }}
    >
      <Tab.Screen 
            name="Booked" 
            component={BookedScreen}
            options={{
                tabBarLabel: 'Booked',
                tabBarIcon: () => (
                  <Ionicons name="ios-star" size={25} color={'red'}/>
                )
            }}
            />
      <Tab.Screen 
            name="Post" 
            component={RootStack} 
            options={{
                tabBarLabel: 'Post',
                tabBarIcon: () => (
                  <Ionicons name="ios-albums" size={25} color={'green'}/>
                )
            }}
            />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export function AppNavigation(){ 
    
   return <MyTabs/>
}

