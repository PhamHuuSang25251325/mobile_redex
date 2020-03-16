import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from '../screens/HomeScreen';
import CartScreen from "../screens/CartScreen";
import OrderScreen from "../screens/OrderScreen";
import OrderSiteView from "../screens/OrderSiteView";

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

const MainDrawer = createDrawerNavigator();
const MainNavigator = () => {
    return (
        <MainDrawer.Navigator>
            <MainDrawer.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'TRANG CHỦ' }}
            />
            <MainDrawer.Screen
                name="Cart"
                component={CartScreen}
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

