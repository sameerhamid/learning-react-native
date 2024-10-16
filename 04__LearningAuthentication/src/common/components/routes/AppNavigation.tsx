import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '../../constants/styles';
import WelcomeScreen from '../../../screens/welcome';
import {NavScreenTags} from '../../constants/NavScreenTags';
import {navigationRef} from '../utils/navigatorUtils';
import LoginScreen from '../../../screens/login';
import SignupScreen from '../../../screens/signup';

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
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthStack />
    </NavigationContainer>
  );
}
