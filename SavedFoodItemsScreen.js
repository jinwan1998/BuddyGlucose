
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';

const savedItems = [
  { id: '1', name: 'Apple', calories: 95 },
  { id: '2', name: 'Banana', calories: 105 },
  { id: '3', name: 'Chicken Breast', calories: 165 },
];

export default function SavedFoodItemsScreen() {
  const handleAddItem = (item) => {
    Alert.alert('Add Item', `Added ${item.name} with ${item.calories} kcal.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Food Items</Text>
      <FlatList
        data={savedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Add" onPress={() => handleAddItem(item)} />
          </View>
        )}
      />
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
