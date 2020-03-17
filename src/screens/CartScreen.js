import React, { useContext } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../shared/CustomHeader';


const CartScreen = ({ navigation }) => {
    const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxhKJ7z3CxlyYYicCkJHS_6VEricDLKfD9VALObOTjLIm8AVU0';
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Giỏ hàng" navigation={navigation} isHome={true} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor : '#f5f8fa' }}>
                <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => (
                        <View style={{ borderColor: '#ddd', borderWidth: 1, marginTop: 20, borderRadius : 5 , padding : 10, backgroundColor : '#ffffff',  width: 380}}>
                            <View>
                                <Text>Card Header</Text>
                            </View>
                            <View style={{ flexDirection: 'row', borderColor: '#ddd', borderWidth: 1 }}>
                                <View style={{ flex: 2.5 }}>
                                    <Image
                                        style={{ width: 100, height: 100 }}
                                        source={{ uri }}
                                    />
                                </View>
                                <View style={{ flex: 7.5, borderColor: '#ddd', borderWidth: 1, marginLeft : 10 }}>
                                    <View style={{borderColor: '#ddd', borderWidth: 1}} >
                                        <Text>Link SP</Text>
                                    </View>
                                    <View style={{borderColor: '#ddd', borderWidth: 1}}>
                                        <Text>Link SP</Text>
                                    </View>
                                    <View style={{borderColor: '#ddd', borderWidth: 1}}>
                                        <Text>Link SP</Text>
                                    </View>
                                    <View style={{borderColor: '#ddd', borderWidth: 1}}>
                                        <Text>Link SP</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>

    )
}



export default CartScreen;