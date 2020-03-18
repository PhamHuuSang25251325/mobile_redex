import React, { useContext } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from '../screens/HomeScreen';
import CartScreen from "../screens/CartScreen";
import OrderScreen from "../screens/OrderScreen";
import OrderSiteView from "../screens/OrderSiteView";
import { SafeAreaView, ScrollView, TouchableOpacity, Text, View, Image } from "react-native";
import Images from '../constants/images';
import { Context } from '../contexts/AuthContext';
import ForgotPassScreen from "../screens/ForgotPassScreen";

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen
                component={LoginScreen}
                name="Login"
            />
            <AuthStack.Screen
                component={RegisterScreen}
                name="Register"
            />
              <AuthStack.Screen
                component={ForgotPassScreen}
                name="Forgot"
            />
        </AuthStack.Navigator>
    )
}

const OrderStack = createStackNavigator();
const OrderNavigator = () => {
    return (
        <OrderStack.Navigator initialRouteName="Order" headerMode="none">
            <OrderStack.Screen
                component={OrderScreen}
                name="Order"
            />
            <OrderStack.Screen
                component={OrderSiteView}
                name="OrderSite"
            />
        </OrderStack.Navigator>
    )
}

const CartStack = createStackNavigator();
const CartNavigator = () => {
    return (
        <CartStack.Navigator initialRouteName="Cart" headerMode="none">
            <CartStack.Screen
                component={CartScreen}
                name="Cart"
            />
            <CartStack.Screen
                component={OrderSiteView}
                name="OrderSite1"
            />
        </CartStack.Navigator>
    )
}

const CustomDrawerContent = ({ navigation },logout) => {
 
    return (
        <SafeAreaView style={{ flex: 1, marginLeft: 20 }}>
            <ScrollView>
                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 30, marginRight: 10 }} source={Images.home} />
                        <Text>TRANG CHỦ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 30, marginRight: 10 }} source={Images.cart} />
                        <Text>GIỎ HÀNG</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={() => navigation.navigate('Order')}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 30, marginRight: 10 }} source={Images.order} />
                        <Text>ĐẶT HÀNG</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity
                style={{ height: 45, backgroundColor: 'red', justifyContent: 'center', marginTop: 20 }}
                onPress={logout}
            >
                <Text style={{ textAlign: 'center' }}>ĐĂNG XUẤT</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const MainDrawer = createDrawerNavigator();
const MainNavigator = () => {
    const { logout } = useContext(Context);
    return (
        <MainDrawer.Navigator
            drawerContent={props => CustomDrawerContent(props,logout)}>

            <MainDrawer.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'TRANG CHỦ' }}
            />
            <MainDrawer.Screen
                name="Cart"
                component={CartNavigator}
                options={{ title: 'GIỎ HÀNG' }}
            />
            <MainDrawer.Screen
                name="Order"
                component={OrderNavigator}
                options={{ title: 'ĐẶT HÀNG' }}

            />
        </MainDrawer.Navigator>
    )
}

const RootStack = createStackNavigator();
const RootNavigator = ({ userToken }) => {
    return (
        <RootStack.Navigator headerMode="none">
            {userToken ? (
                <RootStack.Screen
                    name="App"
                    component={MainNavigator}
                />
            ) : (
                    <RootStack.Screen
                        name="Auth"
                        component={AuthNavigator}
                    />
                )}
        </RootStack.Navigator>
    )
}

export default RootNavigator;

