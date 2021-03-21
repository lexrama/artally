import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import { SearchScreenProps } from "../../types";
import ProfileHeader from "../../components/ProfileHeader";
import Feed from "../../components/Feed";
import { Users } from "../../data/Users2"
import Colors from '../../constants/Colors';
import TagArray from "../../components/TagArray";
import Layout from "../../constants/Layout";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function ResultsUsersScreen({ navigation }: SearchScreenProps) {
    const [loading, setLoading] = useState(false);

    const cityowlsProps = {
        user: Users.cityowls,
        navigation: navigation,
    }

    const saturnoProps = {
        user: Users.saturno_22,
        navigation: navigation,
    }

    return (
        <View style={styles.container}>
            {/*<Text style={{ 
                    color: Colors.artally.basicDark,
                    fontSize: 32,
                    textAlign: 'center'
                }}> 2 Results </Text>*/}
            <View style={styles.top}>
                <Text style={styles.title}>2 results for:</Text>
                <TagArray tags={["digital", "illustration"]} size="large" navigation={navigation} />
            </View>
            <ScrollView>
                <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate("Profile", saturnoProps)}>
                    <ProfileHeader user={Users.saturno_22} navigation={navigation} mine={false} showBio={false}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate("Profile", cityowlsProps)}>
                    <ProfileHeader user={Users.cityowls} navigation={navigation} mine={false} showBio={false}/>
                </TouchableOpacity>
            </ScrollView>
            {/* <Feed
                        feedItems={Users.izipizi.posts} // was feedData, eventually want this to be fsPosts
                        header={false}
                        loading={loading}
                        navigation={navigation}
                    /> */}

            {/* <ProfileHeader user={Users.cityowls} navigation={navigation} mine={false} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.artally.white,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    top: {
        //flexDirection: "row",
        alignSelf: "flex-start",
        marginVertical: Layout.gapLarge,
        justifyContent: "center",
    },
    title: {
        fontSize: Layout.textLarge,
        color: Colors.artally.basicMid,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginLeft: Layout.gapLarge,
        marginBottom: Layout.gapSmall,
    },
    profile: {
        borderWidth: 1,
        borderColor: Colors.artally.basicLight,
        width: Layout.window.width,
    }
});
