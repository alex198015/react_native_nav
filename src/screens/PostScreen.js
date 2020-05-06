import React from 'react'
import { View, Text, StyleSheet, Image, Button , ScrollView, Alert} from 'react-native'
import { DATA } from './../data';
import { THEME } from './../theme';



export const PostScreen = ({route, navigation}) => {


const postId = route.params.postId

const post = DATA.find(p => p.id === postId)
const postData = route.params.date

    navigation.setOptions({
        title:'Пост от ' + new Date(postData).toLocaleDateString()
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


