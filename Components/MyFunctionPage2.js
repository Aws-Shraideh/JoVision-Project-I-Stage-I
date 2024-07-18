import {useState} from "react"
import { StyleSheet, Text, View,TextInput } from "react-native"


const MyFunctionPage2 = ({updateParentText}) =>
    {
        const [message, setMessage] = useState("");
        updateParentText(message)

        return(
            <View style={StyleSheet.container}>
                <Text>Please Enter The Text Bellow:</Text>
                <TextInput style={styles.input} value={message} onChangeText={(text) => setMessage(text)}/>
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
        },
        input:
        {
            width :220,
            borderWidth: 1,
        }

    }
)
export default MyFunctionPage2