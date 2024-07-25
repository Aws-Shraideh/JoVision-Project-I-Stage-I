import  React from 'react';
import { StyleSheet,View,Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Task42 = () => {

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ScreenOne = ({navigation}) =>
{
    return(
        <View style ={styles.view}>
            <Text style = {styles.text}>1</Text>
            <Button title ='Screen Two' onPress={()=> navigation.navigate('Screen2')}></Button>
            <Button title ='Screen Three' onPress={()=> navigation.navigate('Screen3')}></Button>
            <Button title ='Screen Four' onPress={()=> navigation.navigate('Screen4')}></Button>
        </View>
    )
}
const ScreenTwo = ({navigation}) => 
{
    return(
        <View style ={styles.view}>
            <Text style = {styles.text}>2</Text>
            <Button title ='Screen One' onPress={()=> navigation.navigate('Screen1')}></Button>
            <Button title ='Screen Three' onPress={()=> navigation.navigate('Screen3')}></Button>
            <Button title ='Screen Four' onPress={()=> navigation.navigate('Screen4')}></Button>
        </View>
    )
}
const ScreenThree = ({navigation}) =>
{
    return(
        <View style ={styles.view}>
            <Text style = {styles.text}>3</Text>
            <Button title ='Screen One'onPress={()=> navigation.navigate('Screen1')}/>
            <Button title ='Screen Two' onPress={()=> navigation.navigate('Screen2')}/>
            <Button title ='Screen Four' onPress={()=> navigation.navigate('Screen4')}/>
        </View>
    )
}
const ScreenFour = ({navigation}) =>
{
    return(
        <View style ={styles.view}>
            <Text style = {styles.text}>4</Text>
            <Button title ='Screen One' onPress={()=> navigation.navigate('Screen1')}></Button>
            <Button title ='Screen Two' onPress={()=> navigation.navigate('Screen2')}></Button>
            <Button title ='Screen Three' onPress={()=> navigation.navigate('Screen3')}></Button>
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
    },
    button:
    {
        width:100,
        height:40,
        margin:12,
        padding:12,
    }
})

export default Task42;