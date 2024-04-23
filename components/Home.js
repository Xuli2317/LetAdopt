import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TextInput, Text, Button, } from "react-native";
import MyIcon from "./MyIcon";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={{ marginHorizontal: 20, marginTop: -50, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white' }}>
            <View style={{ backgroundColor: '#eeeeee', padding: 10, borderRadius: 10, marginTop:10 }} >
                <TextInput style={{ fontSize: 15 }} placeholder="Let's adopt cat!" />
            </View>
            <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-around" }}>
                <MyIcon title="Kitten" name="paw" size={30} color="orange" onPress={()=>{ navigation.navigate("Kitten"); }} />
                <MyIcon title="Adult" name="paw" size={30} color="orange"  onPress={()=>{ navigation.navigate("Adult"); }} />
                <MyIcon title="Mature" name="paw" size={30} color="orange" onPress={()=>{ navigation.navigate("Mature"); }} />
                <MyIcon title="Senior" name="paw" size={30} color="orange" onPress={()=>{ navigation.navigate("Senior"); }}/>
            </View>
            

        </View>
    );
}
