import React,{useLayoutEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AppHeaderIcon } from './../components/AppHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from '@react-navigation/native';

export const AboutScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'О приложении',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>          
                </HeaderButtons>
            )
        })
    },[navigation])

    return <View style={styles.center}>
        <Text >Это лучшее приложение для личных заметок.</Text>
        <Text>Версия приложения <Text style={styles.version}>1.0.0</Text></Text>
    </View>
}


const styles = StyleSheet.create({
    center:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    version:{
        fontWeight: '700'
    }
})