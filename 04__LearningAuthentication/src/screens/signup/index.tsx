import {useState} from 'react';
import AuthContent from '../../common/components/Auth/AuthContent';
import {createUser} from '../../common/components/utils/http';
import LoadingOverlay from '../../common/components/ui/LoadingOverlay';

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
    await createUser(email, password);
    setLoading(false);
  };

  if (loading) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
