import React from "react";
import { Button, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PicSenior from "../components/PicSenior";

export default function Senior() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
                < PicSenior />
            </View>
            <View>
                <Button title="Home" color="orange" onPress={() => navigation.navigate("Main")} />
            </View>
            
        </ScrollView>

    );
}