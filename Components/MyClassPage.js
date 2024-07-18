import React from "react"
import { StyleSheet, Text, View } from "react-native"

class MyClassPage extends React.Component
{
    render() {
        const text = ('Text in the MyClassPage component')
        return(
            <View style={StyleSheet.container}>
                <Text style={StyleSheet.demoText}>{text}</Text>
            </View>
        )

    }
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
export default MyClassPage