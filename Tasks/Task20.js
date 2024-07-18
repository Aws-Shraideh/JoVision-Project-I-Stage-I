import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyClassPage from '../Components/MyClassPage';

const Task20 = () => {
  const [showName, setShowName] = useState(false);
  const [titleName, setTitleName] = useState("Show");

  const onButtonPress= () => 
    {
    setShowName((prevShowName) => !prevShowName);
    if(titleName === "Show")
    {
        setTitleName("Hide")
        console.log('MyClassPage Loaded')
    }
    else
    { 
        setTitleName("Show")
        console.log('MyClassPage Unloaded')
    }

  };

  return (
    <View style={styles.container}>
      <Button title={titleName} onPress={onButtonPress} />
      {showName ? <MyClassPage></MyClassPage> : null}
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
export default Task20;