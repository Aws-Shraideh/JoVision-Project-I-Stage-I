import React, { useState } from "react"
import { StyleSheet, TextInput, View,Text } from "react-native"

class MyClassPage2 extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
          };
      }
    render() {
        this.props.updateParentText(this.state.text)

        return(
            <View style = {StyleSheet.container}>
                <Text>Please Enter The Text Bellow: </Text>
                <TextInput style={styles.input} value={this.state.text} onChangeText={(text) => this.setState({ text })} />
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
export default MyClassPage2