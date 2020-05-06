import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from './../screens/MainScreen';
import { PostScreen } from './../screens/PostScreen';
import { THEME } from './../theme';
import { Platform } from 'react-native';

const Stack = createStackNavigator()

export function RootStack() {
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    );
}


