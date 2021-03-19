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
import { ProfileScreenProps, UserIconProps } from '../types'; // import any other needed types from types.tsx here
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// <Image source={Images.cityowls} width={Layout.iconSmall}/>

// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function UserIcon({ user, size, navigation }: UserIconProps) {
  
  const source = user.icon;
  let img = Images.togepi;

  if (source == "artally") {
    img = Images.artally;
  } else if (source == "nifty_salamander") {
    img = Images.nifty_salamander;
  } else if (source == "saturno_22") {
    img = Images.saturno_22;
  } else if (source == "cityowls") {
    img = Images.cityowls;
  } else if (source == "izipizi") {
    img = Images.izipizi;
  } else if (source == "geometry") {
    img = Images.geometry;
  } else if (source == "jolteon") {
    img = Images.jolteon;
  } else if (source == "pikachu") {
    img = Images.pikachu;
  } else if (source == "girl_original") {
    img = Images.girl_original;
  } else if (source == "girl_redlined") {
    img = Images.girl_redlined;
  } if (source == "girl_final") {
    img = Images.girl_final;
  } else if (source == "berries") {
    img = Images.berries;
  } else if (source == "diglett") {
    img = Images.diglett;
  } else if (source == "porygon") {
    img = Images.porygon;
  }

  /*
  const profileProps: ProfileScreenProps = {
    user: user,
    navigation: navigation,
  };
  */

  console.log("USERICON: ", user);

  if (size == "small") {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Profile", {user, navigation})}>
        <Image source={img} style={styles.small}/>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Profile", {user, navigation})}>
        <Image source={img} style={styles.large}/>
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
