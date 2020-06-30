import React from 'react';
import Routes from './Routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/auth';

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
      
  );
}

export default App;
