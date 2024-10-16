import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../components/utils/navigatorUtils';
import {Colors} from '../constants/styles';
import LoginScreen from '../../screens/login';
import SignupScreen from '../../screens/signup';
import WelcomeScreen from '../../screens/welcome';
import {NavScreenTags} from '../constants/NavScreenTags';
import {useContext} from 'react';
import {AuthContext} from '../store/auth-context';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100},
      }}>
      <Stack.Screen name={NavScreenTags.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={NavScreenTags.SIGNUP_SCREEN}
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100},
      }}>
      <Stack.Screen
        name={NavScreenTags.WELCOME_SCREEN}
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  const {isAuthenticated} = useContext(AuthContext);
  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
