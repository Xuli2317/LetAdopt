import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Head() {
    return (
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <FontAwesome5 name="star-and-crescent" size={24} color="grey" />
            <Text style={{ fontSize: 20, textAlign: 'left', color: "grey", fontWeight: "bold" }} >  Planit  </Text>
            <View style={{ flex: 1, alignSelf:"center"}}>
                <AntDesign name="down" size={20} color="grey" />
            </View>
            <View style={{ marginLeft: "auto" }}>
                <View style={{ alignSelf: "center"}}>
                    <AntDesign name="setting" size={20} color="grey"/>
                </View>
            </View>
        </View>
    );
}
