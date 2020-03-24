import React, { useContext, useEffect } from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import CustomHeader from '../../shared/CustomHeader';
// import { Context as CartContext } from '../../contexts/CartContext';
import Cart from '../../components/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, updateItem, getItems } from '../../action/cart.action';


const CartScreen = ({ navigation }) => {
    const data = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const onDelete = (id)=>{
        dispatch(deleteItem(id))
    }

    const onUpdateItem = (item)=>{
        dispatch(updateItem(item))
    }
    // const { data, getItems, deleteItem, updateItem } = useContext(CartContext);
    useEffect(() => {
        dispatch(getItems());
    }, [])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Giỏ hàng" navigation={navigation} isHome={true} />
            {data.loading ?
                (
                    <View style={{ alignItems: 'center', flex: 1, alignContent: 'center' }}>
                        <ActivityIndicator size="large" />
                    </View>
                )
                :
                (
                    <Cart data={data.listItem} deleteItem={onDelete} updateItem={onUpdateItem} navigation={navigation} />
                )}

        </SafeAreaView>

    )
}



export default CartScreen;