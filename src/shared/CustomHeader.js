import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Images from '../constants/images';

const CustomHeader = ({ title, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', height: 50 }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Image style={{ width: 30, height: 30, marginLeft: 5 }}
                        source={Images.menu}
                        resizeMode="contain"

                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>{title}</Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CustomHeader;