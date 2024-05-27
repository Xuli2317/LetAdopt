import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View, StyleSheet, ScrollView, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function EventDetail() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;
    const [pet, setPet] = useState({
        "id": "1",
        "event": "Newyear",
        "name": "Newyear",
        "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/K/",
        "date": '19 may 2024'
    });

    useEffect(() => {
        const fetchEvent = async () => {
            if (id == "1") {
                setPet({
                    "id": "1",
                    "event": "Pet Expo Thailand 2024",
                    "name": "Adopt me Please",
                    "date": "18 Aug 2024",
                    "uri": "https://th.bing.com/th/id/OIP.LnqpjDGNi0qnO2WmrNbi2wAAAA?rs=1&pid=ImgDetMain"
                });
            } else if (id == "2") {
                setPet({
                    "id": "2",
                    "event": "Pet Expo Thailand 2024",
                    "name": "Hua-Hin Pos Sheiter",
                    "date": "19 Aug 2024",
                    "uri": "https://th.bing.com/th/id/OIP.LnqpjDGNi0qnO2WmrNbi2wAAAA?rs=1&pid=ImgDetMain"
                });
            } 
        };
    
        fetchEvent();
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
                onPress={() => { navigation.navigate("ShelterAll"); }}
            >
                <FontAwesome name="paw" size={28} />
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
                <Text style={styles.petName}>{pet.event}</Text>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.infoText}>{pet.name}</Text>
                    <Text style={styles.infoText}>{pet.date}</Text>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
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
        marginTop: 200,
        },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        },
    });