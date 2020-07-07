import React from "react";
import Table from "react-bootstrap/Table";
import { School } from "../../services/school-service";

interface Props {
    schools: School[] | null
};

const SchoolList: React.FunctionComponent<Props> = ({ schools }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Number of students </th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {schools && schools.map(school => (
                    <tr key={school.id}>
                        <td>{school.id}</td>
                        <td> {school.schoolName} </td>
                        <td> {school.numberOfStudents} </td>
                        <td> {`${school.street}, ${school.suburb}, ${school.state}, ${school.postcode}`} </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default SchoolList;