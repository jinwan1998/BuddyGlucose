
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import UserProfileSetupScreen from './screens/UserProfileSetupScreen';
import ManualFoodLoggingScreen from './screens/ManualFoodLoggingScreen';
import BarcodeCameraFoodRecognitionScreen from './screens/BarcodeCameraFoodRecognitionScreen';
import SavedFoodItemsScreen from './screens/SavedFoodItemsScreen';
import ManualBloodSugarEntryScreen from './screens/ManualBloodSugarEntryScreen';
import BluetoothGlucoseMeterIntegrationScreen from './screens/BluetoothGlucoseMeterIntegrationScreen';
import OCRBloodGlucoseMeterCaptureScreen from './screens/OCRBloodGlucoseMeterCaptureScreen';
import DataVisualizationScreen from './screens/DataVisualizationScreen';
import RemindersNotificationsScreen from './screens/RemindersNotificationsScreen';
import BMREstimationScreen from './screens/BMREstimationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="User Profile Setup" component={UserProfileSetupScreen} />
        <Stack.Screen name="Manual Food Logging" component={ManualFoodLoggingScreen} />
        <Stack.Screen name="Barcode/Camera Food Recognition" component={BarcodeCameraFoodRecognitionScreen} />
        <Stack.Screen name="Saved Food Items" component={SavedFoodItemsScreen} />
        <Stack.Screen name="Manual Blood Sugar Entry" component={ManualBloodSugarEntryScreen} />
        <Stack.Screen name="Bluetooth Glucose Meter Integration" component={BluetoothGlucoseMeterIntegrationScreen} />
        <Stack.Screen name="OCR Blood Glucose Meter Capture" component={OCRBloodGlucoseMeterCaptureScreen} />
        <Stack.Screen name="Data Visualization" component={DataVisualizationScreen} />
        <Stack.Screen name="Reminders and Notifications" component={RemindersNotificationsScreen} />
        <Stack.Screen name="BMR Estimation" component={BMREstimationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
