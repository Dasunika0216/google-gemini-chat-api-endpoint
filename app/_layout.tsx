import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Pages/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenNavigation from './Navigation/HomeScreenNavigation'

export default function RootLayout() {
  return (
    <View style={styles.container}>
        <HomeScreenNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
