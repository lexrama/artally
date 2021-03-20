import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import { SearchScreenProps } from "../../types";
import ProfileHeader from "../../components/ProfileHeader";
import Feed from "../../components/Feed";
import { Users } from "../../data/Users2"
import Colors from '../../constants/Colors';

export default function ResultsUsersScreen({ navigation }:SearchScreenProps ) {
    const [loading, setLoading] = useState(false);

    return (
            <View>
                <Text style={{ 
                    color: Colors.artally.basicDark,
                    fontSize: 32,
                    textAlign: 'center'
                }}> 2 Results </Text>
                <ProfileHeader user={Users.izipizi} navigation={navigation} mine={false} />
                    {/* <Feed
                        feedItems={Users.izipizi.posts} // was feedData, eventually want this to be fsPosts
                        header={false}
                        loading={loading}
                        navigation={navigation}
                    /> */}
                <ProfileHeader user={Users.saturno_22} navigation={navigation} mine={false} />
                {/* <ProfileHeader user={Users.cityowls} navigation={navigation} mine={false} /> */}
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
    },
});
