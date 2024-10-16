import {Alert, Text, View} from 'react-native';
import AuthContent from '../../common/components/Auth/AuthContent';
import {useContext, useState} from 'react';
import {loginUser} from '../../common/components/utils/http';
import LoadingOverlay from '../../common/components/ui/LoadingOverlay';
import {AuthContext} from '../../common/store/auth-context';

function LoginScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const {authenticate} = useContext(AuthContext);

  // login handler
  const loginHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      const token = await loginUser(email, password);
      setLoading(false);
      authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not log you in. Please check your credentials and try again later',
      );
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingOverlay message="Loging in user..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
