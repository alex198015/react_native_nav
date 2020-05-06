import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import { Platform } from 'react-native';
import { THEME } from './../theme';
import { Ionicons } from '@expo/vector-icons'

export const AppHeaderIcon = props => (

    <HeaderButton iconSize={24}
                {...props}
                color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
                IconComponent={Ionicons}
                />
)