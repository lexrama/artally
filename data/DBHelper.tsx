import { User, Post, Comment } from '../types'; // import any other needed types from types.tsx here
import { Users } from './Users2';
import firebase from "firebase";
import firestore from "../firebase";

const createDatabase = () => {
    const users: User[] = [Users.cityowls, Users.izipizi, Users.nifty_salamander, Users.saturno_22]

    users.forEach(user => {
        firestore.collection("users").doc(user.username).set({
            username: user.username,
            icon: user.icon,
            tags: user.tags,
            numPoints: user.numPoints,
            posts: user.posts,
            following: user.following,
            followers: user.followers,
        })
    });

};

const extractUser = (data: any) => {
    let dUser: User = {
      username: data.username,
      icon: data.icon,
      tags: data.tags,
      numPoints: data.numPoints,
      posts: data.posts,
      following: data.following,
      followers: data.followers,
    }
    return dUser;
};

export default { createDatabase, extractUser };