import { Image } from "react-native";
import { User, Post, Comment } from "../types";

/* 
export type Post = {
  id: string; // make this a unique number starting with 0, ex. "001"
  user: string; // username of user who posted the comment
  image: Image; // ex. require("../assets/images/togepi.png")
  title: string;
  description: string;
  tags: string[]; // ex. [digital, illustration, shading] -- DON'T put the # symbol
  timestamp: string; // like Twitter, ex. "31s", "5m", "7h", "2d", "Feb 21", "Mar 20, 2010"
  status: number; // 1 for Open, 2 for Open (UPDATE), 3 for Closed (do we need to change these based on Heuristic Eval?)
  comments: string[]; // array of IDs of comments in chronological order
  topLevel: boolean; // true if this is the most recent version of the post, false otherwise
  previousVersions: string[]; // array of IDs of previous versions IN THE ORDER THEY SHOULD BE DISPLAYED, ie. reverse-chron
}
*/

export const posts = [
    { // feel free to edit/delete this example, it's just for reference
        id: "000",
        user: "nifty_salamander",
        image: require("../assets/images/togepi.jpeg"),
        title: "Title",
        description: "This is an example description!",
        tags: ["tag1", "tag2", "tag3"],
        timestamp: "3h",
        status: 1,
        comments: ["100"],
        topLevel: true,
        previousVersions: []
    },
    {
        // more posts
    },
];