import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('postTime', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            {posts.map(post =>
                <Post
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    postTime={post.postTime}
                />
            )}
            {/* <Post
                displayName="Daksh Jain"
                username='djain100'
                verified={true}
                text="Yoooo it's working"
                avatar="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/263F418F2C47943D98B2877ECAD174927FBBD359C4AFB45BE0C6A22AD589D22E/scale?width=400&amp;aspectRatio=1&amp;format=png"
                image="https://variety.com/wp-content/uploads/2020/07/huc-ff-000185.jpg?resize=681,383"
            /> */}

        </div>
    )
}

export default Feed
