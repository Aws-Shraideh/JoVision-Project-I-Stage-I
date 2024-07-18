import React, { useState } from "react"
import { StyleSheet, TextInput, View,Text } from "react-native"

class MyClassPage3 extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
          };
      }
      updateText = (text) => {
        this.state.text = (text)
      }
    render() {

        return(
            <View style = {StyleSheet.container}>
                <Text>Text in the MyClassPage component is: {this.state.text} </Text>
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
        }, 
        input:
        {
            width :220,
            borderWidth: 1
        }

    }
)
export default MyClassPage3