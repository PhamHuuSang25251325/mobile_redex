

import React from 'react';
import AppNavigatorContainer from './src/navigators/AppNavigatorContainer';
import { Provider as TestProvider } from './src/contexts/TestContext'
import { Provider as AuthProvider } from './src/contexts/AuthContext'
import { Provider as CartProvider } from './src/contexts/CartContext'

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <TestProvider>
          <AppNavigatorContainer />
        </TestProvider>
      </CartProvider>
    </AuthProvider>


  )
}


export default App;
