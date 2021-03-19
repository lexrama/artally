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

/*
artally
nifty_salamander
saturno_22
cityowls
izipizi
geometry
jolteon
togepi
pikachu
girl_original
girl_redlined
girl_final
berries
diglett
porygon
*/



// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function FullWidthImage({ source }: FullWidthImageProps) {
  const width = Layout.window.width;
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

  return (
    <View>
      <Image source={img} width={width} />
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
