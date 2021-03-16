import { Image } from "react-native";
import { User, Post, Comment } from "../types";

/*
export type Comment = {
  id: string; // make this a unique number starting with 1, ex. "101"
  post: string; // ID of the post it belongs to, ex. "001"
  user: string; // username of person commenting
  op: boolean // true if it"s from the original poster, false otherwise
  text: string; // body of comment
  timestamp: string; // like Twitter, ex. "31s", "5m", "7h", "2d", "Feb 21", "Mar 20, 2010"
  upvotes: number;
  downvotes: number;
  upvoted: boolean; // defaults to false
  downvoted: boolean; // defaults to false
  hasImage: boolean; // true if there"s an image attached, false otherwise
  image: Image; // image attachment
  topLevel: boolean; // false if this is a reply to another comment, true otherwise
  replies: string[]; // array of IDs of replies to this comment in chronological order;
                     // should be EMPTY if this itself is a reply, because we"re only doing 1 layer of nesting
}
*/

export const Comments = [
    { // finalized
        id: "101",
        post: "001",
        user: "izipizi",
        op: false,
        text: "wheres the light source supposed to be? i feel like the shadows on her shoulders and sleeves r coming from different angles...",
        timestamp: "Feb 25",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: false,
        image: null,
        topLevel: true,
        replies: [],
    },

    { // finalized
        id: "103",
        post: "002",
        user: "Saturno_22",
        op: false,
        text: "I think the right eye is a little bit off (her right). She’s turning her head, but that eye looks like it’s facing forward.",
        timestamp: "Feb 19",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: false,
        image: null,
        topLevel: true,
        replies: ["104", "105", "106"],
    },
    
    { // finalized
        id: "104",
        post: "002",
        user: "izipizi",
        op: false,
        text: "hmmm i think @Saturno_22 is right. it should be distorted to account for the angle. maybe try something like this?",
        timestamp: "Feb 20",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: true,
        image: "../assets/images/animegirl-redlined.png",
        topLevel: false,
        replies: [],
    },

    { // finalized
        id: "105",
        post: "002",
        user: "Saturno_22",
        op: false,
        text: "Yea that looks a lot better imo!!",
        timestamp: "Feb 21",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: false,
        image: null,
        topLevel: false,
        replies: [],
    },

    { // finalized 
        id: "106",
        post: "002",
        user: "CityOwls",
        op: true,
        text: "Omg that was it! I adjusted the eye and the face isn’t bothering me anymore haha. Thank you!!",
        timestamp: "Feb 21",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: false,
        image: null,
        topLevel: false,
        replies: [],
    },
];
