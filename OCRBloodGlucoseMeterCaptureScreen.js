
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function OCRBloodGlucoseMeterCaptureScreen() {
  const handleCapture = () => {
    Alert.alert('Capture', 'OCR capture not implemented.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OCR Blood Glucose Meter Capture</Text>
      <Button title="Capture Blood Sugar" onPress={handleCapture} />
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
