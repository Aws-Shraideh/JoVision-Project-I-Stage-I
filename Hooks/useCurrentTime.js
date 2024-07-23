import React,{useState,useRef} from 'react'
import {View, Button, Alert, StyleSheet, Image, Text, FlatList, Pressable,TextInput, Animated} from 'react-native'

const useCurrentTime = () =>
    {
        const seconds = new Date().getSeconds()
        const minutes = new Date().getMinutes()
        const hours = new Date().getHours()
        const day = new Date().getDate()
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()

        const fullDate = day + '/' + month + '/' + year +',  '+ hours + ' : ' + minutes +' : ' + seconds
        return(fullDate)  

    }

export default useCurrentTime