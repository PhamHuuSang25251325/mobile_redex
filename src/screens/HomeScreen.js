import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../shared/CustomHeader';


const HomeScreen = ({ navigation }) => {
   
    const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxhKJ7z3CxlyYYicCkJHS_6VEricDLKfD9VALObOTjLIm8AVU0';
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Home" navigation={navigation} isHome={true} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri }}
                />
                <Text>TRANG CHỦ</Text>
            </View>
            
        </SafeAreaView>

    )
}



export default HomeScreen;