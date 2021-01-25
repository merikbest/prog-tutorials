import React, {useEffect, useState} from 'react';
import {Col, ListGroup, Row} from "react-bootstrap";

import Topic from "../Topic/Topic";
import Service from "../../service/Service";

function Language(props) {
    const [topics, setTopics] = useState([]);
    const [topicContent, setTopicContent] = useState("");

    useEffect(() => {
        Service.getLanguage(props.match.params.language)
            .then((response) => {
                setTopics(response.data.topics);
                setTopicContent("");
            });
    }, [props.match.params.language]);

    const changeTopicContent = (content) => {
        setTopicContent(content);
    };

    return (
        <ListGroup>
            <h2>{props.match.params.language}</h2>
            <Row className="mt-5">
                <Col xs={2}>
                    {topics && topics.map((topic) => {
                        return (
                            <ListGroup.Item action onClick={() => changeTopicContent(topic.content)}>
                                {topic.title}
                            </ListGroup.Item>
                        );
                    })}
                </Col>
                <Col>
                    <Topic topicContent={topicContent}/>
                </Col>
            </Row>
        </ListGroup>
    );
}

export default Language;
