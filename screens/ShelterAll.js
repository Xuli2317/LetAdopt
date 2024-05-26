import React, { useState, useEffect } from "react";
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ShelterAll(props) {
    const navigation = useNavigation();
    const [shelters, setShelters] = useState([]);

    const loadShelters = async () => {
        try {
            let response = await fetch('https://raw.githubusercontent.com/Xuli2317/Pictures/main/main/Shelters.json');
            let data = await response.json();
            setShelters(data);
        } catch (error) {
            console.error("Error loading shelters:", error);
        }
    };

    useEffect(() => {
        loadShelters();
    }, []);

    return (
        <FlatList
            data={shelters}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate("ShelterDetail", { id: item.id })}
                >
                    <Image style={styles.image} source={{ uri: item.uri }} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    card: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 3,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    infoContainer: {
        padding: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    name: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    date: {
        fontSize: 14,
        color: '#777',
    },
});