import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import PicKitty from "../components/PicKitty";
import { useNavigation } from "@react-navigation/native";
import PicMature from "../components/PicMature";

export default function Mature() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
                < PicMature />
            </View>
            <View>
                <Button title="Home" color="orange" onPress={() => navigation.navigate("Main")} />
            </View>
            
        </ScrollView>

    );
}