import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyFunctionalComponenet_Task16 from '../Components/MyFunctionalComponent_Task16';

const Task16 = () => {
  const [showName, setShowName] = useState(false);

  const onButtonPress = () => {
    setShowName((prevShowName) => !prevShowName);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={onButtonPress} />
      {showName ? <Text>Aws Mohammed Alshraideh</Text> : null}
      <MyFunctionalComponenet_Task16></MyFunctionalComponenet_Task16>
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
export default Task16;