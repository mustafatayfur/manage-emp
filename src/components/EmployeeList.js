/** @format */

import { useContext, useState } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../contexts/EmployeeContext";

import {Button, Modal} from "react-bootstrap";
import AddForm from "./AddForm";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);

  const [show, setShow] = useState(true)

  return (
    <>
      <div className='table-title'>
        <div className='row'>
          <div className='col-sm-6'>
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className='col-sm-6'>
            <Button 
              className='btn btn-success text-white'
              data-toggle='modal'>
              <i className='material-icons'>&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Employee employees={employees} />
        </tbody>
      </table>

      <Modal show={show}>
        <Modal.Header>
            <Modal.Title>
                Add Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary">
                Close Button
            </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
};

export default EmployeeList;
