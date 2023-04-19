import { StyleSheet, SafeAreaView } from 'react-native';
import BottomNavigation from './src/Navigation/BottomNavigation';
import LogNavigation from './src/Navigation/LogNavigation';
import Nav from './src/Navigation/Nav';


export default function App() {
  return (
    
      <Nav/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
