import jwt from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';

export const checkExpriedToken = store => next =>async action => {
    try {
        console.log(action);
        
        const userToken = await AsyncStorage.getItem('userToken');
        if(!userToken){
            store.dispatch({
                type : 'LOGOUT'
            })
            return next(action);
        }
        const tokenDecode =jwt(userToken);
        return next(action);
    } catch (error) {
        console.log(error);
    }
   
  }