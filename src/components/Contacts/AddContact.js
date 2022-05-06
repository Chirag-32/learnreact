import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddContact extends React.Component {
  render() {
    return (
      <>
        <div className="text-left">
          <h2>Add Contacts</h2>
        </div>
        <Form action="" className="form container">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="tel" placeholder="Mobile Number" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </>
    );
  }
}

export default AddContact;
