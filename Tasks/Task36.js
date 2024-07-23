import React from 'react'
import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native'

const Task36 = () =>
    {
        function generateRandomWord(length) 
        {
            let result = '';
            const characters = 'abcdefghijklmnopqrstuvwxyz';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }
        let text = ''
        return(
            <SafeAreaView style = {styles.container}>
                <ScrollView style = {styles.scrollView}>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                    <Text>{text=generateRandomWord(7)}</Text>
                </ScrollView>
            </SafeAreaView>
              )

    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        scrollView: {
          marginHorizontal: 20,
        },
        text: {
          fontSize: 25,
        },
      });

export default Task36