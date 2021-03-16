import { Image } from "react-native";




/***** DATABASE CONTENT *****/

export type User = {
  username: string;
  icon: Image; // ex. require("../assets/images/togepi.png")
  numPoints: number;
  posts: string[]; // array of IDs; get length for numPosts
  following: string[]; // array of usernames; get length for numFollowing
  followers: string[]; // array of usernames; get length for numFollowers
}

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




/***** COMPONENT PROPS *****/

export type ProfileHeaderProps = {
  user: User;
  navigation: any;
}

export type PostHeaderProps = {
  user: User; // user who posted it
  post: Post;
  navigation: any;
}

export type PostFooterProps = {
  post: Post;
  navigation: any;
}

export type TagProps = {
  text: string;
  navigation: any;
}

export type TagArrayProps = {
  tags: string[];
  navigation: any;
}

export type StatusTagProps = {
  status: number;
  navigation: any;
}

export type NotificationProps = {
  post: Post;
  text: string;
  timestamp: string;
  navigation: any;
}

export type UserIconProps = {
  user: User;
  size: string; // "small" or "large"
  navigation: any;
}

export type ScreenHeaderProps = {
  title: string;
  back: boolean;
  navigation: any;
}

export type FeedProps = {
  feedItems: Post[], // was FeedItemData[]
  loading: boolean,
  navigation: any;
}

export type FeedItemProps = {
  post: Post; // was item: FeedItemData;
  navigation: any;
}




/***** SCREEN/NAVIGATION PROPS *****/

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Thread: undefined;
  Profile: undefined;
  Notifications: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Home: undefined;
  Search: undefined;
  Upload: undefined;
  Messages: undefined;
  Profile: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type HomeTabParamList = {
  HomeTabScreen: undefined;
};

export type SearchTabParamList = {
  SearchTabScreen: undefined;
};

export type UploadTabParamList = {
  UploadTabScreen: undefined;
};

export type MessagesTabParamList = {
  MessagesTabScreen: undefined;
};

export type MyProfileTabParamList = {
  MyProfileTabScreen: undefined;
};

export type HomeScreenProps = {
  navigation: any;
}

export type ThreadScreenProps = {
  post: Post; // was FeedItemData
  navigation: any;
}




/***** OTHER *****/

// this is a temporary datatype until the database works, ignore this
export type FeedItemData = {
  id: string,
  avatar: string,
  username: string,
  title: string,
  description: string,
  image: string,
}

export type firestore = any;