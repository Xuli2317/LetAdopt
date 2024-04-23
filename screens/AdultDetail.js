import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function AdultDetail() {
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
                    "name": "Cody",
                    "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Adult/Pictures/1.jpg",
                    "Age": "6 years",
                    "Weight": "5 Kg.",
                    "Phonenumber": "022587451",
                    "Address": "Loei"
                });
            } else if (id === "2") {
                setPet({
                    "id": "2",
                    "name": "Themis",
                    "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Adult/Pictures/2.jpg",
                    "Age": "4 years",
                    "Weight": "4 Kg.",
                    "Phonenumber": "0965412356",
                    "Address": "Bangkok"
                });
            } else if (id === "3") {
                setPet({
                    "id": "3",
                    "name": "Aura",
                    "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Adult/Pictures/3.jpg",
                    "Age": "2 years",
                    "Weight": "3 Kg.",
                    "Phonenumber": "0858548632",
                    "Address": "Bangkok"
                });
            } else if (id === "4") {
                setPet({
                    "id": "4",
                    "name": "Carmen",
                    "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Adult/Pictures/4.jpg",
                    "Age": "3 years",
                    "Weight": "4 Kg.",
                    "Phonenumber": "0821236959",
                    "Address": "Kalasin"
                });
            } else if (id === "5") {
                setPet({
                    "id": "5",
                    "name": "Olinda",
                    "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Adult/Pictures/5.jpg",
                    "Age": "5 years",
                    "Weight": "4 Kg.",
                    "Phonenumber": "083254123",
                    "Address": "Lamphun"
                });
            } else if (id === "6") {
                setPet({
                    "id": "6",
                    "name": "Reet",
                    "uri": "https://github.com/Xuli2317/Pictures/blob/main/Adult/Pictures/6.png?raw=true",
                    "Age": "5 years",
                    "Weight": "3 Kg.",
                    "Phonenumber": "0957485645",
                    "Address": "Nan"
                });
            }
        };

        fetchPet();
    }, [id]);


    //DELETE POPUP    
    const deleteAdult = async () => { };
    const confirmDelete = () => {
        return Alert.alert("ยืนยันการลบ?", "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [{ text: "ยกเลิก", }, { text: "ยืนยัน", onPress: () => { deleteAdult(); }, }]);
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
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { setModalVisible(true); }} >
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