import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Informationstorage from "../storages/Informationstorage";
import Heightstorage from "../storages/Heightstorage";
import Namestorage from "../storages/Namestorage";
import Agestorage from "../storages/Agestorage";
import Addressstorage from "../storages/Addressstorage";
import Phonenumberstorage from "../storages/Phonenumberstorage";

export default function Lookingforhome() {
    const [Height, setHeight] = useState(0);
    const [Name, setName] = useState(0);
    const [Age, setAge] = useState(0);
    const [Address, setAddress] = useState(0);
    const [PhoneNumber, setPhoneNumber] = useState(0);


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
        // Implement logic to reset state values
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
                <Text style={styles.label}>Cat's Name:</Text>
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
                <Text style={styles.label}>Height (cm):</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={(text) => setHeight(parseFloat(text))}
                    value={Height.toString()}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Address: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setAddress(text)}
                    value={Address}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Call:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="Call:" 
                    onChangeText={(text) => setPhoneNumber(text)} 
                    value={PhoneNumber} 
                />
            </View>
            <View style={{ padding:10}}>
                <Button title="Save" color="blue" onPress={save} style={styles.button} />
            </View>
            <View style={{ padding:10}} >
                <Button title="Reset" color="red" onPress={reset} />
            </View>


            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    label: {
        marginRight: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        flex: 1,
    },
    displayContainer: {
        marginTop: 20,
    },
    displayText: {
        fontSize: 18,
        marginBottom: 5,
    },
});