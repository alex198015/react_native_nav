import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Post } from './Post';


export const PostList = ({data = [], onOpen}) => {

    if(!data.length){
        return<View style={styles.wrapper}>
            <Text style={styles.noItems}>Постов пока нет</Text>
        </View>
    }

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
    },
    noItems:{
        fontSize:'Open-Regular',
        textAlign:'center',
        marginVertical:10,
        fontSize:18
    }
})