import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyClassPage2 from '../Components/MyClassPage2';

const Task23 = () => {
    
    const [parentText, setParentText] = useState('');
    const updateParentText = (textToChange) =>{
        setParentText(textToChange);
    }
  
  return (
    <View style={styles.container}>
        <Text>Text in Task23 file is : {parentText}</Text>
        <MyClassPage2 updateParentText={updateParentText}></MyClassPage2>
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
export default Task23;