import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Cover from "../components/Cover";
import Home from "../components/Home";
import { useNavigation } from "@react-navigation/native";


export default function Main() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ padding: 3 }}>
                <View style={{ flex: 1, padding: 20 }}>
                    <Cover />
                    <Home />
                </View>
                <View style={{ flex: 1, padding: 20 }}>
                    <Button title="Enter information about cats looking for homes" color="red" onPress={() => navigation.navigate("Information")} />
                </View>
            </View>
           
        </ScrollView>

    );
}