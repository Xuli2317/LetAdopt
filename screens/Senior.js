import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import PicKitty from "../components/PicKitty";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native';
import PicSenior from "../components/PicSenior";

export default function Senior() {
    const navigation = useNavigation();
  const [seniors, setSeniors] = useState([]);

  const loadSeniors = async () => {
    try {
      let response = await fetch('https://raw.githubusercontent.com/Xuli2317/Pictures/main/Senior/Pictures/Api.json');
      let data = await response.json();
      setSeniors(data);
    } catch (error) {
      console.error("Error loading seniors:", error);
    }
  };

  useEffect(() => {
    loadSeniors();
  }, []);

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
          data={seniors}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          refreshing={refresh}
          onRefresh={() => { loadSeniors(); }}
          renderItem={({ item, index }) => (<SeniorItem item={item} index={index} />)}
        />
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