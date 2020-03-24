
import React from 'react';
import NavigatorConatiner from './src/navigation/NavigatorContainer';
import { Provider as AuthProvider } from './src/contexts/AuthContext'
import { Provider as CartProvider } from './src/contexts/CartContext'
import { Provider } from 'react-redux';
import store from './src/store';



const App = () => {
  return (
    <Provider store={store} >
      <AuthProvider >
        <CartProvider>
          <NavigatorConatiner />
        </CartProvider>
      </AuthProvider>
    </Provider>

  )
}



export default App;
