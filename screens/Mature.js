import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native';
import PicMature from "../components/PicMature";
import MatureStorage from "../storages/MatureStorage";

export default function Mature() {
    const navigation = useNavigation();
    const [Matures, setMatures] = useState([
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
        }]);

    const loadMatures = async () => {
        try {
            let Matures = await MatureStorage.readItems();
            setMatures(Matures);
        } catch (error) {
            console.error("Error loading Matures:", error);
        }
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            loadMatures();
        });
        return unsubscribe;
    }, [navigation]);
    const [refresh, setRefresh] = useState(false);

    const MatureItem = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => { navigation.navigate("MatureDetail", { "id": item.id }); }}
            style={{ marginRight: 20, borderRadius: 10, backgroundColor: '#fff', elevation: 3, width: 250, marginBottom: 20 }}>
            <View style={{ flexDirection: "row" }}>
                <Image style={{ width: '100%', height: 350, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
            </View>
            <View style={{ padding: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', backgroundColor: 'coral', paddingVertical: 8, borderRadius: 10 }}> {item.name} </Text>
                <View style={{ fontSize: 16, marginBottom: 8, color: '#555', marginLeft: 10 }}>
                    <Text>Age: {item.Age}</Text>
                    <Text>Weight: {item.Weight}</Text>
                    <Text>Addressge: {item.Address}</Text>
                    <Text>PhoneNumber: {item.Phonenumber}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );


    const handleAddMature = () => {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={Matures}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()}
                    refreshing={refresh}
                    onRefresh={() => { loadMatures(); }}
                    renderItem={({ item, index }) => (<MatureItem item={item} index={index} />)}
                />
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Mature Form", { "id": null }); }}
                    style={{
                        backgroundColor: "lightblue",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        position: "absolute",
                        right: 30,
                        bottom: 30,
                        elevation: 5,
                    }}>
                    <FontAwesome name="plus" size={40} />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={[styles.content, { justifyContent: "center" }]}>
                    <PicMature />
                </View>
                <View style={{ marginLeft: 20 }}>
                    {/* {handleAddMature()} */}
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {

    },
    content: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 20,
    },
});