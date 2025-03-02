import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Stores from '../screens/Stores/Stores';
import CustomerStorePage from '../screens/Stores/nested/CustomerStorePage';

const Stack = createStackNavigator();

export default function StoresStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="Stores" component={Stores} />
            <Stack.Screen name="CustomerStorePage" component={CustomerStorePage} />
        </Stack.Navigator>
  );
}
