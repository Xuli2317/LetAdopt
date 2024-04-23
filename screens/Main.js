import React from "react";
import { Button, ScrollView, View, StyleSheet } from "react-native";
import Cover from "../components/Cover";
import Home from "../components/Home";
import { useNavigation } from "@react-navigation/native";

export default function Main() {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View style={styles.section}>
                    <Cover />
                    <Home />
                </View>
            </View>
            <View style={styles.section}>
                <Button
                    title="Your information"
                    color="orange"
                    onPress={() => navigation.navigate("Information")}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    section: {
        marginHorizontal: 10,
        marginBottom: 10,

        
    },
});
