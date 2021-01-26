import React, {useEffect, useState} from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Service from "../../service/Service";

function EditTopic(props) {
    const [topic, setTopic] = useState({});
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        Service.getTopic(props.match.params.id).then((response) => {
            setTopic(response.data);
            setTitle(response.data.title);
        });
    }, []);

    const onFormSubmit = (event) => {
        event.preventDefault();

        let topic = {
            id: props.match.params.id,
            title,
            content
        }

        Service.editTopic(topic)
            .then((response) => props.history.push("/"));
    };

    return (
        <Form onSubmit={onFormSubmit}>
            <h2>Обновить статью</h2>
            <Form.Label>Обновить тему статьи</Form.Label>
            <Form.Control
                type="text"
                placeholder="Тема статьи"
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}/>
            <Form.Group>
                <Col className="editor mt-5">
                    <CKEditor
                        editor={ClassicEditor}
                        data={topic.content}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setContent(data);
                        }}/>
                </Col>
            </Form.Group>
            <Button className="mt-3" variant="dark" type="submit">
                Обновить
            </Button>
        </Form>
    );
}

export default EditTopic;
