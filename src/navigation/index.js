import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from '../features/onboarding/landing/landing.screen';
import Login from '../features/onboarding/login/login.screen';
import PhoneConnect from '../features/connect/phone-connect.screen.js';
import ValidateConnect from '../features/validate/validate-connect.screen';
import SignOutConnect from '../features/signout/phone-signout.screen';
const Stack = createNativeStackNavigator();

const rootContainer = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               headerShown: false,
               headerStyle: {
                backgroundColor: '#ff3537',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '900',
                fontSize: 20              
              },
              headerTitleAlign: 'center'
            }}
         >
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen options={{headerShown: true, title: 'Connexion'}} name="login" component={Login} />
        <Stack.Screen options={{headerShown: true, title: 'Connexion'}} name="PhoneConnect" component={PhoneConnect} />
        <Stack.Screen options={{headerShown: true, title: 'Connexion'}} name="validateConnect" component={ValidateConnect} />
        <Stack.Screen options={{headerShown: true, title: 'Connecté'}} name="signOutConnect" component={SignOutConnect} />
        </Stack.Navigator>
      </NavigationContainer>
   );
};
export default rootContainer;
