import React from "react";
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PicMature(props) {
    const navigation = useNavigation();
    const tours = [
        {
            "id": "1",
            "name": "Florencio",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/1.jpg",
            "Age": "11 years",
            "Weight": "4 Kg.",
            "Phonenumber": "0984567412",
            "Address": "Nakhin Pathom"
        },
        {
            "id": "2",
            "name": "Abigail",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/2.jpg",
            "Age": "12 years",
            "Weight": "4.2 Kg.",
            "Phonenumber": "0855241515",
            "Address": "Saraburi"
        },
        {
            "id": "3",
            "name": "Nona",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/3.png",
            "Age": "12 years",
            "Weight": "4.3 Kg.",
            "Phonenumber": "023521265",
            "Address": "Bangkok"
        },
        {
            "id": "4",
            "name": "Velma",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/4.jpg",
            "Age": "10 years",
            "Weight": "3.9 Kg.",
            "Phonenumber": "023521265",
            "Address": "Bangkok"
        },
        {
            "id": "5",
            "name": "Zane",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/5.png",
            "Age": "8 years",
            "Weight": "5 Kg.",
            "Phonenumber": "023521265",
            "Address": "Krabi"
        },
        {
            "id": "6",
            "name": "Carla",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/6.jpg",
            "Age": "7 years",
            "Weight": "5.5 Kg.",
            "Phonenumber": "086547451",
            "Address": "Yala"
        }];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>7-12 years</Text>
            <FlatList
                data={tours.slice(0, 3)} // ใช้ slice เพื่อแบ่งข้อมูลเป็นกลุ่มที่มี 3 รายการต่อแถว
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("MatureDetail", { id: item.id })}>
                        <Image style={styles.image} source={{ uri: item.uri }} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                horizontal
            />
            <FlatList
                data={tours.slice(3, 6)} // ใช้ slice เพื่อแบ่งข้อมูลเป็นกลุ่มที่มี 3 รายการต่อแถว
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("MatureDetail", { id: item.id })}>
                        <Image style={styles.image} source={{ uri: item.uri }} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                horizontal
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'black',
    },

    listContent: {
        paddingHorizontal: 10,
    },
    card: {
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 3,
        width: 250,
        marginBottom: 20,

    },
    image: {
        width: '100%',
        height: 230,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    infoContainer: {
        padding: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: 'coral',
        paddingVertical: 8,
        borderRadius: 10,
    },
    info: {
        fontSize: 16,
        marginBottom: 8,
        color: '#555',
        marginLeft: 10,
    },
});
