import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function PicAdult(props) {
    const tours = [
        {
            "title": "B",
            "url": "https://cdn2.thecatapi.com/images/57h.jpg",
            "width": 500,
            "height": 334
        },
        {
            "title": "C",
            "url": "https://cdn2.thecatapi.com/images/abm.jpg",
            "width": 530,
            "height": 397
        },
        {
            "title": "D",
            "url": "https://cdn2.thecatapi.com/images/bbe.png",
            "width": 500,
            "height": 335
        }
    ];


    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20, textAlign: 'left', color: "black", fontWeight: "bold" }}> 1-7 years Adult</Text>
            <FlatList
                horizontal={true}
                data={tours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.url);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image style={{ width: 200, height: 150, borderRadius:10}} source= {{ uri: item.url }} />
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

