import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";

import Header from "../../components/Header/Header";
import Main from "../Main/Main";
import Language from "../Language/Language";
import AddLanguage from "../AddLanguage/AddLanguage";
import AddTopic from "../AddTopic/AddTopic";

function App() {
    return (
        <Router>
            <Container>
                <Header/>
                <Row>
                    <Col lg={12} className={"margin-top"}>
                        <Switch>
                            <Route path="/" exact component={Main}/>
                            <Route path="/language" exact component={Language}/>
                            <Route path="/language/add" exact component={AddLanguage}/>
                            <Route path="/topic/add" exact component={AddTopic}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
