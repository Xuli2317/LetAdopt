import React from "react";
import { ScrollView, View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import Cover from "../components/Cover";
import Home from "../components/Home";
import { useNavigation } from "@react-navigation/native";
import Event from "../components/Event";

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
            <View style={styles.separator} />
            <View style={styles.eventContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("EventAll")}>
                    <Text style={styles.text}> See All Event </Text>
                </TouchableOpacity>
            </View>
            <Event />
            <TouchableOpacity
                style={styles.adoptButton}
                onPress={() => navigation.navigate('ShelterAll')}
            >
                <Text style={styles.buttonText}>Cat Shelter in Thailand</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        padding: 10,
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
    text: {
        fontSize: 30,
        marginLeft: 3,
        fontWeight: "bold",
        marginBottom: 5,
        color: '#91837a',
    },
    section: {
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 5,
    },
    separator: {
        borderBottomWidth: 2,
        borderBottomColor: '#a4b4aa',
        marginVertical: 20,
    },
    adoptButton: {
        backgroundColor: '#a4b4aa',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
});