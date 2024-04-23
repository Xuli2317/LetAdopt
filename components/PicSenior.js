import React from "react";
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PicSenior(props) {
    const navigation = useNavigation();
    const tours = [
        {
            "id": "1",
            "name": "Connie",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Senior/Pictures/1.jpg",
            "Age": "12.3 years",
            "Weight": "5.8 Kg.",
            "Phonenumber": "0984567412",
            "Address": "Chiang Mai"
        },
        {
            "id": "2",
            "name": "Karina",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Senior/Pictures/2.jpg",
            "Age": "12 years",
            "Weight": "5.6 Kg.",
            "Phonenumber": "0855241515",
            "Address": "Bangkok"
        },
        {
            "id": "3",
            "name": "Janis",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Senior/Pictures/3.jpg",
            "Age": "12 years",
            "Weight": "5 Kg.",
            "Phonenumber": "0654569548",
            "Address": "Chiang Mai"
        },
        {
            "id": "4",
            "name": "Janette",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Senior/Pictures/4.jpg",
            "Age": "12 years",
            "Weight": "4.3 Kg.",
            "Phonenumber": "0855241515",
            "Address": "Bangkok"
        },
        {
            "id": "5",
            "name": "Le",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Senior/Pictures/5.jpg",
            "Age": "13 years",
            "Weight": "4 Kg.",
            "Phonenumber": "0855241515",
            "Address": "Bangkok"
        },
        {
            "id": "6",
            "name": "Benedict",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Pictures/main/Senior/Pictures/6.jpg",
            "Age": "12 years",
            "Weight": "4.5 Kg.",
            "Phonenumber": "0855241515",
            "Address": "Bangkok"
        }];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>12 years</Text>
            <FlatList
                data={tours.slice(0, 3)} 
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SeniorDetail", { id: item.id })}>
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
                data={tours.slice(3, 6)} 
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SeniorDetail", { id: item.id })}>
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
