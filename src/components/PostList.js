import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import { Post } from './Post';


export const PostList = ({data, onOpen}) => {
    return <View style={styles.wrapper}>
    <FlatList 
        keyExtractor={post => post.id.toString()}
        data={data}
        renderItem={({item}) => <Post post={item} onOpen={onOpen}/>}

    />
</View>

}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})