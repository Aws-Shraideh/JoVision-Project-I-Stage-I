import {useState} from "react"
import { StyleSheet, Text, View } from "react-native"
import { forwardRef, useImperativeHandle } from 'react';


const MyFunctionPage3 = forwardRef((props, ref) => {
    
    const [displayText, setDisplayText] = useState('');
  
    useImperativeHandle(ref, () => ({
      updateText: (text) => {
        setDisplayText(text);
      },
    }));
  
    return (
      <View>
        <Text>The Text in the FunctionPage is: {displayText}</Text>
      </View>
    );
  });
const styles = StyleSheet.create
(
    {
        container: 
        {
            flex: 1,
        },
        demoText:
        {
            fontSize: 15
        },
        input:
        {
            width :220,
            borderWidth: 1,
        }

    }
)
export default MyFunctionPage3