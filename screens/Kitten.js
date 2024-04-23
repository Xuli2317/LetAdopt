import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import PicKitty from "../components/PicKitty";
import { useNavigation } from "@react-navigation/native";
import KittenStorage from "../storages/KittenStorage";
import { Image } from 'react-native';
import PicKitten from "../components/PicKitty";

export default function Kitten(props) {
  const navigation = useNavigation();
  const [kittens, setKittens] = useState([
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
    }]);

  const loadKittens = async () => {
    try {
      let kittens = await KittenStorage.readItems();
      setKittens(kittens);
    } catch (error) {
      console.error("Error loading kittens:", error);
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadKittens();
    });
    return unsubscribe;
  }, [navigation]);
  const [refresh, setRefresh] = useState(false);

  const KittenItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => { navigation.navigate("KittenDetail", { "id": item.id }); }}
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


  const handleAddKitten = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={kittens}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          refreshing={refresh}
          onRefresh={() => { loadKittens(); }}
          renderItem={({ item, index }) => (<KittenItem item={item} index={index} />)}
        />
        <TouchableOpacity
          onPress={() => { navigation.navigate("Kitten Form", { "id": null }); }}
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
          <PicKitty />
        </View>
        <View style={{ marginLeft: 20 }}>
          {/* {handleAddKitten()} */}
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