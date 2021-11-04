import React from "react";
import {Form,Button} from "react-bootstrap";

function Main() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label>Age(in years)</Form.Label>
                    <Form.Control type="number" placeholder="21" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHeight">
                    <Form.Label>Height(in cm)</Form.Label>
                    <Form.Control type="string" placeholder="180" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicWeight">
                    <Form.Label>Weight(in kg)</Form.Label>
                    <Form.Control type="string" placeholder="80" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicWeight">
                    <Form.Label>Weight(in kg)</Form.Label>
                    <Form.Control type="string" placeholder="80" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicWeight">
                    <Form.Label>Weight(in kg)</Form.Label>
                    <Form.Control type="string" placeholder="80" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default Main;