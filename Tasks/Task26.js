import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task26 = () =>
    {
        const url = 'https://api.ipify.org?format=json'
        const [ipAddress, setIpAddress] = useState('');

       async function nonBlockingRequest ()
        {
            try
            {
                const response = await fetch(url)
                const data = await response.json()
                setIpAddress(data.ip);
            }
            catch (error)
            {
                console.log(error)
            }
            finally
            {
                setTimeout(reset, 5000)
            }
                    
        }

        function blockingRequest()
        {
            try
            {
                fetch(url)
                .then((response) => response.json())
                .then((data) => {setIpAddress(data.ip)})
            }
            catch(error)
            {
                console.log(error)
            }
            finally
            {
                setTimeout(reset, 5000)
            }
        }
        function reset()
        {
            setIpAddress('')
        }

        return(
            <View style = {styles.container}>
                <Button title = 'Make a Non-Blocking IP request' onPress={nonBlockingRequest}></Button>
                <Button title = 'Make a Blocking IP request'onPress={blockingRequest}></Button>
                <Text>{ipAddress}</Text>
            </View>
        )
    }



    


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
export default Task26;