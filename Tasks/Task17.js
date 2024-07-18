import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyFunctionalComponenet_Task17 from '../Components/MyFunctionalComponent_Task17';

const Task17 = () => {
  const [showName, setShowName] = useState(false);
  const [titleName, setTitleName] = useState("Show");

  const onButtonPress= () => 
    {
    setShowName((prevShowName) => !prevShowName);
    if(titleName === "Show")
    {
        setTitleName("Hide")
    }
    else
    {
        setTitleName("Show")
    }

  };

  return (
    <View style={styles.container}>
      <Button title={titleName} onPress={onButtonPress} />
      {showName ? <Text>Aws Mohammed Alshraideh</Text> : null}
      <MyFunctionalComponenet_Task17></MyFunctionalComponenet_Task17>
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
export default Task17;