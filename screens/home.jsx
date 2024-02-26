import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { StatusBar, View } from "react-native";

Home = () => {
    return (
        <View style={{ backgroundColor: 'black', height: '100' }}>
            <StatusBar backgroundColor='black' barStyle="dark-content" animated={true} />
            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: '15',
                alignItems: 'center'
            }}>
                <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
                <Text style={{ fontFamily: "Lobster-Regular", fontSize: 25, fontWeight: '500' }}>
                    Instagram
                </Text>
                <Feather name="navigation" style={{ fontSize: 24 }} />
            </View>
            
        </View>
    )
}

export default Home;