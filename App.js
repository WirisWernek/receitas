import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [text, setText] = useState('')
  return (
    <View style={styles.container}>
      <Text>Hello World! Vem um dev React Native por aí?</Text>
	  <Text>{text}</Text>
	  <TextInput placeholder='Teste' onChangeText={newText => setText(newText)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
