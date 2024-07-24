import React, { Component,useState } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import { Provider, useDispatch,useSelector } from 'react-redux'
import { ADD } from '../store/actions/actions';
import store from '../store/store';

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
