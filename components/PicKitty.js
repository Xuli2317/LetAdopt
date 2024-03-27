import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function PicKitten(props) {
    const tours = [
        {
            "name": "Newyear",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Mobile-Application/main/Project/Image%20(5).jpg",
            "Age": "1 year",
            "Height": "20 cm",
            "Phonenumber": "191",
            "Address": "Bangkok"
        },
        {
            "name": "Newday",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Mobile-Application/main/Project/Image%20(4).jpg",
            "Age": "1 year",
            "Height": "20 cm",
            "Phonenumber": "191",
            "Address": "Bangkok"

        },
        {
            "name": "Kitty",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Mobile-Application/main/Project/Image%20(3).jpg",
            "Age": "1 year",
            "Height": "20 cm",
            "Phonenumber": "191",
            "Address": "Bangkok"

        }];

    return (
        <ScrollView>
            
        
        <View style={props.style}>
            <Text style={{ fontSize: 20, textAlign: 'left', color: "black", fontWeight: "bold" }}> 0-1 year Kitten</Text>
            <FlatList
                horizontal={true}
                data={tours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image style={{ width: 200, height: 150, borderRadius: 10, }} source={{ uri: item.uri }} />
                                <View style={{}}>
                                    <Text style={{ fontSize: 20, alignSelf: "flex-start", backgroundColor: '#eeeeee', padding: 5, borderRadius: 10, marginTop: 10 }}>Name: {item.name}</Text>
                                    <Text style={{ fontSize: 15, alignSelf: "flex-start", padding: 5, borderRadius: 10, marginTop: 10 }}>Age: {item.Age}</Text>
                                    <Text style={{ fontSize: 15, alignSelf: "flex-start", padding: 5, borderRadius: 10, marginTop: 10 }}>Height: {item.Height}</Text>
                                    <Text style={{ fontSize: 15, alignSelf: "flex-start", padding: 5, borderRadius: 10, marginTop: 10 }}>Addreess: {item.Address}</Text>
                                    <Text style={{ fontSize: 15, alignSelf: "flex-start", padding: 5, borderRadius: 10, marginTop: 10 }}>PhoneNumber: {item.Phonenumber}</Text>
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            /><FlatList>
            </FlatList>
        </View>
        </ScrollView>
    );
}


