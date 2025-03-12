import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Stores from '../screens/Stores/Stores';
import CustomerStorePage from '../screens/Stores/nested/CustomerStorePage';
import CartPage from '../screens/Stores/nested/CartPage';

const Stack = createStackNavigator();

export default function StoresStack() {
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Stores" component={Stores} />
            <Stack.Screen name="CustomerStorePage" component={CustomerStorePage} />
            <Stack.Screen name="CartPage" component={CartPage} />
        </Stack.Navigator>
  );
}
