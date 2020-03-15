import React , { useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../shared/CustomHeader';
import {Context as AuthContext} from '../contexts/AuthContext';


const HomeScreen = ({navigation}) => {
    const {logout}= useContext(AuthContext);
    return (
        <SafeAreaView style={{flex : 1}}>
            <CustomHeader title="Home" navigation={navigation}/>
            <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Text>Home!!</Text>
                <TouchableOpacity onPress={logout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}



export default HomeScreen;