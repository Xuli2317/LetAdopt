import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";


export default function MatureDetail() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;
    const [pet, setPet] = useState({
        "id": "1",
        "name": "Newyear",
        "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/K/",
        "Age": "1 year",
        "Weight": "2 Kg.",
        "Phonenumber": "191",
        "Address": "Bangkok"
    });

    useEffect(() => {
        const fetchPet = async () => {
            if (id === "1") {
                setPet({
                    "id": "1",
                    "name": "Florencio",
                    "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/1.jpg",
                    "Age": "11 years",
                    "Weight": "4 Kg.",
                    "Gender": "Male",
                    "Phonenumber": "0984567412",
                    "Address": "Nakhin Pathom"
                });
            } else if (id === "2") {
                setPet({
                    "id": "2",
                    "name": "Abigail",
                    "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/2.jpg",
                    "Age": "12 years",
                    "Weight": "4.2 Kg.",
                    "Gender": "Female",
                    "Phonenumber": "0855241515",
                    "Address": "Saraburi"
                });
            } else if (id === "3") {
                setPet({
                    "id": "3",
                    "name": "Nona",
                    "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/3.png",
                    "Age": "12 years",
                    "Weight": "4.3 Kg.",
                    "Gender": "Female",
                    "Phonenumber": "023521265",
                    "Address": "Bangkok"
                });
            } else if (id === "4") {
                setPet({
                    "id": "4",
                    "name": "Velma",
                    "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/4.jpg",
                    "Age": "10 years",
                    "Weight": "3.9 Kg.",
                    "Gender": "Female",
                    "Phonenumber": "023521265",
                    "Address": "Bangkok"
                });
            } else if (id === "5") {
                setPet({
                    "id": "5",
                    "name": "Zane",
                    "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/5.png",
                    "Age": "8 years",
                    "Weight": "5 Kg.",
                    "Gender": "Male",
                    "Phonenumber": "023521265",
                    "Address": "Krabi"
                });
            } else if (id === "6") {
                setPet({
                    "id": "6",
                    "name": "Carla",
                    "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/6.jpg",
                    "Age": "7 years",
                    "Weight": "5.5 Kg.",
                    "Gender": "Female",
                    "Phonenumber": "086547451",
                    "Address": "Yala"
                });
            }
        };

        fetchPet();
    }, [id]);

    //DELETE POPUP    
    const deleteKiteen = async () => { };
    const confirmDelete = () => {
        return Alert.alert("ยืนยันการลบ?", "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [{ text: "ยกเลิก", }, { text: "ยืนยัน", onPress: () => { deleteKiteen(); }, }]);
    };

    // TOP RIGHT MENU
    const TopRightMenu = () => (
        <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
            <TouchableOpacity
                onPress={() => { navigation.navigate("Main"); }}
            >
                <FontAwesome name="home" size={30} />
            </TouchableOpacity>

        </View>
    );
    const onLoad = async () => {
        navigation.setOptions({ headerRight: () => (<TopRightMenu />) });
    };
    useEffect(() => { onLoad(); }, []);
    // CONDITIONAL RENDERING
    if (Object.keys(pet).length == 0) { return <View></View> }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => { setModalVisible(true); }} >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: pet.uri }} />
                </View>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text style={styles.petName}>{pet.name}</Text>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.infoText}>Gender: {pet.Gender}</Text>
                    <Text style={styles.infoText}>Age: {pet.Age}</Text>
                    <Text style={styles.infoText}>Weight: {pet.Weight}</Text>
                    <Text style={styles.infoText}>Address: {pet.Address}</Text>
                    <Text style={styles.infoText}>Phone Number: {pet.Phonenumber}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.adoptButton}
                onPress={() => navigation.navigate('Information')}
            >
                <Text style={styles.buttonText}>Adopt cat</Text>
            </TouchableOpacity>
        </ScrollView>
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
        height: 300,
        resizeMode: "cover",
        borderRadius: 10,
    },
    infoContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderRadius: 10,
        borderColor: '#a4b4aa',
        borderWidth: 2.5,
        borderRadius: 15,
    },
    petName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'left',
        paddingVertical: 8,
        borderRadius: 10,

    },
    infoText: {
        fontSize: 18,
        marginBottom: 8,
        color: '#555',
        textAlign: 'left',
    },
    topRightMenuContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    menuItem: {
        paddingHorizontal: 10,
    },
    adoptButton: {
        backgroundColor: '#a4b4aa',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 110,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});