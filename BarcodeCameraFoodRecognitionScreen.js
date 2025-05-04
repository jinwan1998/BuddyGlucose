
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function BarcodeCameraFoodRecognitionScreen() {
  const handleScanBarcode = () => {
    Alert.alert('Scan Barcode', 'Barcode scanning not implemented.');
  };

  const handleTakePhoto = () => {
    Alert.alert('Take Photo', 'Photo recognition not implemented.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Recognition</Text>
      <Button title="Scan Barcode" onPress={handleScanBarcode} />
      <Button title="Take Photo" onPress={handleTakePhoto} />
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
