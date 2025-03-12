import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Settings', { screen: 'Details' })} />
  </View>
);

const SettingsScreen = ({ navigation }) => (
  <View>
    <Text>Settings Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
  </View>
);

const DetailsScreen = () => <Text>Details Screen</Text>;

// Stack Navigator for Settings Tab
const SettingsStack = createStackNavigator();
function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

// Root Tab Navigator
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
