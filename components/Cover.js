import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, } from "react-native";

export default function Cover() {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 3.4, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/Xuli2317/Pictures/main/main/let%E2%80%99s.jpg" }} />
        </View>
    );
}
