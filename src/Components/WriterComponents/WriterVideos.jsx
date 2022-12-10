import React from 'react';

const Videos = (props) => {
    return (
        <div>
            {props.videoUrls.map((url, i) =>
                <div>
                    <iframe src={url} title="Writer video" allowFullScreen></iframe>
                    </div>)}
        </div>
    );
};

export default Videos;