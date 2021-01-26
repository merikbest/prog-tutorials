import React, {useEffect, useState} from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Service from "../../service/Service";

function AddTopic(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [languages, setLanguages] = useState([]);
    const [languageId, setLanguageId] = useState("");

    useEffect(() => {
        Service.getLanguages().then((response) => {
            setLanguages(response.data);
        });
    }, []);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const language = languages.find((language) => language.id === parseInt(languageId));
        let topic = {title, content, languageId: language.id}

        Service.addTopic(topic)
            .then((response) => props.history.push("/"));
    };

    return (
        <Container className="mt-5">
            <h2>Добавить статью</h2>
            <Form onSubmit={onFormSubmit}>
                <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                        Выберите язык
                    </Form.Label>
                    <Col sm={10}>
                        {languages.map((language) => {
                            return (
                                <Form.Check
                                    id={language.id}
                                    type="radio"
                                    label={language.programmingLanguage}
                                    name="language"
                                    value={language.id}
                                    onChange={(event) => setLanguageId(event.target.value)}/>
                            )
                        })}
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Добавить тему статьи</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Тема статьи"
                        name="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Col className="editor mt-5">
                        <CKEditor
                            editor={ClassicEditor}
                            data={content}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setContent(data);
                            }}/>
                    </Col>
                </Form.Group>
                <Button className="mt-3" variant="dark" type="submit">
                    Отправить
                </Button>
            </Form>
        </Container>
    );
}

export default AddTopic;
