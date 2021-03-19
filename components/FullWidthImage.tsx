import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  ImageSourcePropType,  // replace a View with this to make the entire view clickable
  // import any other needed React components here
} from "react-native";
import Image from 'react-native-scalable-image';
import { Text, View } from './Themed';
import Images from '../constants/Images';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { FullWidthImageProps } from '../types'; // import any other needed types from types.tsx here
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function FullWidthImage({ source }: FullWidthImageProps) {
  const src = "berries";
  const image = Images[src];

  return (
    <View>
      <Image source={Images.berries} width={Layout.window.width}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    width: '100%',
    margin: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
  }
  // edit those styles or define more here!
});
