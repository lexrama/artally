import { Image } from "react-native";
import { User, Post, Comment } from "../types";

/*
export type Comment = {
  id: string; // make this a unique number starting with 1, ex. "101"
  post: string; // ID of the post it belongs to, ex. "001"
  user: string; // username of person commenting
  op: boolean // true if it's from the original poster, false otherwise
  text: string; // body of comment
  timestamp: string; // like Twitter, ex. "31s", "5m", "7h", "2d", "Feb 21", "Mar 20, 2010"
  upvotes: number;
  downvotes: number;
  upvoted: boolean; // defaults to false
  downvoted: boolean; // defaults to false
  hasImage: boolean; // true if there's an image attached, false otherwise
  image: Image; // image attachment
  topLevel: boolean; // false if this is a reply to another comment, true otherwise
  replies: string[]; // array of IDs of replies to this comment in chronological order;
                     // should be EMPTY if this itself is a reply, because we're only doing 1 layer of nesting
}
*/

export const comments = [
    { // feel free to edit/delete this example, it's just for reference
        id: '100',
        post: '000',
        user: 'nifty_salamander',
        op: false,
        text: 'This is an example comment!',
        timestamp: '2h',
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: true,
        image: require("../assets/images/togepi.jpeg"),
        topLevel: true,
        replies: [],
    },
    {
        // more comments
    },
];