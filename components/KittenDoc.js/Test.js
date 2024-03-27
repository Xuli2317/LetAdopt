import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Test(props) {
    return (
        <View style={{ padding : 0 , flexDirection:"column", alignSelf:"center"}}>
            <Image style={{ width: 200, height: 150, borderRadius:10, }} source= {{ uri: "https://raw.githubusercontent.com/Xuli2317/Mobile-Application/main/Project/pexels-pixabay-257532.jpg" }} />
            <View style={{ }}>
                <Text style={{ fontSize : 20 , alignSelf:"center", backgroundColor: '#eeeeee', padding: 5, borderRadius:10 , marginTop:10}}>Bob</Text>
                <Text style={{ fontSize : 15 , alignSelf:"center",  padding: 5, borderRadius:10 , marginTop:10}}> Age 11 Month</Text>
            </View>
            
            
        </View>                   
    );        
}

