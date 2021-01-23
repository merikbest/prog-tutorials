import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

import Service from "../../service/Service";

function AddLanguage(props) {
    const [programmingLanguage, setProgrammingLanguage] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        let language = {programmingLanguage};

        Service.addLanguage(language)
            .then(res => {
                props.history.push('/');
            });
    }

    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Add language</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Add language"
                    name="programmingLanguage"
                    value={programmingLanguage}
                    onChange={(event) => setProgrammingLanguage(event.target.value)}/>
                <Form.Text className="text-muted">
                    Add language
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddLanguage;
