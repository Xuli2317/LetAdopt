import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, Text, View, StyleSheet, FlatList, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import PicKitty from "../components/PicKitty";
import { useNavigation } from "@react-navigation/native";

export default function Kitten(props) {
  const navigation = useNavigation();
  const [kittens, setKittens] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const loadKittens = async () => {
    try {
      const response = await fetch('http://localhost:8001/kittens');
      const data = await response.json();
      setKittens(data);
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

  const KittenItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => { navigation.navigate("KittenDetail", { id: item.id }); }}
      style={{ marginRight: 20, borderRadius: 10, backgroundColor: '#fff', elevation: 3, width: 250, marginBottom: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <Image style={{ width: '100%', height: 350, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
      </View>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', backgroundColor: 'coral', paddingVertical: 8, borderRadius: 10 }}> {item.name} </Text>
        <View style={{ fontSize: 16, marginBottom: 8, color: '#555', marginLeft: 10 }}>
          <Text>Age: {item.Age}</Text>
          <Text>Weight: {item.Weight}</Text>
          <Text>Address: {item.Address}</Text>
          <Text>PhoneNumber: {item.Phonenumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.content, { justifyContent: "center" }]}>
          <PicKitty />
        </View>
        <View style={{ marginLeft: 20 }}>
          <FlatList
            data={kittens}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            refreshing={refresh}
            onRefresh={() => { loadKittens(); }}
            renderItem={({ item, index }) => (<KittenItem item={item} index={index} />)}
          />
        </View>
        <TouchableOpacity
          onPress={() => { navigation.navigate("Kitten Form", { id: null }); }}
          style={{
            backgroundColor: "lightblue",
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
  content: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});