import {Text, View} from 'react-native';
import AuthContent from '../../common/components/Auth/AuthContent';
import {useState} from 'react';
import {loginUser} from '../../common/components/utils/http';
import LoadingOverlay from '../../common/components/ui/LoadingOverlay';

function LoginScreen() {
  const [loading, setLoading] = useState<boolean>(false);

  // login handler
  const loginHandler = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    loginUser(email, password);
  };

  if (loading) {
    return <LoadingOverlay message="Loging in user..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
