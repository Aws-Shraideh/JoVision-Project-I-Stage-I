import  React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Task41 = () => {

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ScreenOne()
{
    return(
        <View style ={styles.view}>
            <Text style = {styles.text}>1</Text>
        </View>
    )
}
function ScreenTwo()
{
    return(
        <View style ={styles.view}>
            <Text style = {styles.text}>2</Text>
        </View>
    )
}
function ScreenThree()
{
    return(
        <View style ={styles.view}>
            <Text style = {styles.text}>3</Text>
        </View>
    )
}
function ScreenFour()
{
    return(
        <View style ={styles.view}>
            <Text style = {styles.text}>4</Text>
        </View>
    )
}

function MyTab()
{  
    return(
    <Tab.Navigator>
      <Tab.Screen name="Screen1" component={ScreenOne} />
      <Tab.Screen name="Screen2" component={ScreenTwo} />
      <Tab.Screen name="Screen3" component={ScreenThree} />
      <Tab.Screen name="Screen4" component={ScreenFour} />
    </Tab.Navigator>
    )

}

  return (
    <NavigationContainer>
        <MyTab></MyTab>
    </NavigationContainer>
  );
};
styles = StyleSheet.create({
    view:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text:
    {
        fontSize:60,
        fontWeight:'bold',
        color:'black'
    }
})

export default Task41;