import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function PicSenior(props) {
    const tours = [
        {
            "title": "Newyear",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Mobile-Application/main/Project/Image%20(5).jpg",

        },
        {
            "title": "Newday",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Mobile-Application/main/Project/Image%20(4).jpg",

        },
        {
            "title": "Kitty",
            "uri": "https://raw.githubusercontent.com/Xuli2317/Mobile-Application/main/Project/Image%20(3).jpg",

        }];


    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20, textAlign: 'left', color: "black", fontWeight: "bold" }}> 12 years + Senior</Text>
            <FlatList
                horizontal={true}
                data={tours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image style={{ width: 200, height: 150, borderRadius:10}} source= {{ uri: item.uri }} />
                                <Text style={{ fontSize: 15, textAlign:"center" , color:"black"}}>{ item.title }</Text>
                            </View>                   
                        );
                    }
                }
                keyExtractor={item => item.id}
            /><FlatList>
            </FlatList>
        </View>
    );
}

