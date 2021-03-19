import { User, Post, Comment } from "../types";

const post: Post = {
    id: "001",
    user: "CityOwls",
    image: "../assets/images/girl3.png",
    title: "Lighting on t-shirt",
    description: "I slapped some color on her! What do ppl think about this lighting, esp on the shirt? I'm a little iffy abt the shadows on her sleeves. (Thank you to @Saturno_22 for the feedback and @izipizi for redlining!!)",
    tags: ["digital", "illustration", "anime", "cell_shading"],
    timestamp: "Feb 24",
    status: 2,
    comments: ["101"],
    previousVersions: ["002"]
}

const user: User = {
    username: "CityOwls",
    icon: "../assets/images/cityowls.png",
    tags: ["digital", "illustration", "anime", "human"],
    numPoints: 24,
    posts: ["001", "002"],
    following: [],
    followers: [],
}

const comment: Comment = {
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
    image: "",
    replies: [],
}

const Filler = {user, post, comment};

export default Filler;