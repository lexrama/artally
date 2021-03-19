import { Image } from "react-native";
import { User, Post, Comment } from "../types";

/* 
export type Post = {
  id: int; // make this a unique number starting with 0, ex. "001"
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
        id: 1,
        user: "CityOwls",
        image: "girl_final",
        title: "Lighting on t-shirt",
        description: "I slapped some color on her! What do ppl think about this lighting, esp on the shirt? I'm a little iffy abt the shadows on her sleeves. (Thank you to @Saturno_22 for the feedback and @izipizi for redlining!!)",
        tags: ["digital", "illustration", "anime", "cell_shading"],
        timestamp: "Feb 24",
        status: 2,
        comments: [101],
        topLevel: true,
        previousVersions: [2]
    },
    
    { // finalized
        id: 2,
        user: "CityOwls",
        image: "girl_original",
        title: "Help with face proportions",
        description: "Something feels off about this sketch but I can’t figure out what it is. I think it might be the face proportions? Does anyone have ideas?",
        tags: ["digital", "illustration", "anime", "sketch"],
        timestamp: "Feb 19",
        status: 3,
        comments: [103],
        topLevel: false,
        previousVersions: []
    },

    { // finalized
        id: 3,
        user: "nifty_salamander",
        image: "geometry",
        title: "Cast shadows",
        description: "Hey everyone, I’ve been struggling with where the cast shadows would fall in this image, especially underneath the spheres. Does anyone have any tips? (feel free to insult my crosshatching too... i don’t understand how traditional artists do it 😭)",
        tags: ["traditional", "geometry", "fundamentals", "shadows"],
        timestamp: "3d",
        status: 1,
        comments: [],
        topLevel: true,
        previousVersions: []
    },

    { // finalized
        id: 4,
        user: "nifty_salamander",
        image: "jolteon",
        title: "Color choice",
        description: "Does anyone have thoughts on this yellow/purple color scheme? Does it clash? (also feedback on the face shadows would be nice haha, I thought it would be cool at first but now I’m wondering if it’s too much 😅)",
        tags: ["pokemon", "jolteon", "color", "illustration"],
        timestamp: "Jan 29",
        status: 3,
        comments: [110, 111, 112],
        topLevel: true,
        previousVersions: []
    },

    { // maybe add some comments? otherwise finalized
        id: 5,
        user: "izipizi",
        image: "diglett",
        title: "diglett render composition",
        description: "can i get some feedback on the framing of this render? i want it to look like ur the size of an ant lmao",
        tags: ["3d", "render", "cgi", "pokemon", "composition"],
        timestamp: "5h",
        status: 1,
        comments: [],
        topLevel: true,
        previousVersions: []
    },

    { // finalized
        id: 6,
        user: "izipizi",
        image: "porygon",
        title: "diglett render composition",
        description: "any thoughts on the colors here... going for a little bit of eyestrain but not TOO much yanno",
        tags: ["3d", "render", "cgi", "pokemon", "porygon"],
        timestamp: "Jan 29",
        status: 3,
        comments: [115],
        topLevel: true,
        previousVersions: []
    },

    { // maybe add some comments? otherwise finalized
        id: 7,
        user: "CityOwls",
        image: "berries",
        title: "Atmospheric lighting",
        description: "Just hoping for some feedback on the lighting/colors here... I was going for a cozy autumn feel, do you think this captures it ok?",
        tags: ["digital", "illustration", "human", "lighting", "scene"],
        timestamp: "Dec 31, 2020",
        status: 3,
        comments: [120, 121, 122],
        topLevel: true,
        previousVersions: []
    },

    { // maybe add some comments
        id: 8,
        user: "Saturno_22",
        image: "togepi",
        title: "Togepi illustration",
        description: "Hi everyone! I’m drawing Togepi for the first time and I was hoping for feedback on the way his shell is shaded - I can't help but feel like the shadows are a bit unnatural-looking here.",
        tags: ["digital", "illustration", "cute", "pokemon", "togepi"],
        timestamp: "4d",
        status: 1,
        comments: [120],
        topLevel: true,
        previousVersions: []
    },

    { // maybe add some comments
        id: 9,
        user: "Saturno_22",
        image: "pikachu",
        title: "Pikachu in water illustration",
        description: "Hi guys! This is my first time including a lot of water in an image so I wanted to get input on how realistic the waves look beneath Pikachu",
        tags: ["pastel", "illustration", "water", "pokemon", "ocean"],
        timestamp: "Feb 2",
        status: 3,
        comments: [],
        topLevel: true,
        previousVersions: []
    },
];
