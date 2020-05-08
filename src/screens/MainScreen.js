import React,{useLayoutEffect} from 'react'
import { DATA } from './../data';
import {AppHeaderIcon} from './../components/AppHeaderIcon'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { PostList } from './../components/PostList';
import { DrawerActions } from '@react-navigation/native'


export const MainScreen = ({navigation}) => {
    

useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take photo" iconName="ios-camera" onPress={() => navigation.navigate('Create')}/>          
            </HeaderButtons>
        ),
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>          
            </HeaderButtons>
        )
    })
},[navigation])


const openPostHandler = (post) => {

    navigation.navigate('Post', {postId: post.id, date:post.date, booked: post.booked})

}

return <PostList data={DATA} onOpen={openPostHandler}/>

}

