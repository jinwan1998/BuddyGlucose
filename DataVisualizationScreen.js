
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function DataVisualizationScreen() {
  const handleViewCalories = () => {
    Alert.alert('View Calories', 'Calorie data visualization not implemented.');
  };

  const handleViewBloodSugar = () => {
    Alert.alert('View Blood Sugar', 'Blood sugar data visualization not implemented.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Visualization</Text>
      <Button title="View Calorie Data" onPress={handleViewCalories} />
      <Button title="View Blood Sugar Data" onPress={handleViewBloodSugar} />
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
