import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  FlatList,
  TouchableOpacity, // replace a View with this to make the entire view clickable
  // import any other needed React components here
} from "react-native";
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { TagArrayProps } from '../types'; // import any other needed types from types.tsx here
import Tag from '../components/Tag'
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function TagArray({ tags, navigation }: TagArrayProps) {
  
  const renderItem = (item: string) => {
    return (
      <Tag text={item} navigation={navigation}/>
    );
  };
  
  return (
    <View style={styles.container}>
      <FlatList
          data={tags} // was feedItems
          renderItem={({ item }) => renderItem(item)}
          horizontal={true}
        />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: Layout.gapSmall,
  },
  // edit those styles or define more here!
});
