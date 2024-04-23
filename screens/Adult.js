import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import PicKitty from "../components/PicKitty";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native';
import PicAdult from "../components/PicAdult";
import AdultStorage from "../storages/AdultStorage";

export default function Adult() {
    const navigation = useNavigation();
    const [Adults, setAdults] = useState([
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
        }]);

    const loadAdults = async () => {
        try {
            let Adults = await AdultStorage.readItems();
            setAdults(Adults);
        } catch (error) {
            console.error("Error loading Adults:", error);
        }
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            loadAdults();
        });
        return unsubscribe;
    }, [navigation]);
    const [refresh, setRefresh] = useState(false);

    const AdultItem = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => { navigation.navigate("AdultDetail", { "id": item.id }); }}
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


    const handleAddAdult = () => {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={Adults}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()}
                    refreshing={refresh}
                    onRefresh={() => { loadAdults(); }}
                    renderItem={({ item, index }) => (<AdultItem item={item} index={index} />)}
                />
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Adult Form", { "id": null }); }}
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
                    <PicAdult />
                </View>
                <View style={{ marginLeft: 20 }}>
                    {/* {handleAddAdult()} */}
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