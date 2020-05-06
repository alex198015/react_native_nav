import * as Font from 'expo-font'


export async function bootstrap(){
    await Font.loadAsync({
        'Open-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'Open-Regular': require('../assets/fonts/OpenSans-Regular.ttf')
    })
}