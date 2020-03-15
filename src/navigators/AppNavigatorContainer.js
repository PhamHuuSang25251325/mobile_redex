import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./AppNavigator";
import { Context } from '../contexts/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, View } from 'react-native';

const AppNavigatorContainer = () => {
    const { data, restoreToken } = useContext(Context);
    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
            }

            restoreToken(userToken)
        };
        bootstrapAsync();
    }, [])

    if (data.isLoading) {   
        return (
            <View>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <NavigationContainer>
            <RootNavigator userToken={data.userToken} />
        </NavigationContainer>
    )
}

export default AppNavigatorContainer;