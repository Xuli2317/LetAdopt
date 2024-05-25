import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function KittenDetail() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;
    const [pet, setPet] = useState(null);

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const response = await fetch(`http://localhost:8001/kittens/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPet(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPet();
    }, [id]);

    // DELETE POPUP    
    const deleteKitten = async () => {
        try {
            // Implement delete functionality here
        } catch (error) {
            console.error(error);
        }
    };

    const confirmDelete = () => {
        Alert.alert(
            'Confirm Delete',
            'Are you sure you want to delete this item?',
            [
                { text: 'Cancel' },
                { text: 'Confirm', onPress: deleteKitten }
            ]
        );
    };

    // TOP RIGHT MENU
    const TopRightMenu = () => (
        <View style={styles.topRightMenuContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <FontAwesome name="home" size={30} />
            </TouchableOpacity>
        </View>
    );

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <TopRightMenu />
        });
    }, [navigation]);

    // CONDITIONAL RENDERING
    if (!pet) {
        return <View></View>;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: pet.uri }} />
                </View>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text style={styles.petName}>{pet.name}</Text>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.infoText}>Age: {pet.Age}</Text>
                    <Text style={styles.infoText}>Weight: {pet.Weight}</Text>
                    <Text style={styles.infoText}>Address: {pet.Address}</Text>
                    <Text style={styles.infoText}>Phone Number: {pet.Phonenumber}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    imageContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 400,
        resizeMode: "cover",
        borderRadius: 10,
    },
    infoContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
    },
    petName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: 'coral',
        paddingVertical: 8,
        borderRadius: 10,
    },
    infoText: {
        fontSize: 18,
        marginBottom: 8,
        color: '#555',
        textAlign: 'center',
    },
    topRightMenuContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    menuItem: {
        paddingHorizontal: 10,
    },
});
