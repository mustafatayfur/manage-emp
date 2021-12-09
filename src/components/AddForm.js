import {Form, Button, FormGroup} from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext } from 'react';

const AddForm = ()=> {

    return(
       <Form>
            <FormGroup className="formgroup">
                <Form.Control
                    type="text"
                    placeholder= "Name *"
                    required
                />
            </FormGroup>
            <FormGroup className="formgroup">
                <Form.Control
                    type="email"
                    placeholder= "Email *"
                    required
                />
            </FormGroup>
            <FormGroup className="formgroup">
                <Form.Control
                    as="textarea"
                    placeholder= "Address *"
                    rows = {3}
                />
            </FormGroup>
            <FormGroup className="formgroup">
                <Form.Control
                    type="text"
                    placeholder= "Phone"
                />
            </FormGroup>
            <Button variant="success" type="submit" block>
                Add new employee
            </Button>
       </Form>
    )
}
export default AddForm;