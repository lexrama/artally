import * as React from 'react';
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
import { StatusTagProps } from '../types'; // import any other needed types from types.tsx here
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function StatusTag({ status }: StatusTagProps) {
  if (status == 1) { // 1 for Open, 2 for Open (UPDATE), 3 for Closed (do we need to change these based on Heuristic Eval?)
    return (
      <View style={styles.open}>
        <Text style={styles.openText}>Open</Text>
      </View>
    );
  } else if (status == 2) {
    return (
      <View style={styles.update}>
        <Text style={styles.updateText}>Open (UPDATE)</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.closed}>
        <Text style={styles.closedText}>Closed</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.artally.tag,
    borderRadius: Layout.radiusLarge,
    marginRight: Layout.gapSmall,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  open: {
    borderRadius: Layout.radiusLarge,
    marginRight: Layout.gapSmall,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: Colors.artally.white,
    borderWidth: 1,
    borderColor: Colors.artally.action,
  },
  openText: {
    fontSize: Layout.textSmall,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.artally.action,
  },
  update: {
    borderRadius: Layout.radiusLarge,
    marginRight: Layout.gapSmall,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: Colors.artally.white,
    borderWidth: 1,
    borderColor: Colors.artally.alert,
  },
  updateText: {
    fontSize: Layout.textSmall,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.artally.alert,
  },
  closed: {
    borderRadius: Layout.radiusLarge,
    marginRight: Layout.gapSmall,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: Colors.artally.white,
    borderWidth: 1,
    borderColor: Colors.artally.basicMidLight,
  },
  closedText: {
    fontSize: Layout.textSmall,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.artally.basicMidLight,
  },
});
