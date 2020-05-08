import React,{useLayoutEffect} from 'react'
import { DATA } from './../data';
import { AppHeaderIcon } from './../components/AppHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { PostList } from './../components/PostList';
import { DrawerActions } from '@react-navigation/native'
import { View } from 'react-native';

export const BookedScreen = ({navigation}) => {
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>          
                </HeaderButtons>

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Избранное',
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

const data = DATA.filter(post => post.booked)

return (
    <View>
    <PostList data={data} onOpen={openPostHandler}/>
</View>
)
}
