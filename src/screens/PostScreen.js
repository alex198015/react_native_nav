import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Image, Button , ScrollView, Alert} from 'react-native'
import { DATA } from './../data';
import { THEME } from './../theme';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from './../components/AppHeaderIcon';



export const PostScreen = ({route, navigation}) => {


const postId = route.params.postId

const post = DATA.find(p => p.id === postId)
const postData = route.params.date

useEffect(() => {
    navigation.setParams({booked:post.booked})
},[])

const booked = route.params.booked

const iconName = booked ? 'ios-star' : 'ios-star-outline'


    navigation.setOptions({
        title:'Пост от ' + new Date(postData).toLocaleDateString(),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take photo" iconName={iconName} onPress={() => console.log('Press star')}/>          
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
              { text: "Удалить",style:'destructive', onPress: () => {} }
            ],
            { cancelable: false }
          );
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


