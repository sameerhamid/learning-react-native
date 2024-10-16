import {useState} from 'react';
import AuthContent from '../../common/components/Auth/AuthContent';
import {createUser} from '../../common/components/utils/http';
import LoadingOverlay from '../../common/components/ui/LoadingOverlay';
import {Alert} from 'react-native';

function SignupScreen() {
  // states
  const [loading, setLoading] = useState<boolean>(false);

  // singup handler function
  const signUpHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      createUser(email, password);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user. Please check your credentials and try again later',
      );
    }
    setLoading(false);
  };

  if (loading) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
