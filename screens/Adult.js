import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PicAdult from "../components/PicAdult";

export default function Adult() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
                < PicAdult />
            </View>
            <View>
                <Button title="Home" color="orange" onPress={() => navigation.navigate("Main")} />
            </View>
            
        </ScrollView>

    );
}