import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Pages/HomeScreen';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
