import React,{useState,useRef} from 'react'
import {View, Button, Alert, StyleSheet, Image, Text, FlatList, Pressable,TextInput, Animated} from 'react-native'

const Task29 = () =>
    {
        const ref = useRef()
        const [num, setNum] = useState(null)
        const [images, setimages] = useState([require('../Resources/image1.jpg'), require('../Resources/image2.jpeg'), require('../Resources/image3.jpg'), 
            require('../Resources/image4.jpeg'),require('../Resources/image5.jpeg'),require('../Resources/image6.jpeg'), require('../Resources/image7.jpg'),
            require('../Resources/image8.jpeg'), require('../Resources/image9.jpeg'), require('../Resources/image10.jpeg')
        ])

        function displayIndex(key)
        {
         Alert.alert('You have selected image :', String(key))
        }

        
        function alertButton()
        {
            Alert.alert('Hint', 'Choose an index between 0 and 9 to scroll to that index in the input',[{
                text:'Confirm',
                onPress: () => inputTest(),
                style:'default'
            }]

        )}
        function inputTest()
        {
            const intNum = parseInt(num)
            if(intNum >= 0 && intNum < 10)
            {
                ref.current.scrollToIndex({index : intNum}) 
            }
            else
            {
                Alert.alert('Error','Please enter the index in the text box')
            }
        }
   

        


        return(
            <View style={styles.container}>
                <FlatList horizontal={true} data={images} ref={ref} renderItem={ ({item,index}) => (
                    <Pressable onPress={()=>{displayIndex(index)} }>
                    <Image style={styles.tinyLogo} source={item} key={index}/> 
                </Pressable>
                )}
                />
                <TextInput style={styles.input} onChangeText={(value) => setNum(value)} placeholder='Enter the index here'></TextInput>
                <Button title='Scroll To Index' onPress={alertButton}></Button>
            </View>
        )
    
    }


const styles = StyleSheet.create
    (
        {
            tinyLogo:
            {
                width: 200,
                height: 150,
            },
            container: 
            {
                flex: 0.5,
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
export default Task29;