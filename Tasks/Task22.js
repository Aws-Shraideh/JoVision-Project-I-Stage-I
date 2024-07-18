import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyClassPage from '../Components/MyClassPage';
import MyFunctionPage2 from '../Components/MyFunctionPage2';

const Task22 = () => {
    
    const [parentText, setParentText] = useState('');
    const updateParentText = (textToChange) =>{
        setParentText(textToChange);
    }
  
  return (
    <View style={styles.container}>
        <Text>Text in Task22 file is : {parentText}</Text>
        <MyFunctionPage2 updateParentText={updateParentText}></MyFunctionPage2>
    </View>
  );
};

const styles = StyleSheet.create
(
    {
        container: 
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
)
export default Task22;