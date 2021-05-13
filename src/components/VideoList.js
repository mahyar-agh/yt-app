import React from 'react';
import VideoItem from './VideoItem';
const VideoList =({videos,onVideoSelect})=>{
    const renderedVideos=videos.map(video=>{
        return <VideoItem video={video} onVideoSelect={onVideoSelect} />
    })
return (
    <div className="ui relaxed divided list">
        {renderedVideos}
    </div>
);
}
export default VideoList;