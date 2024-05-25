import React from "react";
import { Button, ScrollView, View, StyleSheet, TextInput } from "react-native";
import Cover from "../components/Cover";
import Home from "../components/Home";
import { useNavigation } from "@react-navigation/native";
import MyIcon from "../components/MyIcon";
import Information from "./Information";

export default function Main() {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Let's adopt"
                        placeholderTextColor="#91837a"
                    />
                </View>
            </View>

            <View style={styles.section}>
                <Cover />
            </View>
            <Home />
        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        padding: 10
    },
    searchContainer: {
        padding: 10,
        marginTop: 5,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#a4b4aa',
        borderWidth: 2.5,
        borderRadius: 15,
        paddingHorizontal: 15,
        width: '100%',
    },
    searchInput: {
        fontSize: 15,
        flex: 1,
        paddingVertical: 10,
    },

    container: {
        flex: 1,
        padding: 10,
    },
    section: {
        marginHorizontal: 10,
        marginBottom: 10,
    },
});