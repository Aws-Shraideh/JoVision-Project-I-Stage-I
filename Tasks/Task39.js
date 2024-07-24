import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyFunctionalComponent_Task39 from '../Components/MyFunctionalComponent_Task39';
import store from '../store/store';

const Task39 = () => {
  const [title,setTitle] = useState('Show')
  const [display, setDisplay] = useState(false)

  function showComponent()
  {
    setDisplay(false)
    setTitle('Show')
  }

  function hideComponent()
  {
    setDisplay(true)
    setTitle('hide')

  }

  return (
        <View style={styles.view}>
            <Provider store={store}>
            <Button title={title} onPress={() => { display? showComponent() : hideComponent()}}/>
            {display && <MyFunctionalComponent_Task39></MyFunctionalComponent_Task39>}
            </Provider>
        </View>

  );
};

styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})

export default Task39;
