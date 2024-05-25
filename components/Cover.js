import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, } from "react-native";

export default function Cover() {
    return (        
        <View style={{ flexDirection: "row" }}>
            <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 3.3,  borderRadius:5}} source={{ uri : "https://raw.githubusercontent.com/Xuli2317/Pictures/main/main/1.png"}} />
        </View>
    );
}
