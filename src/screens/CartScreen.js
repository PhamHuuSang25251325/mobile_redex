import React, { useContext ,useEffect} from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../shared/CustomHeader';
import { Context as CartContext } from '../contexts/CartContext';

const CartScreen = ({ navigation }) => {
    const {data,getItems} = useContext(CartContext);
    useEffect(()=>{
        getItems();
    },[])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Giỏ hàng" navigation={navigation} isHome={true} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor : '#f5f8fa' }}>
                <FlatList
                    data={data.listItem}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={({ item }) => (
                        <View id={item.id} style={{ borderColor: '#ddd', borderWidth: 1, marginTop: 20, borderRadius : 5 , padding : 10, backgroundColor : '#ffffff',  width: 380}}>
                            <View>
                            <Text>{item.shop_name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', borderColor: '#ddd', borderWidth: 1 }}>
                                <View style={{ flex: 2.5 }}>
                                    <Image
                                        style={{ width: 100, height: 100 }}
                                        source={{ uri : `https:${item.image_link}` }}
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