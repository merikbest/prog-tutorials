import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";

import Header from "../../components/Header/Header";
import Main from "../Main/Main";
import Language from "../Language/Language";
import AddLanguage from "../AddLanguage/AddLanguage";

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
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
