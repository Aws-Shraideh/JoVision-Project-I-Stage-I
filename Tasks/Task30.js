import React,{useState,useRef} from 'react'
import {View, Button, Alert, StyleSheet, Image, Text, FlatList, Pressable,TextInput, Animated} from 'react-native'


const Task30 = () =>
    {
        const ref = useRef()
        const [num, setNum] = useState(null)
        const [images, setImages] = useState([{image: require('../Resources/image1.jpg'),remove:require('../Resources/Remove.jpeg')}, {image: require('../Resources/image2.jpeg'),remove:require('../Resources/Remove.jpeg')}, {image: require('../Resources/image3.jpg'),remove:require('../Resources/Remove.jpeg')}, 
            {image: require('../Resources/image4.jpeg'),remove:require('../Resources/Remove.jpeg')},{image: require('../Resources/image5.jpeg'),remove:require('../Resources/Remove.jpeg')},{image: require('../Resources/image6.jpeg'),remove:require('../Resources/Remove.jpeg')},{image: require('../Resources/image7.jpg'),remove:require('../Resources/Remove.jpeg')},
            {image: require('../Resources/image8.jpeg'),remove:require('../Resources/Remove.jpeg')}, {image: require('../Resources/image9.jpeg'),remove:require('../Resources/Remove.jpeg')}, {image: require('../Resources/image10.jpeg'),remove:require('../Resources/Remove.jpeg')},
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
            try{
            const intNum = parseInt(num)

            if(intNum >= 0 && intNum < 10)
            {
                ref.current.scrollToIndex({index : intNum}) 
            }
            else
            {
                Alert.alert('Error','Please enter a valid index in the text box')
            }
        }
        catch(error){
            Alert.alert('Error',error)
        }
    }

    const removeItem = (index) =>
        {
            const updatedArray = images.filter((item,i) => i!==index);
            setImages(updatedArray);
        }


   

        


        return(
            <View style={styles.container}>
                <FlatList horizontal={true} data={images} ref={ref} renderItem={ ({item,index})  => (
                    <>
                <Pressable onPress={()=>{displayIndex(index)} }>
                    <Image style={styles.image} source={item.image} key={item.index}/> 
                </Pressable>
                <Pressable onPress={()=>{removeItem(index)} }>
                    <Image style={styles.remove} source ={item.remove} />
                </Pressable>
                </>
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
            image:
            {
                width: 200,
                height: 150,
            },
            remove:
            {
                width:15,
                height:15,
                position: 'absolute',
                top: 10,
                right: 10 
            },
            add:
            {
                width:15,
                height:15,
                position: 'absolute',
                top: 5,
                left: 5 
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
export default Task30;