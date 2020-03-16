import React , { useContext} from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../shared/CustomHeader';
import {Context as AuthContext} from '../contexts/AuthContext';


const OrderSiteView = ({navigation}) => {
    const {logout}= useContext(AuthContext);
    return (
        <SafeAreaView style={{flex : 1}}>
            <CustomHeader title="Site View" navigation={navigation}/>
            <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Text>Order Site View</Text>
                
            </View>
        </SafeAreaView>

    )
}



export default OrderSiteView;