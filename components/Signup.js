import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';


export default function Signup() {
    return (
        <View style={{ padding : 20 }}>
            <Text style={{ fontSize : 20 }}>Sign up </Text>
            <TextInput style={{ fontSize : 20 , marginTop : 10 }} placeholder="Input ID" />
            <TextInput style={{ fontSize : 20 , marginTop : 10 }}  placeholder="Input Email" />
            <TextInput style={{ fontSize : 20 , marginTop : 10 , marginBottom : 10 }}  placeholder="Input Address" />
            <Button title="Sign up" color="red" />
        </View>    
    );
}
