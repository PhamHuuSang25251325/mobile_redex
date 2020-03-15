import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../shared/CustomHeader';
import {Context} from '../contexts/TestContext';


const CartScreen = ({ navigation }) => {
    const { data, ...actions } = useContext(Context);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Giỏ hàng" navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Cart</Text>
                <Text>{data}</Text>
                <Button onPress={actions.up} title="UP"></Button>
            </View>
        </SafeAreaView>

    )
}



export default CartScreen;