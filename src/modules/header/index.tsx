import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './index.scss';
import AddNewSchoolModal from '../add-new-school-modal';

const Header: React.FunctionComponent = () => {
    const [showAddNewSchool, setShowAddNewSchool] = useState<Boolean>(false);

    return (
        <>
            <Navbar className="nav-bar">
                <Navbar.Brand href="#home" className="nav-bar__brand">
                    School App
                </Navbar.Brand>
                <Button onClick={() => setShowAddNewSchool(true)} className="nav-bar__btn" variant="primary"> Add New School</Button>
            </Navbar>
            <AddNewSchoolModal show={showAddNewSchool} onHide={() => setShowAddNewSchool(false)} />
        </>
    );
};

export default Header;