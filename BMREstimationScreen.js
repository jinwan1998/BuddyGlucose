
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function BMREstimationScreen() {
  const handleEstimateBMR = () => {
    Alert.alert('BMR Estimate', 'BMR estimation not implemented.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMR Estimation and Prediction</Text>
      <Button title="Estimate BMR" onPress={handleEstimateBMR} />
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
