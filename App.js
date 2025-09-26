import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a1bd18ff',
    alignItems: 'center',
    justifyContent: 'center',
    fonntcolor: '#070202ff',
    fontStyle: 'italic',
    fontSize: 70,
  },
});
