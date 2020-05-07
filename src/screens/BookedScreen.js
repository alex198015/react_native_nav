import React,{useLayoutEffect} from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { DATA } from './../data';
import { Post } from './../components/Post';
import {AppHeaderIcon} from './../components/AppHeaderIcon'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'



export const BookedScreen = ({navigation}) => {

    useLayoutEffect(() => {
    navigation.setOptions({
        title: 'Избранное',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => console.log('Press menu')}/>          
            </HeaderButtons>
        )
    })
},[navigation,console.log])


const openPostHandler = (post) => {

    navigation.navigate('Post', {postId: post.id, date:post.date, booked: post.booked})

}

return <View style={styles.wrapper}>
        <FlatList 
            keyExtractor={post => post.id.toString()}
            data={DATA.filter(post => post.booked)}
            renderItem={({item}) => <Post post={item} onOpen={openPostHandler}/>}

        />
</View>

}


const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})