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

export const users = [
    { // feel free to edit/delete this example, it's just for reference
        username: "nifty_salamander",
        icon: require("../assets/images/avatar.png"),
        numPoints: 851,
        posts: [],
        following: [],
        followers: [],
    },
    {
        // more users
    },
];