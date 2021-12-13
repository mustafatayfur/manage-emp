const Employee = ({ employees }) => {
  return (
    <>
      {employees.map((employee, index) => (
        <tr key={index}>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.address}</td>
          <td>{employee.phone}</td>
          <td>
            <button
            href='#deleteEmployeeModal'
            className='btn text-warning btn-act'
            data-toggle='modal'>
              <i className='material-icons' data-toggle='tooltip' title='Edit'>
                &#xE254;
              </i>
            </button>
            <button
              href='#deleteEmployeeModal'
              className='btn text-danger btn-act'
              data-toggle='modal'>
              <i
                className='material-icons'
                data-toggle='tooltip'
                title='Delete'>
                &#xE872;
              </i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Employee;
