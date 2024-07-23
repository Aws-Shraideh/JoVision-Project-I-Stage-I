import React,{useState,useRef} from 'react'
import {View, Button, Alert, StyleSheet, Image, Text, FlatList, Pressable,TextInput, Animated} from 'react-native'
import useCurrentTime from '../Hooks/useCurrentTime'

const Task34 = () => 
{
    const [date,setDate] = useState('')
    const [show,setShow] = useState(false)
    const [title,setTitle] = useState('Show date')
    let tempDate = ''
    const displayTime = () =>
        {   
            if(show === false)
            {
                setShow(true)
                tempDate = useCurrentTime()
                setDate(tempDate)
                setTitle('Hide Date')
            }
            else
            {
                setShow(false)
                tempDate =''
                setDate(tempDate)
                setTitle('Show Date')
            }
            
        }
    return(
     <View style = {styles.view}>
        <Button title={title} onPress={displayTime}></Button>
        <Text style = {styles.text}>{date}</Text>
    </View>
    )
}

var styles = StyleSheet.create(
    {
    view:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex : 1,
    },
    text:
    {
        fontSize : 24,
    }
    

});

export default Task34