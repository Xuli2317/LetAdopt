import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Cover from "../components/Cover";
import Home from "../components/Home";


export default function Main() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
                <Cover />
                <Home />
            </View>
    
        </ScrollView>

    );
}