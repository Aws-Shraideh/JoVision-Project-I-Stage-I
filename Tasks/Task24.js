import React, { useState,useRef } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import MyClassPage from '../Components/MyClassPage';
import MyFunctionPage3 from '../Components/MyFunctionPage3';

const Task24 = () => {

  const [inputValue, setInputValue] = useState('');
  const ref = useRef();
  
  const handleInputChange = (text) => {
    setInputValue(text);
    ref.current.updateText(text);
  };
  
  return (
    <View style={styles.container}>
      <MyFunctionPage3 ref={ref} style = {styles.input}/>
      <TextInput style = {styles.input} value={inputValue} onChangeText={handleInputChange}/>
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
        input:
        {
            width :220,
            borderWidth: 1,
        }
    }
)
export default Task24;