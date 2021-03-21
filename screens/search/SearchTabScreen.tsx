import React, { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity, TextInput } from "react-native";
import { SearchScreenProps, SearchResultsScreenProps } from "../../types";
import { SearchBar } from 'react-native-elements';
import { Text, View } from '../../components/Themed';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import PostPreview from "../../components/PostPreview";
import { Users } from "../../data/Users2";
import TagPreview from "../../components/TagPreview";
import { ScrollView } from "react-native-gesture-handler";
import TagArray from "../../components/TagArray";


export default function BaseScreen({ navigation }: SearchScreenProps) {
    const [loading, setLoading] = useState(false);
    const [text, onChangeText] = useState("");

    const resultsProps: SearchResultsScreenProps = {
        navigation: navigation,
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(inputText) => onChangeText(inputText)}
                    onSubmitEditing={() => confirm()}
                    value={text} // was "text"
                    placeholder="Enter tags, keywords, etc..."
                    placeholderTextColor={Colors.artally.basicMidLight}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Results", resultsProps)}>
                    <Ionicons name="search" size={25} color={Colors.artally.action} />
                </TouchableOpacity>
            </View>
            {/*<SearchBar platform="ios"></SearchBar>*/}
            <Text style={styles.title}>Suggested tags:</Text>
            <View style={styles.tags}>
                <TagArray tags={["digital", "illustration", "anime", "cartooning", "render"]} size="small" navigation={navigation} />
            </View>
            <View style={styles.tags}>
                <TagArray tags={["pokemon", "cute", "3d", "salamander", "cell_shading"]} size="small" navigation={navigation} />
            </View>
            <View style={styles.tags}>
                <TagArray tags={["render", "human", "shading", "manga", "fire", "animals"]} size="small" navigation={navigation} />
            </View>
            {/*<Button title="go to results" type="active" onPress={() => navigation.navigate("Results", resultsProps)} navigation={navigation} />*/}
            <Text style={styles.title}>You might like:</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.previews}>
                <TagPreview tag={"3d"} posts={Users.izipizi.posts} navigation={navigation} />
                <TagPreview tag={"illustration"} posts={Users.saturno_22.posts} navigation={navigation} />
                <TagPreview tag={"anime"} posts={Users.cityowls.posts} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    search: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Layout.gapLarge,
        marginBottom: Layout.gapSmall,
        marginHorizontal: Layout.gapLarge,
    },
    title: {
        fontSize: Layout.textLarge,
        color: Colors.artally.basicMid,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginLeft: Layout.gapLarge,
        marginTop: Layout.gapSmall,
    },
    textInput: {
        borderColor: Colors.artally.basicMidLight,
        borderRadius: Layout.radiusLarge,
        borderWidth: 1,
        fontSize: Layout.textMid,
        color: Colors.artally.basicDark,
        padding: Layout.gapSmall,
        marginHorizontal: Layout.gapSmall,
        width: "90%"
    },
    tags: {
        marginTop: Layout.gapSmall,
    },
    previews: {
        //alignItems: "flex-start",
        //justifyContent: "flex-start",
        //margin: 0,
        //padding: 0,
    }
});
