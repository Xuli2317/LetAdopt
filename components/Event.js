import React, { useState, useEffect } from "react";
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Event(props) {
    const navigation = useNavigation();
    const [events, setEvents] = useState([]);

    const loadEvents = async () => {
        try {
            let response = await fetch('https://raw.githubusercontent.com/Xuli2317/Pictures/main/main/Event.json');
            let data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error("Error loading events:", error);
        }
    };

    useEffect(() => {
        loadEvents();
    }, []);

    return (
        <FlatList
            data={events}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate("EventDetail", { id: item.id })}
                >
                    <Image style={styles.image} source={{ uri: item.uri }} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.event}>{item.event}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
        />
    );}

const styles = StyleSheet.create({
    listContent: {
        paddingBottom: 10,
    },
    card: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 3,
        width: '45%',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    infoContainer: {
        padding: 10,
    },
    event: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left',
        borderRadius: 10,
        color: 'black',
    },
    name: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'left',
        color: '#333',
    },
    date: {
        fontSize: 14,
        textAlign: 'left',
        color: '#777',
    },
});