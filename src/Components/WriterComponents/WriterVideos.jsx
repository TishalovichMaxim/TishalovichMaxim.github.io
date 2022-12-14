import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './videos.css';

const Videos = (props) => {
    return (
        <div className="videos">
            {props.videoUrls.map((url, i) =>
                    <iframe className="video"  src={url} title="Writer video" allowFullScreen></iframe>
                )}
        </div>
    );
};

export default Videos;