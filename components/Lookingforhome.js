import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import Heightstorage from "../storages/Heightstorage";
import Namestorage from "../storages/Namestorage";
import Agestorage from "../storages/Agestorage";
import Addressstorage from "../storages/Addressstorage";
import Phonenumberstorage from "../storages/Phonenumberstorage";
import { useNavigation } from "@react-navigation/native";

export default function Lookingforhome() {
    const [Height, setHeight] = useState(0);
    const [Name, setName] = useState("");
    const [Age, setAge] = useState(0);
    const [Address, setAddress] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const navigation = useNavigation();

    const load = async () => {
        console.log("load");
        let h = await Heightstorage.readItem();
        setHeight(h);
        let n = await Namestorage.readItem();
        setName(n);
        let a = await Agestorage.readItem();
        setAge(a);
        let d = await Addressstorage.readItem();
        setAddress(d);
        let p = await Phonenumberstorage.readItem();
        setPhoneNumber(p);

        console.log(h, n, a, d, p);
    };

    useEffect(() => { load(); }, []);

    const save = async () => {
        console.log("save");
        Heightstorage.writeItem(Height);
        Namestorage.writeItem(Name);
        Agestorage.writeItem(Age);
        Addressstorage.writeItem(Address);
        Phonenumberstorage.writeItem(PhoneNumber);
    };

    const reset = () => {
        console.log("reset");
        setHeight(0);
        setName("");
        setAge(0);
        setAddress("");
        setPhoneNumber("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Your Information</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setName(text)}
                    value={Name}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Age:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={(text) => setAge(parseInt(text))}
                    value={Age.toString()}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Address:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setAddress(text)}
                    value={Address}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="phone-pad"
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={PhoneNumber}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Save" color="#007bff" onPress={save} />
                <Button title="Reset" color="#dc3545" onPress={reset} />
            </View>
            <TouchableOpacity
                style={styles.adoptButton}
                onPress={() => navigation.navigate('Sendinginfo')}
            >
                <Text style={styles.buttonText}>Sending your information</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 25,
        color: "#91837a",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    label: {
        marginRight: 10,
        width: 60,
        textAlign: "right",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        flex: 1,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    adoptButton: {
        backgroundColor: '#a4b4aa',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});