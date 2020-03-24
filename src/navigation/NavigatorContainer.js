import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
// import { Context } from '../contexts/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, View } from 'react-native';
import Drawer from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { createStackNavigator } from "@react-navigation/stack";
import { logout, refreshToken} from '../modules/auth/redux/action';
import { useDispatch, useSelector } from 'react-redux';

const NavigatorConatiner = () => {
    // const { data, logout, refreshToken } = useContext(Context);
    const dispatch = useDispatch();
    const isLoading= useSelector(state=>state.authReducer.isLoading)
    const userToken= useSelector(state=>state.authReducer.userToken)
    useEffect(() => {
        const bootstrapAsync = async () => {
            const userToken = await AsyncStorage.getItem('userToken');
            if (!userToken) {
                dispatch(logout());
            } else {
                dispatch(refreshToken());
            }

        };
        bootstrapAsync();
    }, [])


    if (isLoading) {
        return (
            <View>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <NavigationContainer>
              <RootNavigator userToken={userToken} />
        </NavigationContainer>
    )
}

const RootStack = createStackNavigator();
const RootNavigator = ({ userToken }) => {
    return (
        <RootStack.Navigator headerMode="none">
            {userToken ? (
                <RootStack.Screen
                    name="App"
                    component={Drawer}
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

export default NavigatorConatiner;