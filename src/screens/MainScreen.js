import React,{useLayoutEffect, useEffect} from 'react'
import {AppHeaderIcon} from './../components/AppHeaderIcon'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { PostList } from './../components/PostList';
import { DrawerActions } from '@react-navigation/native'
import {useDispatch, useSelector} from 'react-redux'
import { loadPosts } from './../store/actions/post';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

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

const dispatch = useDispatch()

useEffect(() => {
    dispatch(loadPosts())
},[dispatch])

const openPostHandler = (post) => {

    navigation.navigate('Post', {postId: post.id, date:post.date, booked: post.booked})

}

const allPosts = useSelector(state => state.post.allPosts)
const loading = useSelector(state => state.post.loading)

if(loading){
    return <View style={styles.center}>
        <ActivityIndicator size="large" color="blue"/>
    </View>
}

return <PostList data={allPosts} onOpen={openPostHandler}/>

}

const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})