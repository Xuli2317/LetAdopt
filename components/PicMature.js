import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PicMature(props) {
    const navigation = useNavigation();
    const [matures, setMatures] = useState([]);

    const loadMatures = async () => {
        try {
            let response = await fetch('https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/Api.json');
            let data = await response.json();
            setMatures(data);
        } catch (error) {
            console.error("Error loading matures:", error);
        }
    };

    useEffect(() => {
        loadMatures();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#91837a"
                />
            </View>
            <FlatList
                data={matures}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("MatureDetail", { id: item.id })}
                    >
                        <Image style={styles.image} source={{ uri: item.uri }} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.details}>{item.Gender}, {item.Age}</Text>
                            <Text style={styles.location}>{item.Address}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
                scrollEnabled={false}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 3,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#a4b4aa',
        borderWidth: 2.5,
        borderRadius: 15,
        paddingHorizontal: 10,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    searchInput: {
        fontSize: 15,
        flex: 1,
        paddingVertical: 10,
    },
    listContent: {
    },
    card: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 3,
        width: '60%',
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
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left',
        borderRadius: 10,
        color: 'black',
    },
    details: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'left',
        color: '#333',
    },
    location: {
        fontSize: 14,
        textAlign: 'left',
        color: '#777',
    },
});