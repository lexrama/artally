import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity, // replace a View with this to make the entire view clickable
  // import any other needed React components here
} from "react-native";
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { ScreenHeaderProps } from '../types'; // import any other needed types from types.tsx here
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function ScreenHeader({ title, back, navigation }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Custom Header</Text>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={20} color={Colors.artally.basicDark} />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.artally.basicLight,
    height: Layout.navbarHeight,
  },
  text: {
    fontSize: Layout.textLarge,
    fontWeight: 'bold',
    color: Colors.artally.basicDark,
  }
  // edit those styles or define more here!
});
