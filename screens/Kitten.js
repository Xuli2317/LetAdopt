import React from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import PicKitty from "../components/PicKitty";
import { useNavigation } from "@react-navigation/native";
import Test from "../components/KittenDoc.js/Test";

export default function Kitten(props) {
    const navigation = useNavigation();
    return (
       
            <View style={{ flex: 1, padding: 20 }}>
                <Text style={{ fontSize: 20, alignSelf: "center", color: "red" }}>FREE</Text>
                <View style={{ marginHorizontal: 5, padding: 10 }}>
                    <PicKitty />
                </View>
                <View style={{ padding: 20 }}>
                    <Button title="Home" color="orange" onPress={() => navigation.navigate("Main")} />
                </View>
                <View style={{ padding: 10, flexDirection: "column", justifyContent: "flex-end" }}>
                    <Button title="Enter information about cats looking for homes" color="red" onPress={() => navigation.navigate("Information")} />
                </View>
            </View>
        



    );
}