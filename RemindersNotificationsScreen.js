
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function RemindersNotificationsScreen() {
  const [reminderTime, setReminderTime] = useState('');

  const handleSetReminder = () => {
    if (!reminderTime) {
      Alert.alert('Error', 'Please enter a reminder time.');
    } else {
      Alert.alert('Reminder Set', `Reminder set for ${reminderTime}`);
      setReminderTime('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminders and Notifications</Text>
      <TextInput
        style={styles.input}
        placeholder="Reminder Time"
        value={reminderTime}
        onChangeText={setReminderTime}
      />
      <Button title="Set Reminder" onPress={handleSetReminder} />
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
