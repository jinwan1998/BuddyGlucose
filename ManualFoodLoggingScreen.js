
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function ManualFoodLoggingScreen() {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    const qty = parseFloat(quantity);
    if (!foodName || isNaN(qty)) {
      Alert.alert('Error', 'Please enter valid food name and quantity.');
      return;
    }
    const total = qty * 100; // Assume 100 calories per unit for simplicity
    setCalories(total);
  };

  const saveEntry = () => {
    if (calories === null) {
      Alert.alert('Error', 'Please calculate calories before saving.');
      return;
    }
    Alert.alert('Success', `Saved ${foodName} with ${calories} kcal.`);
    setFoodName('');
    setQuantity('');
    setCalories(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manual Food Logging</Text>
      <TextInput
        style={styles.input}
        placeholder="Food Name"
        value={foodName}
        onChangeText={setFoodName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      <Button title="Calculate Calories" onPress={calculateCalories} />
      {calories !== null && (
        <Text style={styles.result}>Estimated Calories: {calories} kcal</Text>
      )}
      <Button title="Save Entry" onPress={saveEntry} color="#4CAF50" />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 5,
  },
  result: {
    fontSize: 18,
    marginVertical: 15,
    textAlign: 'center',
    color: '#333',
  },
});
