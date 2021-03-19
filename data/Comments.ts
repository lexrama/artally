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
        id: 101,
        post: 1,
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
        id: 103,
        post: 2,
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
        id: 104,
        post: 2,
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
        id: 105,
        post: 2,
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
        id: 106,
        post: 2,
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

    {
        id: 110,
        post: 4,
        user: "CityOwls",
        op: false,
        text: "I really like these colors!! the reddish purple on the face ties into the background really nicely and makes for a cool dramatic effect imo",
        timestamp: "Jan 30",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: false,
        image: null,
        topLevel: true,
        replies: [],
    },

    {
        id: 111,
        post: 4,
        user: "Saturno_22",
        op: false,
        text: "It looks good to me! I think the shadow placement is effective too. Awesome work as always!",
        timestamp: "Feb 1",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: false,
        image: null,
        topLevel: true,
        replies: [],
    },

    {
        id: 112,
        post: 4,
        user: "nifty_salamander",
        op: true,
        text: "@CityOwls @Saturno_22 awesome!! it’s p much done then, I just wanted to run it by a few more sets of eyes. thanks so much!!",
        timestamp: "Feb 1",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: false,
        image: null,
        topLevel: true,
        replies: [],
    },

    {
        id: 115,
        post: 6,
        user: "CityOwls",
        op: false,
        text: "porygon is now lightly singed onto my retina... ;P great work as always, @izipizi!",
        timestamp: "Jan 29",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: false,
        image: null,
        topLevel: true,
        replies: [116],
    },

    {
        id: 116,
        post: 6,
        user: "izipizi",
        op: true,
        text: "yess excellent, just what i was going for, muahahaha...",
        timestamp: "Jan 29",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: false,
        image: null,
        topLevel: false,
        replies: [],
    },

    {
        id: 120,
        post: 7,
        user: "Saturno_22",
        op: false,
        text: "This is really nice!! One thing I would consider is maybe try to use less defined shadows, if you're going for that overcast sky look, which I think you're aiming for (correct me if i'm wrong!)",
        timestamp: "Jan 2",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: false,
        image: null,
        topLevel: true,
        replies: [121, 122],
    },

    {
        id: 121,
        post: 7,
        user: "izipizi",
        op: false,
        text: "I agree with @Saturno_22, it looks like the sky's overcast, but the sharpness of the shadows on her face doesn't match up with that well imo",
        timestamp: "Jan 2",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: false,
        image: null,
        topLevel: false,
        replies: [],
    },

    {
        id: 122,
        post: 7,
        user: "CityOwls",
        op: true,
        text: "Great catch, thanks so much guys!",
        timestamp: "Jan 3",
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
