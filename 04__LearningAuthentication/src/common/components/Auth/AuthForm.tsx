import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Input from './Input';
import Button from '../ui/Button';

type CredentialsInvalid = {
  email: boolean;
  confirmEmail?: boolean;
  password: boolean;
  confirmPassword?: boolean;
};

type AuthFormProps = {
  isLogin: boolean;
  onSubmit: (credentials: {
    email: string;
    confirmEmail?: string;
    password: string;
    confirmPassword?: string;
  }) => void;
  credentialsInvalid: CredentialsInvalid;
};

function AuthForm({isLogin, onSubmit, credentialsInvalid}: AuthFormProps) {
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] =
    useState<string>('');

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(
    inputType: 'email' | 'confirmEmail' | 'password' | 'confirmPassword',
    enteredValue: string,
  ) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: !isLogin ? enteredConfirmEmail : undefined,
      password: enteredPassword,
      confirmPassword: !isLogin ? enteredConfirmPassword : undefined,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Email Address"
          onUpdateValue={value => updateInputValueHandler('email', value)} // Directly pass the input type and value
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            onUpdateValue={value =>
              updateInputValueHandler('confirmEmail', value)
            } // Directly pass the input type and value
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
          />
        )}
        <Input
          label="Password"
          onUpdateValue={value => updateInputValueHandler('password', value)} // Directly pass the input type and value
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={value =>
              updateInputValueHandler('confirmPassword', value)
            } // Directly pass the input type and value
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
  form: {},
});
