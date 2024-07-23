import React,{useState, useCallback} from 'react'
import {StyleSheet, Text, SafeAreaView, ScrollView,RefreshControl} from 'react-native'

const Task37 = () =>
    {
        const [refreshing, setRefreshing] = useState(false);
        const onRefresh = React.useCallback(() => 
            {
                setRefreshing(true);
                setTimeout(() => 
                    {
                        setRefreshing(false);
                    }, 2000);
            }, []);
        
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
                <ScrollView style = {styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
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

export default Task37