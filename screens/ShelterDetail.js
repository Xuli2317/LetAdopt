import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View, StyleSheet, ScrollView, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ShelterDetail() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;
    const [pet, setPet] = useState({
        "id": "1",
        "name": "Newyear",
        "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/K/",
        "contact": '19 may 2024'
    });

    useEffect(() => {
        const fetchEvent = async () => {
            if (id == "1") {
                setPet({
                    "id": 1,
                    "name": "Thai Love Animal Foundation",
                    "contact": "thailoveanimal (IG)",
                    "uri": "https://th.bing.com/th/id/OIP.zM_ZlsAl1q4keKI5LExtiQHaHZ?rs=1&pid=ImgDetMain"
                });
            } else if (id == "2") {
                setPet({
                    "id": 2,
                    "name": "Adopt me Please",
                    "contact": "adopt_me_please@hotmail.com",
                    "uri": "https://th.bing.com/th/id/OIP.PUT7V-HvF8lyfmbI0P0WIAHaHa?rs=1&pid=ImgDetMain"
                });
            } else if (id == "3") {
                setPet({
                    "id": 3,
                    "name": "rakmaw",
                    "contact": "www.rakmaw.com",
                    "uri": "https://th.bing.com/th/id/OIP.ojR4j8O2-gcQD5dv_oJW0gAAAA?rs=1&pid=ImgDetMain"
                });
            } else if (id == "4") {
                setPet({
                    "id": 4,
                    "name": "RightBaan ",
                    "contact": "www.RightBaan.com",
                    "uri": "https://th.bing.com/th/id/OIP.41G-mtw31c27Fg6t-vOtsQAAAA?rs=1&pid=ImgDetMain"
                });
            } else if (id == "5") {
                setPet({
                    "id": 5,
                    "name": " Catster by Kingdom of Tigers ",
                    "contact": "www.catsterclub.com",
                    "uri": "https://play-lh.googleusercontent.com/tWsdJR1xj2wC6uDofJFz4O7R0APe9JWLH0BIXrMheoOmUGbETbSVCRDeXiGKk15ozGPN"
                });
            } else if (id == "6") {
                setPet({
                    "id": 6,
                    "name": "Cat Lumpini  ",
                    "contact": "www.instagram.com/cat_lumpini",
                    "uri": "https://i.pinimg.com/736x/6a/b7/fa/6ab7fafed3d120b77c3f010782654631.jpg"
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
                onPress={() => { navigation.navigate("Main"); }}
            >
                <FontAwesome name="home" size={28} />
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
                    <Text style={styles.infoText}>contact: {pet.contact}</Text>
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
        // backgroundColor: "white",
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