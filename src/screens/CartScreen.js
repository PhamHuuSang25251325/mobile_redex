import React, { useContext, useEffect } from 'react';
import { View, Text, Image, FlatList,TouchableOpacity, SafeAreaView,Alert} from 'react-native';
import CustomHeader from '../shared/CustomHeader';
import { Context as CartContext } from '../contexts/CartContext';
import Images from '../constants/images';
import Tools from '../helper/Tools';

const CartScreen = ({ navigation }) => {
    const { data, getItems ,deleteItem} = useContext(CartContext);
    useEffect(() => {
        getItems();
    }, [])

    

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Giỏ hàng" navigation={navigation} isHome={true} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f8fa' }}>
                <FlatList
                    data={data.listItem}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View id={item.id} style={{ borderColor: '#ddd', borderWidth: 1, marginTop: 20, borderRadius: 5, padding: 10, backgroundColor: '#ffffff', width: 380 }}>
                            <View>
                                <Text>{item.shop_name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', borderColor: '#ddd', borderWidth: 1 }}>
                                <View style={{ flex: 2.5 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("OrderSite1", {
                                        uri: item.url
                                    })}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={{ uri: `https:${item.image_link}` }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 7.5,marginLeft: 20 }}>
                                    <View style={{borderBottomWidth : 1, borderBottomColor : '#ddd', flex : 2,flexDirection : 'row' , alignContent : "center"}} >
                                        <Text style={{textAlign : "center",flex : 9}}>TÊN SẢN PHẨM</Text>
                                        <TouchableOpacity style={{flex : 1}} onPress={()=>Tools.confimDelete(item.id,deleteItem)}>
                                            <Image source={Images.trash} style={{width :25,height : 25}}/>
                                        </TouchableOpacity>
                                    </View>
                                    <View >
                                        <Text>Link SP</Text>
                                    </View>
                                    <View >
                                        <Text>Link SP</Text>
                                    </View>
                                    <View >
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