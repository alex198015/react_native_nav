import React, { useLayoutEffect, useState , useRef} from 'react'
import { View, Text, StyleSheet, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback , Keyboard} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from '@react-navigation/native';
import { AppHeaderIcon } from './../components/AppHeaderIcon';
import { THEME } from './../theme';
import {useDispatch} from 'react-redux'
import { addPost } from '../store/actions/post';
import {  PhotoPickers } from './../components/PhotoPicker';


export const CreateScreen = ({ navigation }) => {

const dispatch = useDispatch()
const [text, setText] = useState('')
const imgRef = useRef()

    const saveHandler = () => {

        const post = {
            date: new Date().toJSON(),
            text: text,
            img: imgRef.current,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Создать пост',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
                </HeaderButtons>
            )
        })
    }, [navigation])

    const photoPickHandler = uri => {
        imgRef.current = uri
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Создай новый пост</Text>
                    <TextInput style={styles.textarea} placeholder="Введите текст поста"
                        value={text} onChangeText={setText} multiline />
                    <PhotoPickers onPick={photoPickHandler} />
                    <Button disabled={!text} title='Создать пост' color={THEME.MAIN_COLOR} onPress={saveHandler} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Open-Regular',
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        marginBottom: 10
    }
})