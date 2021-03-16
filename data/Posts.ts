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

export const Posts = [
    { // finalized
        id: "001",
        user: "CityOwls",
        image: "../assets/images/animegirl-color.png",
        title: "Lighting on t-shirt",
        description: "I slapped some color on her! What do ppl think about this lighting, esp on the shirt? I'm a little iffy abt the shadows on her sleeves. (Thank you to @Saturno_22 for the feedback and @izipizi for redlining!!)",
        tags: ["digital", "illustration", "anime", "cell_shading"],
        timestamp: "Feb 24",
        status: 2,
        comments: ["101"],
        topLevel: true,
        previousVersions: ["002"]
    },
    
    { // finalized
        id: "002",
        user: "CityOwls",
        image: "../assets/images/animegirl-nocolor.png",
        title: "Help with face proportions",
        description: "Something feels off about this sketch but I can’t figure out what it is. I think it might be the face proportions? Does anyone have ideas?",
        tags: ["digital", "illustration", "anime", "sketch"],
        timestamp: "Feb 19",
        status: 3,
        comments: ["103"],
        topLevel: true,
        previousVersions: ["002"]
    },
];
