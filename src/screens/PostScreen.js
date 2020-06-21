import React,{useEffect, useCallback} from 'react'
import { View, Text, StyleSheet, Image, Button , ScrollView, Alert} from 'react-native'
import { THEME } from './../theme';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from './../components/AppHeaderIcon';
import {useDispatch, useSelector} from 'react-redux'
import { toggleBooked, removePost } from '../store/actions/post';



export const PostScreen = ({route, navigation}) => {


const dispatch = useDispatch()
const postId = route.params.postId

const post = useSelector(state => state.post.allPosts.find(post => post.id === postId))
const postData = route.params.date
const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId))

useEffect(() => {
    navigation.setParams({booked})
},[booked])

const toggleHandler = useCallback(() => {
    
    dispatch(toggleBooked(post))
},[dispatch, post])

useEffect(() => {
    navigation.setParams({toggleHandler})
},[toggleHandler])

// const booked = route.params.booked

const iconName = booked ? 'ios-star' : 'ios-star-outline'


    navigation.setOptions({
        title:'Пост от ' + new Date(postData).toLocaleDateString(),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take photo" iconName={iconName} onPress={toggleHandler}/>          
            </HeaderButtons>
        )
    })
    
    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы точно хотите удалить пост?",
            [
              {
                text: "Отменить",
                style: "cancel"
              },
              { text: "Удалить",style:'destructive', onPress(){
                 navigation.navigate('Main') 
                 dispatch(removePost(postId)) 
                }}
            ],
            { cancelable: false }
          );
    }

    if(!post){
        return null
    }

    return <ScrollView >
        <Image source={{uri:post.img }} style={styles.img}/>
        <View style={styles.textWrap}>
           <Text style={styles.title}>{post.text}</Text>
        </View>
        <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={removeHandler}/>
    </ScrollView>
}




const styles = StyleSheet.create({
    img:{
        width: '100%',
        height: 200
    },
    title:{
        textAlign: 'center',
        fontFamily: 'Open-Regular'
    },
    textWrap:{
        padding: 10
    }
})


