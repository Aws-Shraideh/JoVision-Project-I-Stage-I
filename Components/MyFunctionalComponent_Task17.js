import {useState} from "react"
import { StyleSheet, Text, View } from "react-native"

const MyFunctionalComponenet_Task17 = () =>
    {
        const {text, setText} = useState('Text for Task#17')
        return
        (
            <View style={StyleSheet.container}>
                <Text style={StyleSheet.demoText}>{text}</Text>
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
export default MyFunctionalComponenet_Task17