import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native';
import PicMature from "../components/PicMature";

export default function Mature() {
    const navigation = useNavigation();
  const [matures, setMatures] = useState([]);

  const loadMatures = async () => {
    try {
      let response = await fetch('https://raw.githubusercontent.com/Xuli2317/Pictures/main/Mature/Pictures/Api.json');
      let data = await response.json();
      setMatures(data);
    } catch (error) {
      console.error("Error loading matures:", error);
    }
  };

  useEffect(() => {
    loadMatures();
  }, []);

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
          data={matures}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          refreshing={refresh}
          onRefresh={() => { loadMatures(); }}
          renderItem={({ item, index }) => (<MatureItem item={item} index={index} />)}
        />
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