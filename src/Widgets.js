import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1341451483993260034"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="BreakingNews"
                    options={{ height: 400 }} />

            </div>
        </div>
    )
}

export default Widgets
