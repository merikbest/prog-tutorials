import React from 'react';
import parse from 'html-react-parser';

function Topic(props) {
    return (
        <div>
            {parse(props.topicContent)}
        </div>
    );
}

export default Topic;
