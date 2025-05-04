
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function BluetoothGlucoseMeterIntegrationScreen() {
  const handleSync = () => {
    Alert.alert('Sync', 'Bluetooth sync not implemented.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bluetooth Glucose Meter Integration</Text>
      <Button title="Sync Blood Sugar Data" onPress={handleSync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
});
