import React, { useState,useContext } from "react"
import { StyleSheet, TextInput, View,Text } from "react-native"
import TextProvider,{TextContext, SetTextContext} from '../Hooks/TextProvider';


class MyClassComponent_Task38 extends React.Component 
{
    static contextType = TextContext;

    constructor(props) {
        super(props);
        this.state = {
            text: this.context
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.context !== prevState.text) {
            this.setState({ text: this.context });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
}})

export default MyClassComponent_Task38