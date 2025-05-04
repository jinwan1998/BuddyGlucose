
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function ManualBloodSugarEntryScreen() {
  const [bloodSugar, setBloodSugar] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSave = () => {
    if (!bloodSugar || !date || !time) {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {
      Alert.alert('Save Successful', `Blood Sugar: ${bloodSugar} mmol/L`);
      setBloodSugar('');
      setDate('');
      setTime('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manual Blood Sugar Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Blood Sugar (mmol/L)"
        keyboardType="numeric"
        value={bloodSugar}
        onChangeText={setBloodSugar}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Save" onPress={handleSave} />
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
});
