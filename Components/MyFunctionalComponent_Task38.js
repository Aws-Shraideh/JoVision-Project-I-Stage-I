import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import TextProvider,{TextContext, SetTextContext} from '../Hooks/TextProvider';
import MyClassComponent_Task38 from './MyClassComponent_Task38';

const MyFunctionalComponenet_Task38 = () => {

    const setSharedText = useContext(SetTextContext);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input} onChangeText={(value) => setSharedText(value)} placeholder='Input text...'
            />
            <MyClassComponent_Task38 />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 250,
        borderColor: 'black',
        borderWidth: 1,
        marginTop:10,
    },
});

export default MyFunctionalComponenet_Task38;
