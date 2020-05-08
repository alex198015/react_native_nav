import React,{useLayoutEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from '@react-navigation/native';
import { AppHeaderIcon } from './../components/AppHeaderIcon';

export const CreateScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Создать пост',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>          
                </HeaderButtons>
            )
        })
    },[navigation])

    return <View style={styles.center}>
        <Text>CreateScreen</Text>
    </View>
}


const styles = StyleSheet.create({
    center:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})