import React, { useState} from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import MyFunctionalComponenet_Task18 from '../Components/MyFunctionalComponent_Task18';

const Task18 = () => {
const [isLoading, setIsLoading] = useState(true);
function afterLoad()
{
  setIsLoading(false)
}

function checkLoad()
{
  setTimeout(afterLoad,5000);
  if (isLoading === true)
    { 
      return(
        <View>
          <ActivityIndicator size = "large" color = "pink"/>
          <Text>Loading...</Text>
        </View>
      )
    }
  else
  {
    return(
    <View>
      <Text>Aws AlShraideh</Text>
    </View>
    )
  }
}

return (
    <View style={styles.container}>
      {checkLoad()}
      <MyFunctionalComponenet_Task18></MyFunctionalComponenet_Task18>
    </View>
  );
};

const styles = StyleSheet.create
({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Task18;
