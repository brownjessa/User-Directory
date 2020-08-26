import React from "react";
const EmployeeTable = (props) => {
  const { users } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th className="sort-option" onClick={props.handleReverseOrder}>
            Last Name
          </th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>State</th>
          <th>Zip Code</th>
          <th>email</th>
        </tr>
      </thead>
    </table>
  );
};
