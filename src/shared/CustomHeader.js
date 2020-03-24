import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Images from '../constants/images';
import { Context } from '../contexts/AuthContext';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import {logout} from '../modules/auth/redux/action';


const CustomHeader = ({ title, navigation, isHome }) => {
    const dispatch = useDispatch();
    // const { logout } = useContext(Context);
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                {isHome ? (
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Feather name="menu" size={20} />
                    </TouchableOpacity>
                ) : (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Feather name="arrow-left" size={20}/>
                        </TouchableOpacity>
                    )}
            </View>
            <View style={styles.title}>
                <Text style={styles.textTitle}>{title}</Text>
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <AntDesign name="home" color="gray" size={20} />
                    </TouchableOpacity>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <AntDesign name="shoppingcart" color="blue" size={20} />
                    </TouchableOpacity>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={()=>dispatch(logout())}>
                        <AntDesign name="logout" color="red" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : { flexDirection: 'row', height: 50, marginLeft: 5 },
    menu : { flex: 1, justifyContent: "center" },
    title : { flex: 1.5, justifyContent: 'center' },
    textTitle : { textAlign: 'center', color: '#697683' },
    iconContainer : { flex: 1, flexxDirection: 'row' },
    icon : { flex: 1, justifyContent: 'center' },



})

export default CustomHeader;