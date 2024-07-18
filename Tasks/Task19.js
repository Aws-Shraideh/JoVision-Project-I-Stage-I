import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyClassPage from '../Components/MyClassPage';

const Task19 = () => {
  const [showName, setShowName] = useState(false);

  const onButtonPress = () => {
    setShowName((prevShowName) => !prevShowName);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={onButtonPress} />
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
export default Task19;