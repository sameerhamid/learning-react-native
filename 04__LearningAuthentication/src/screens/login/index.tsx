import {Alert, Text, View} from 'react-native';
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
    setLoading(true);
    try {
      loginUser(email, password);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not log you in. Please check your credentials and try again later',
      );
    }

    setLoading(false);
  };

  if (loading) {
    return <LoadingOverlay message="Loging in user..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
