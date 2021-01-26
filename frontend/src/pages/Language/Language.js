import React, {useEffect, useState} from 'react';
import {Col, ListGroup, Row} from "react-bootstrap";

import Topic from "../Topic/Topic";
import Service from "../../service/Service";

function Language(props) {
    const [topics, setTopics] = useState([]);
    const [topicContent, setTopicContent] = useState({
        id: "",
        title: "",
        content: ""
    });

    useEffect(() => {
        Service.getLanguage(props.match.params.language)
            .then((response) => {
                setTopics(response.data.topics);
                setTopicContent({
                    id: "",
                    title: "",
                    content: ""
                });
            });
    }, [props.match.params.language]);

    const changeTopicContent = (id, title, content) => {
        setTopicContent({id, title, content});
    };

    return (
        <ListGroup>
            <h2>{props.match.params.language}</h2>
            <Row className="mt-5">
                <Col xs={3}>
                    {topics.map((topic) => {
                        return (
                            <ListGroup.Item action
                                            onClick={() => changeTopicContent(topic.id, topic.title, topic.content)}>
                                {topic.title}
                            </ListGroup.Item>
                        );
                    })}
                </Col>
                <Col>
                    {topicContent.id ? <Topic topicContent={topicContent}/> : null}
                </Col>
            </Row>
        </ListGroup>
    );
}

export default Language;
