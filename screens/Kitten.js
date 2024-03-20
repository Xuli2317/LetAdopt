import React from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import PicKitty from "../components/PicKitty";
import { useNavigation } from "@react-navigation/native";
import Test from "../components/KittenDoc.js/Test";

export default function Kitten(props) {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
                < PicKitty />
            <View style={{ marginHorizontal: 5, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white' }}>
                <Test />
            </View>
                <View style={{ padding:20}}>
                    <Button title="Home" color="orange" onPress={() => navigation.navigate("Main")} />
                </View>
            </View>
        
            
        </ScrollView>

    );
}