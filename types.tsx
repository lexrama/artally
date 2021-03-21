import { Image } from "react-native";




/***** DATABASE CONTENT *****/


export type User = {
  username: string;
  icon: string;
  tags: string[];
  numPoints: number;
  posts: Post[];
  following: string[];
  followers: string[];
}

export type Post = {
  id: number;
  user: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  timestamp: string;
  status: number;
  comments: {
    id: number;
    post: number;
    user: string;
    op: boolean;
    text: string;
    timestamp: string;
    upvotes: number;
    downvotes: number;
    upvoted: boolean;
    downvoted: boolean;
    hasImage: boolean;
    image: string;
    topLevel: boolean;
    replies: number[];
  }[];
  topLevel: boolean;
  previousVersions: number[];
}


export type Comment = {
  id: number;
  post: number;
  user: string;
  op: boolean;
  text: string;
  timestamp: string;
  upvotes: number;
  downvotes: number;
  upvoted: boolean;
  downvoted: boolean;
  hasImage: boolean;
  image: string;
  topLevel: boolean;
  replies: number[];
}


/*
export type User = {
  username: string;
  icon: string; // ex. "togepi"
  tags: string[];
  numPoints: number;
  posts: Post[]; // array of IDs; get length for numPosts
  following: string[]; // array of usernames; get length for numFollowing
  followers: string[]; // array of usernames; get length for numFollowers
}

export type Post = {
  id: number; // make this a unique number starting with 0, ex. "001"
  user: string; // username of user who posted the comment
  image: string; // ex. "togepi"
  title: string;
  description: string;
  tags: string[]; // ex. [digital, illustration, shading] -- DON'T put the # symbol
  timestamp: string; // like Twitter, ex. "31s", "5m", "7h", "2d", "Feb 21", "Mar 20, 2010"
  status: number; // 1 for Open, 2 for Open (UPDATE), 3 for Closed (do we need to change these based on Heuristic Eval?)
  comments: Comment[]; // array of IDs of comments in chronological order
  topLevel: boolean;
  previousVersions: Post[]; // array of IDs of previous versions IN THE ORDER THEY SHOULD BE DISPLAYED, ie. reverse-chron
                              // stored ONLY in the most recent post; ie. most recent post should list all previous versions
                              // in this array, but older versions should have an EMPTY previousVersions array
}


export type Comment = {
  id: number; // make this a unique number starting with 1, ex. "101"
  post: number; // ID of the post it belongs to, ex. "001"
  user: string; // username of person commenting
  op: boolean // true if it's from the original poster, false otherwise
  text: string; // body of comment
  timestamp: string; // like Twitter, ex. "31s", "5m", "7h", "2d", "Feb 21", "Mar 20, 2010"
  upvotes: number;
  downvotes: number;
  upvoted: boolean; // defaults to false
  downvoted: boolean; // defaults to false
  hasImage: boolean;
  image: string; // image attachment, ex. "togepi" (empty string if none)
  topLevel: boolean;
  replies: Comment[]; // array of IDs of replies to this comment in chronological order;
                     // should be EMPTY if this itself is a reply, because we're only doing 1 layer of nesting
}
*/



/***** COMPONENT PROPS *****/


// EXAMPLE
export type MyComponentProps = {
  myString: string;
  myNumber: number;
  myBoolean: boolean;
  navigation: any;
}


export type ProfileHeaderProps = {
  user: User;
  mine: boolean;
  showBio: boolean;
  navigation: any;
}

export type PostHeaderProps = {
  post: Post;
  navigation: any;
}

export type PostCardProps = {
  post: Post;
  header: boolean; // true if header should appear (ie. on home feed), false otherwise (ie. on profiles)
  clickable: boolean;
  navigation: any;
}

export type PostPreviewProps = {
  post: Post;
  navigation: any;
}

export type TagPreviewProps = {
  tag: string;
  posts: Post[];
  navigation: any;
}

export type FullWidthImageProps = {
  source: string;
  size: string;
}

export type PostFooterProps = {
  post: Post;
  navigation: any;
}

export type CommentProps = {
  comment: Comment;
  navigation: any;
}

export type TagProps = {
  text: string;
  size: string;
  navigation: any;
}

export type TagArrayProps = {
  tags: string[];
  size: string;
  navigation: any;
}

export type StatusTagProps = {
  status: number;
}

export type NotificationProps = {
  post: Post;
  user: User;
  text: string;
  timestamp: string;
  navigation: any;
}

export type MessagePreviewProps = {
  user: User;
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
  header: boolean;
  loading: boolean,
  navigation: any;
}

export type FeedItemProps = {
  post: Post; // was item: FeedItemData;
  header: boolean;
  navigation: any;
}

export type ButtonProps = {
  title: string;
  type: string; // bold, outline, muted
  onPress: any;
  navigation: any;
}

export type NotificationButtonProps = {
  //navigation: any;
}

export type MessageProps = {
  text: string;
  navigation: any;
}

export type CommentFormProps = {
  reply: boolean;
  navigation: any;
}



/***** SCREEN/NAVIGATION PROPS *****/

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Thread: undefined;
  Profile: undefined;
  Notifications: undefined;
  Conversation: undefined;
  Results: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Home: undefined;
  Search: undefined;
  Upload: undefined;
  Messages: undefined;
  MyProfile: undefined;
  navigation: any;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type HomeTabParamList = {
  HomeTabScreen: undefined;
  navigation: any;
};

export type SearchTabParamList = {
  SearchTabScreen: undefined;
  navigation: any;
};

export type UploadTabParamList = {
  UploadTabScreen: undefined;
  navigation: any;
};

export type MessagesTabParamList = {
  MessagesTabScreen: undefined;
  navigation: any;
};

export type MyProfileTabParamList = {
  MyProfileTabScreen: undefined;
  navigation: any;
};

export type HomeScreenProps = {
  navigation: any;
}

export type SearchScreenProps = {
  navigation: any;
}

export type ProfileScreenProps = {
  user: User;
  navigation: any;
}

export type ThreadScreenProps = {
  postID: number; // was FeedItemData
  navigation: any;
}

export type NotificationScreenProps = {
  navigation: any;
}

export type ConversationScreenProps = {
  navigation: any;
}

export type SearchResultsScreenProps = {
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