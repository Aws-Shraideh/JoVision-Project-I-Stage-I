import React,{useState} from 'react'
import {View, Button, Alert, StyleSheet, Image, Text} from 'react-native'

const Task27 = () =>
{
    const [imageSource, setImageSource] = useState(null);
    const image1 = require('../Resources/image1.jpg')
    const image2 = require('../Resources/image2.jpeg')
    const image3 = require('../Resources/image3.jpg')

    const showAlert = () =>
        Alert.alert('Alert','Please choose an image to display',
        [
            {
                text: 'Image 1',
                onPress: () => setImageSource(image1),
                style: 'default',

            },

            {
                text: 'image 2',
                onPress: () => setImageSource(image2)
            },

            {
                text: 'image 3',
                onPress: () => setImageSource(image3),
                style: 'default'
            }
        ]);

    
    {
        return(
            <View style={styles.container}>
                <Button onPress={showAlert} title = 'Button'></Button>
                {imageSource ? (<Image style={styles.tinyLogo} source={imageSource} />) :(<Text>Please choose an image</Text>)}
            </View>
        )
    }
}
const styles = StyleSheet.create
(
    {
        tinyLogo:
        {
            width: 250,
            height: 200,
        },
        container: 
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        input:
        {
            width :220,
            borderWidth: 1,
        }
    }
)
export default Task27;