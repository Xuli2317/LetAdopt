import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, Touchable, TouchableOpacity, } from "react-native";
import MyIcon from "./MyIcon";
import { useNavigation } from "@react-navigation/native";

export default function Sending() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Thank you</Text>
            <Text style={styles.text}>for Adopting</Text>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Main"); }}>
                <Text>We’ll contact you in the coming days</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#A4B4AA",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 50,
        marginBottom: 20,
        color: "#91837a",
    },
    button: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
});