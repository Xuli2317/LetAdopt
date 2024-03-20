import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, } from "react-native";

export default function Cover() {
    return (        
        <View style={{ flexDirection: "row" }}>
            <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 2 / 2 }} source={{ uri : "https://raw.githubusercontent.com/Xuli2317/Mobile-Application/main/Project/pexels-pixabay-257532.jpg"}} />
        </View>
    );
}
