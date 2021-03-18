import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,  // replace a View with this to make the entire view clickable
  // import any other needed React components here
} from "react-native";
//import Image from 'react-native-scalable-image';
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Images from '../constants/Images';
import Filler from "../data/Filler";
import { UserIconProps } from '../types'; // import any other needed types from types.tsx here
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// <Image source={Images.cityowls} width={Layout.iconSmall}/>

// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function UserIcon({ user, size, navigation }: UserIconProps) {
  //console.log(user.icon);
  //const img = require("../assets/images/cityowls.png");
  if (size == "small") {
    return (
      <TouchableOpacity>
        <Image source={Images.cityowls} style={styles.small}/>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity>
        <Image source={Images.cityowls} style={styles.large}/>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  small: {
    height: Layout.iconSmall,
    width: Layout.iconSmall,
    borderRadius: Layout.radiusSmall,
  },
  large: {
    height: Layout.iconLarge,
    width: Layout.iconLarge,
    borderRadius: Layout.radiusSmall,
  }
});
