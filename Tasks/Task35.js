import React,{useState,useEffect} from 'react'
import {View, Button, Alert, StyleSheet, Text, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Task35 = () => 
{
    const [name, setName] = useState('Username.....')
    const [age, setAge] = useState('Age.....')
    const [country, setCountry] = useState('Country.....')

    useEffect(() => {
        readObject();
      }, []);
    
   
    const readObject = async () =>
        {
            try
            {
                const jsonName = await AsyncStorage.getItem('objectName');
                const jsonAge = await AsyncStorage.getItem('objectAge');
                const jsonCountry = await AsyncStorage.getItem('objectCountry');
                const jsonTime = await AsyncStorage.getItem('objectTime');
                const currnetTime = new Date()

                if(jsonName != null && jsonAge != null && jsonCountry != null && jsonTime != null)
                {
                    if(currnetTime.getMinutes() == jsonTime)
                    {
                        JSON.parse(jsonTime)
                        JSON.parse(jsonName)
                        JSON.parse(jsonAge)
                        
                        setName(jsonName)
                        setAge(jsonAge)
                        setCountry(jsonCountry)
                    }
                }
                else 
                {
                    Alert.alert('No info found','Please enter your information')
                }
            }
            catch(error)
            {
                Alert.alert(error.message)
            }

        }

    const storeObject = async () =>
        {
            if(age < 130 && age > 0)
            {
                const object = 
                {
                    objectTime : new Date().getMinutes(),
                    objectName : name,
                    objectAge : age,
                    objectCountry : country,
                }
                Alert.alert('Success','Your info has been submitted')
                try
                {
                    const jsonTime = JSON.stringify(object.objectTime);
                    const jsonName = JSON.stringify(object.objectName);
                    const jsonAge = JSON.stringify(object.objectAge);
                    const jsonCountry = JSON.stringify(object.objectCountry);

                    await AsyncStorage.setItem('objectTime', jsonTime);
                    await AsyncStorage.setItem('objectName', jsonName);
                    await AsyncStorage.setItem('objectAge', jsonAge);
                    await AsyncStorage.setItem('objectCountry', jsonCountry);
                }
                catch(error)
                {
                    Alert.alert('error',error.message)
                }
            }
            else
            {
                Alert.alert('Error','Age entered is not valid')
            }
        }

    return(
     <View style = {styles.view}>

        <Text style={styles.text}>Username :</Text>
        <TextInput style ={styles.input} value = {name} placeholder= {name} onChangeText={(value => setName(value))}></TextInput>

        <Text style={styles.text}>Age :</Text>
        <TextInput style ={styles.input} value = {age} placeholder= {age} onChangeText={(value => setAge(value))}></TextInput>

        <Text style={styles.text}>Country :</Text>
        <TextInput style ={styles.input} value = {country} placeholder= {country} onChangeText={(value => setCountry(value))}></TextInput>


        <Button title= 'Submit' onPress={storeObject}></Button>
    </View>
    )
}

var styles = StyleSheet.create(
    {
    view:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex : 1,
    },
    text:
    {
        fontWeight : 'bold',
        fontSize : 14,
    },
    input: {
        height: 40,
        width : 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    

});

export default Task35