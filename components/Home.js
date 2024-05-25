import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TextInput, Text, Button, } from "react-native";
import MyIcon from "./MyIcon";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={{ marginHorizontal: 20, padding: 10 }}>
            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
                <MyIcon title="Kitten" name="paw" size={30} color="#91837a" onPress={()=>{ navigation.navigate("Kitten"); }} />
                <MyIcon title="Adult" name="paw" size={30} color="#d4ca84"  onPress={()=>{ navigation.navigate("Adult"); }} />
                <MyIcon title="Mature" name="paw" size={30} color="#a4a6b4" onPress={()=>{ navigation.navigate("Mature"); }} />
                <MyIcon title="Senior" name="paw" size={30} color="#aeb4a4" onPress={()=>{ navigation.navigate("Senior"); }}/>
            </View>
            
        </View>
    );
}
