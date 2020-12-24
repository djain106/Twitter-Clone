import { Button } from '@material-ui/core'
import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Daksh Jain',
            username: 'djain100',
            verified: true,
            text: tweetMessage,
            avatar:
                "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/263F418F2C47943D98B2877ECAD174927FBBD359C4AFB45BE0C6A22AD589D22E/scale?width=400&amp;aspectRatio=1&amp;format=png",
            image: tweetImage,
            postTime: firebase.firestore.Timestamp.now()
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/263F418F2C47943D98B2877ECAD174927FBBD359C4AFB45BE0C6A22AD589D22E/scale?width=400&amp;aspectRatio=1&amp;format=png" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text" />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text" />
                <Button
                    onClick={sendTweet}
                    className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
