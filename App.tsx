import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const App = () => {
  const data = [
    { id: '1', text: 'Google ' },
    { id: '2', text: 'Apple' },
    { id: '3', text: 'Microsoft' },
    { id: '4', text: 'Amamzon' },
    { id: '5', text: 'Facebook' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', // Ensure the container takes full width
  },
  itemContainer: {
    width: '100%', // Make each item container take full width
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    padding: 16,
  },
});

export default App;
