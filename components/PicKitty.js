import React from "react";
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PicKitten(props) {
    const navigation = useNavigation();
    const tours = [
        {
            "id": "1",
            "name": "Newton",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Kitten/Pictures/1.jpg",
            "Age": "1 year",
            "Weight": "3 Kg.",
            "Phonenumber": "0984567412",
            "Address": "Phuket"
        },
        {
            "id": "2",
            "name": "Bush",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Kitten/Pictures/2.jpg",
            "Age": "5 Months",
            "Weight": "2 Kg.",
            "Phonenumber": "0855241515",
            "Address": "Tak"
        },
        {
            "id": "3",
            "name": "Lydia",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Kitten/Pictures/3.jpg",
            "Age": "7 Months",
            "Weight": "1 Kg.",
            "Phonenumber": "0654569548",
            "Address": "Bangkok"
        },
        {
            "id": "4",
            "name": "Cedric",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Kitten/Pictures/4.jpg",
            "Age": "11 Months",
            "Weight": "2.5 Kg.",
            "Phonenumber": "0856987458",
            "Address": "Trat"
        },
        {
            "id": "5",
            "name": "Medina",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Kitten/Pictures/5.png",
            "Age": "8 Months",
            "Weight": "1.5 Kg.",
            "Phonenumber": "082123658",
            "Address": "Chai Nat"
        },
        {
            "id": "6",
            "name": "Jacobs",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Kitten/Pictures/6.jpg",
            "Age": "7 Months",
            "Weight": "1.8 Kg.",
            "Phonenumber": "0944587412",
            "Address": "Buriram"
        }];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>0-1 years</Text>
            <FlatList
                data={tours.slice(0, 3)} // ใช้ slice เพื่อแบ่งข้อมูลเป็นกลุ่มที่มี 3 รายการต่อแถว
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("KittenDetail", { id: item.id })}>
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
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("KittenDetail", { id: item.id })}>
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
