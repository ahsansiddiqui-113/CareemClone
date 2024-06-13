<<<<<<< HEAD
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen.js';
import LoginScreen from './Screens/Login.js';
import RegistrationScreen from './Screens/RegistrationScreen.js';
import HomePage from './Screens/HomePage.js';
import ProfileScreen from './Screens/ProfileScreen.js';
import ExploreScreen from './Screens/ExploreScreen.js';
import SettingPage from './Screens/Setting.js';
import AccountSetting from './Screens/AccountSetting.js';
import PessengerRegistration from './Screens/Passenger/PessengerRegistration.js';
import PassengerFeatures from './Screens/Passenger/PessengerFeature.js';
import PrivacySettingsScreen from './Screens/PrivacySetting.js';
import NotificationSettings from './Screens/Notification.js';
import HomeDriver from './Screens/HomeDriver.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Setting" component={SettingPage}/>
        <Stack.Screen name="Account" component={AccountSetting}/>
        <Stack.Screen name='Features' component={PassengerFeatures}/>
        <Stack.Screen name='Registration' component={PessengerRegistration}/>
        <Stack.Screen name='Privacy'component={PrivacySettingsScreen}/>
        <Stack.Screen name='Notification' component={NotificationSettings}/>
        <Stack.Screen name='Driver' component={HomeDriver}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

=======
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen.js';
import LoginScreen from './Screens/Login.js';
import RegistrationScreen from './Screens/RegistrationScreen.js';
import HomePage from './Screens/HomePage.js';
import ProfileScreen from './Screens/ProfileScreen.js';
import ExploreScreen from './Screens/ExploreScreen.js';
import SettingPage from './Screens/Setting.js';
import AccountSetting from './Screens/AccountSetting.js';
import PessengerRegistration from './Screens/Passenger/PessengerRegistration.js';
import PassengerFeatures from './Screens/Passenger/PessengerFeature.js';
import PrivacySettingsScreen from './Screens/PrivacySetting.js';
import NotificationSettings from './Screens/Notification.js';
import HomeDriver from './Screens/HomeDriver.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Setting" component={SettingPage}/>
        <Stack.Screen name="Account" component={AccountSetting}/>
        <Stack.Screen name='Features' component={PassengerFeatures}/>
        <Stack.Screen name='Registration' component={PessengerRegistration}/>
        <Stack.Screen name='Privacy'component={PrivacySettingsScreen}/>
        <Stack.Screen name='Notification' component={NotificationSettings}/>
        <Stack.Screen name='Driver' component={HomeDriver}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

>>>>>>> 2db13684e42751763683e6fe44018f39a4a44938
