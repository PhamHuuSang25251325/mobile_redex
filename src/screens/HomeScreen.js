import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../shared/CustomHeader';
import { Context as AuthContext } from '../contexts/AuthContext';


const HomeScreen = ({ navigation }) => {
    const uri = 'http://img.alicdn.com/imgextra/i2/1751590872/TB2J9.ZnVXXXXbmXXXXXXXXXXXX_!!1751590872.jpg_150x150q75.jpg_.webp';
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Home" navigation={navigation} isHome={true} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri }}
                />
            </View>
        </SafeAreaView>

    )
}



export default HomeScreen;