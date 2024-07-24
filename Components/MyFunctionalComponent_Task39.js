import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import {  useDispatch,useSelector } from 'react-redux'
import { ADD } from '../store/actions/actions';

const MyFunctionalComponenet_Task39 =() =>
    {
        const text = useSelector((state) => state.text);
        const dispatch = useDispatch();
        return(
                <TextInput style={styles.input} value ={text} onChangeText={(value)=> dispatch(ADD(value))}></TextInput>
        )
    }
    styles = StyleSheet.create({
    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})


export default MyFunctionalComponenet_Task39; 
