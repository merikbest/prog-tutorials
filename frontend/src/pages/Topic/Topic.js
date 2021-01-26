import React from 'react';
import parse from 'html-react-parser';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Topic(props) {
    return (
        <div>
            {parse(props.topicContent.content)}
            <Link to={`/topic/edit/${props.topicContent.id}`}>
                <Button className="mt-3" variant="dark" type="submit">
                    Редактировать
                </Button>
            </Link>
        </div>
    );
}

export default Topic;
