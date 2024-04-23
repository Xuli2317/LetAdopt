import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import PicKitty from "../components/PicKitty";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native';
import PicSenior from "../components/PicSenior";
import SeniorStorage from "../storages/SeniorStorage";


export default function Senior() {
    const navigation = useNavigation();
    const [Seniors, setSeniors] = useState([
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
        }]);

    const loadSeniors = async () => {
        try {
            let Seniors = await SeniorStorage.readItems();
            setSeniors(Seniors);
        } catch (error) {
            console.error("Error loading Seniors:", error);
        }
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            loadSeniors();
        });
        return unsubscribe;
    }, [navigation]);
    const [refresh, setRefresh] = useState(false);

    const SeniorItem = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => { navigation.navigate("SeniorDetail", { "id": item.id }); }}
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


    const handleAddSenior = () => {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={Seniors}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()}
                    refreshing={refresh}
                    onRefresh={() => { loadSeniors(); }}
                    renderItem={({ item, index }) => (<SeniorItem item={item} index={index} />)}
                />
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Senior Form", { "id": null }); }}
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
                    <PicSenior />
                </View>
                <View style={{ marginLeft: 20 }}>
                    {/* {handleAddSenior()} */}
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