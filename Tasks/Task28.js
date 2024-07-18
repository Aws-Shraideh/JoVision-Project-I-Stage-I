import React,{useState} from 'react'
import {View, Button, Alert, StyleSheet, Image, Text, FlatList,Pressable} from 'react-native'

const Task28 = () =>
    {
        const [images, setimages] = useState([require('../Resources/image1.jpg'), require('../Resources/image2.jpeg'), require('../Resources/image3.jpg'), 
            require('../Resources/image4.jpeg'),require('../Resources/image5.jpeg'),require('../Resources/image6.jpeg'), require('../Resources/image7.jpg'),
            require('../Resources/image8.jpeg'), require('../Resources/image9.jpeg'), require('../Resources/image10.jpeg')
        ])

        function displayIndex(key)
        {
         Alert.alert('You have selected image :', String(key))
        }


        return(
            <View style={styles.container}>
                <FlatList horizontal={true} data={images} renderItem={ ({item,index}) => (
                    <Pressable onPress={()=>{displayIndex(index)} }>
                    <Image style={styles.image} source={item} key={index}/> 
                </Pressable>
                )}
                />
            </View>
        )
    
    }


const styles = StyleSheet.create
    (
        {
            image:
            {
                width: 300,
                height: 250,
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
export default Task28;