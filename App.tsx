import { StatusBar } from 'expo-status-bar';
import { Login } from './src/screens/Login';
import { AuthProvider } from './src/hooks/useAuth';
import { Register } from './src/screens/Register';
import { Cadastro } from './src/screens/Cadastro';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthProvider>
        {/* <Cadastro /> */}
      {/* <Register /> */}
      <Login />
      </AuthProvider>
    </>
  );
}


