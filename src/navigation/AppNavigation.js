import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from './../screens/MainScreen';
import { PostScreen } from './../screens/PostScreen';

const Stack = createStackNavigator()

export function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
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
                    options={{title: 'Пост номер 42'}}
                    initialParams={{ user: 'post' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


