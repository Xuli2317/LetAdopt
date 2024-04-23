import React from "react";
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PicAdult(props) {
    const navigation = useNavigation();
    const tours = [
        {
            "id": "1",
            "name": "Cody",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Adult/Pictures/1.jpg",
            "Age": "6 years",
            "Weight": "5 Kg.",
            "Phonenumber": "022587451",
            "Address": "Loei"
        },
        {
            "id": "2",
            "name": "Themis",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Adult/Pictures/2.jpg",
            "Age": "4 years",
            "Weight": "4 Kg.",
            "Phonenumber": "0965412356",
            "Address": "Bangkok"
        },
        {
            "id": "3",
            "name": "Aura",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Adult/Pictures/3.jpg",
            "Age": "2 years",
            "Weight": "3 Kg.",
            "Phonenumber": "0858548632",
            "Address": "Bangkok"
        },
        {
            "id": "4",
            "name": "Carmen",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Adult/Pictures/4.jpg",
            "Age": "3 years",
            "Weight": "4 Kg.",
            "Phonenumber": "0821236959",
            "Address": "Kalasin"
        },
        {
            "id": "5",
            "name": "Olinda",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Adult/Pictures/5.jpg",
            "Age": "5 years",
            "Weight": "4 Kg.",
            "Phonenumber": "083254123",
            "Address": "Lamphun"
        },
        {
            "id": "6",
            "name": "Reet",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Adult/Pictures/6.png",
            "Age": "5 years",
            "Weight": "3 Kg.",
            "Phonenumber": "0957485645",
            "Address": "Nan"
        }];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>2-6 years</Text>
            <FlatList
                data={tours.slice(0, 3)} // ใช้ slice เพื่อแบ่งข้อมูลเป็นกลุ่มที่มี 3 รายการต่อแถว
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("AdultDetail", { id: item.id })}>
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
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("AdultDetail", { id: item.id })}>
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
