import {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import AuthForm from './AuthForm';
import FlatButton from '../ui/FlatButton';
import {Colors} from '../../constants/styles';
import {replace} from '../utils/navigatorUtils';
import {NavScreenTags} from '../../constants/NavScreenTags';

interface AuthContentTypes {
  isLogin?: boolean;
  onAuthenticate?: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => void;
}

export interface UserDataTypes {
  email: string;
  password: string;
  confirmPassword?: string;
  confirmEmail?: string;
}
function AuthContent({isLogin, onAuthenticate}: AuthContentTypes) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    replace(isLogin ? NavScreenTags.SIGNUP_SCREEN : NavScreenTags.LOGIN_SCREEN);
  }

  function submitHandler(credentials: UserDataTypes) {
    let {email, confirmEmail, password, confirmPassword} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate?.({email, password});
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin || false}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Create a new user' : 'Log in instead'}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});
