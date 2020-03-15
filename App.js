

import React from 'react';
import AppNavigatorContainer from './src/navigators/AppNavigatorContainer';
import { Provider as TestProvider } from './src/contexts/TestContext'
import { Provider as AuthProvider } from './src/contexts/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <TestProvider>
        <AppNavigatorContainer />
      </TestProvider>
    </AuthProvider>


  )
}


export default App;
