import React from "react";
import { View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function User() {
    return (
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <FontAwesome name="user-circle" size={50} color="grey" />
            <View style={{ width: 10 }} /> 
            <FontAwesome name="user-circle" size={50} color="grey" />
            <View style={{ width: 10 }} /> 
            <AntDesign name="pluscircleo" size={50} color="grey" />
        </View>
    );
}
