import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyClassPage from '../Components/MyClassPage';
import MyFunctionPage from '../Components/MyFunctionPage';

const Task21 = () => {
  const [showName, setShowName] = useState(false);
  const [titleName, setTitleName] = useState("Show");

  const onButtonPress= () => 
    {
    setShowName((prevShowName) => !prevShowName);
    if(titleName === "Show")
    {
        setTitleName("Hide")
        console.log('MyFunctionPage Loaded')
    }
    else
    { 
        setTitleName("Show")
        console.log('MyFunctionPage Unloaded')
    }

  };

  return (
    <View style={styles.container}>
      <Button title={titleName} onPress={onButtonPress} />
      {showName ? <MyFunctionPage></MyFunctionPage> : null}
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
export default Task21;