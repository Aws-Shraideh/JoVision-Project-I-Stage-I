import React, { useContext, useState } from "react"
import { StyleSheet, TextInput, View,Text } from "react-native"
import MyFunctionalComponent_Task38 from "../Components/MyFunctionalComponent_Task38"
import TextProvider,{TextContext, SetTextContext} from '../Hooks/TextProvider';


const Task38 = () => 
    {
        return(
        <TextProvider>
            <View style={styles.container}>
                <MyFunctionalComponent_Task38></MyFunctionalComponent_Task38>
                <MyFunctionalComponent_Task38></MyFunctionalComponent_Task38>
                <MyFunctionalComponent_Task38></MyFunctionalComponent_Task38>
                <MyFunctionalComponent_Task38></MyFunctionalComponent_Task38>
            </View>
        </TextProvider>
        )
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        text: {
          fontSize: 25,
        },
      });
export default Task38