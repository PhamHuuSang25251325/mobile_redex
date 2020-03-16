import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Images from '../constants/images';
import {Context} from '../contexts/AuthContext';

const CustomHeader = ({ title, navigation }) => {
    const {logout} = useContext(Context);
    return (
        <View style={{ flexDirection: 'row', height: 50 , backgroundColor : '#FB5B04'}}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={{ width: 30, height: 30, marginLeft: 5 }}
                        source={Images.menu}
                        resizeMode="contain"

                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>{title}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image style={{ width: 25, height: 25, marginLeft: 5 }}
                            source={Images.home}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() =>  navigation.navigate('Cart')}>
                        <Image style={{ width: 25, height: 25, marginLeft: 5 }}
                            source={Images.cart}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity onPress={logout}>
                        <Image style={{ width: 25, height: 25, marginLeft: 5 }}
                            source={Images.logout}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CustomHeader;