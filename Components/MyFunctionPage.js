import {useState} from "react"
import { StyleSheet, Text, View } from "react-native"

const MyFunctionPage = () =>
    {
        const text = ('Text in the MyFunctionPage')
        return(
            <View style={styles.container}>
                <Text style={styles.demoText}>{text}</Text>
            </View>
        )

    }
const styles = StyleSheet.create
(
    {
        container: 
        {
            flex: 1,
        },
        demoText:
        {
            fontSize: 15
        }
    }
)
export default MyFunctionPage