import React, { useEffect, useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, Button, StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import KittenStorage from "../storages/KittenStorage";

export default function KittenForm() {
  const navigation = useNavigation();
  const route = useRoute();
  const [key, setKey] = useState("_" + Math.random().toString(36).substring(2, 9));
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");

  const onLoad = async () => {
    const { id } = route.params;
    if (id) {
        let kitten = await KittenStorage.readItemDetail(id);
        setKey(kitten.id);
        setName(kitten.name);
        setPrice(kitten.Age.toString());
        setPrice(kitten.Weight.toString());
        setPrice(kitten.PhoneNumber.toString());
        setName(kitten.Address);
        setImage(kitten.uri);

        // setKey(id);
        // setName("Example Book");
        // setPrice("100");
        // setImage("https://picsum.photos/300");
    }
    navigation.setOptions({ title: (id ? "edit" : "create") });
};
  useEffect(() => { onLoad();  }, []);

  const saveKitten = async () => {
    //A NEW ITEM
    let new_data = { "id": key, "name": name, "Age": age, "Weight": weight, "Address": address, "PhoneNumber": phoneNumber, "uri": image };
    //SAVE
    await KittenStorage.writeItem(new_data);
    //REDIRECT TO
    navigation.navigate("Kitten");
};


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Cat's name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name..."
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter age..."
            value={age}
            onChangeText={(text) => setAge(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Weight</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter weight..."
            value={weight}
            onChangeText={(text) => setWeight(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter address..."
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number ..."
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>image</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter URL ..."
            value={image}
            onChangeText={(text) => setImage(text)}
          />
        </View>
      </ScrollView>
      <Button title="SAVE" color="lightblue" onPress={saveKitten} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
