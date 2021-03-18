import { Image } from "react-native";
import { User, Post, Comment } from "../types";

/*
export type User = {
  username: string;
  icon: Image; // ex. require("../assets/images/avatar.png")
  numPoints: number;
  posts: string[]; // array of IDs; get length for numPosts
  following: string[]; // array of usernames; get length for numFollowing
  followers: string[]; // array of usernames; get length for numFollowers
}
*/

export const Users = [
    {
        username: "CityOwls",
        icon: "../assets/images/cityowls.png",
        numPoints: 24,
        posts: ["001", "002"],
        following: [],
        followers: [],
    },

    {
        username: "izipizi",
        icon: "../assets/images/izipizi.png",
        numPoints: 51,
        posts: [],
        following: [],
        followers: [],
    },

    {
        username: "saturno_22",
        icon: "../assets/images/saturno_22.png",
        numPoints: 102,
        posts: [],
        following: [],
        followers: [],
    },

    {
        username: "nifty_salamander",
        icon: "../assets/images/nifty_salamander.jpg",
        numPoints: 5,
        posts: [],
        following: [],
        followers: [],
    },
];
