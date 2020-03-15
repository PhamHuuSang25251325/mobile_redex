import React, { useContext,useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import Images from './../constants/images';
import { TextInput } from 'react-native-gesture-handler';
import { Context } from '../contexts/AuthContext';

const { width: WIDTH } = Dimensions.get('window');

const LoginScreen = () => {
    const { data, login } = useContext(Context);
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    return (
        <ImageBackground source={Images.background_login} style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
                <Image source={Images.logo} style={styles.logo} />
                <Text style={styles.text}>REDEX ORDER</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    value={username}
                    onChangeText={setUsername}
                    placeholderTextColor='rgba(255,255,255,0.7)'

                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholderTextColor='rgba(255,255,255,0.7)'

                />
                {/* <Text style={styles.textError}>Mật khẩu không được để trống</Text> */}
            </View>
            <TouchableOpacity onPress={()=>login({username,password})} style={styles.btnLogin} disabled={data.logginIn}>
                {data.logginIn ? (<ActivityIndicator />) : (
                    <Text style={styles.btnText}>Login</Text>
                )}
            </TouchableOpacity>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50
    },
    logo: {
        width: 120,
        height: 120
    },
    text: {
        color: 'pink',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25
    },
    inputContainer: {
        marginTop: 10
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },
    btnText: {
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
        fontSize: 16
    },
    textError: {
        color: 'red',
        fontSize: 14,
        marginLeft : 40
    }

})

export default LoginScreen;