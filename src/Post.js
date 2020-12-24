import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/263F418F2C47943D98B2877ECAD174927FBBD359C4AFB45BE0C6A22AD589D22E/scale?width=400&amp;aspectRatio=1&amp;format=png" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Daksh Jain {" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />
                            @djain100
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>It’s unconscionable that there are families worried over the holidays that they’ll be evicted next month. Extending the eviction moratorium was a start, but Congress has to do more to help folks who can’t pay rent because of COVID-related unemployment.</p>
                    </div>
                </div>
                <img
                    src="https://variety.com/wp-content/uploads/2020/07/huc-ff-000185.jpg?resize=681,383"
                    alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
