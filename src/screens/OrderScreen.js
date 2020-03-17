import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../shared/CustomHeader';
import { Context as AuthContext } from '../contexts/AuthContext';
import Images from '../constants/images';

const { width: WIDTH } = Dimensions.get('window');
const OrderScreen = ({ navigation }) => {
    const { logout } = useContext(AuthContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="ĐẶT HÀNG" navigation={navigation} isHome={true} />
            <View style={styles.listLogoContainer}>
                <View style={styles.logoContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('OrderSite', {
                            uri: 'https://www.taobao.com/',
                            title : 'TAOBAO.COM'
                        })
                    }}>
                        <Image style={styles.image} source={Images.taobao_logo} />
                    </TouchableOpacity>
                </View>
                <View style={styles.logoContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('OrderSite', {
                            uri: 'https://www.tmall.com/',
                            title : 'TMALL.COM'
                        })
                    }}>
                        <Image style={styles.image} source={Images.tmall_logo} />
                    </TouchableOpacity>
                </View>
                <View style={styles.logoContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('OrderSite', {
                            uri: 'https://www.1688.com/',
                            title : '1688.COM'
                        })
                    }}>
                        <Image style={styles.image} source={Images.s1688_logo} />
                    </TouchableOpacity>
                </View>
            </View>



        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    listLogoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        marginTop: 20
    },
    image: {
        width: WIDTH - 55,
        height: 150
    }
})



export default OrderScreen;