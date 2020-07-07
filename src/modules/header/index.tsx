import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast'
import './index.scss';
import AddNewSchoolModal from '../add-new-school-modal';

const toastTimeOut = 3000;

const Header: React.FunctionComponent = () => {
    const [showAddNewSchool, setShowAddNewSchool] = useState<Boolean>(false);
    const [showToast, setShowToast] = useState<Boolean>(false);
    const [toastMessage, setToastMesage] = useState<{ header: string, body: string }>({ header: '', body: '' });

    const handleToastClose = (): void => {
        setToastMesage({ header: '', body: '' });
        setShowToast(false);
    };

    const handleShowToast = (error: string | false): void => {
        setShowAddNewSchool(false);
        if (error) {
            setToastMesage({ header: "Failed !!!", body: error });
        } else {
            setToastMesage({ header: "Success !!!", body: 'School has been added successfully !!!' });
        }
        setShowToast(true);

        setTimeout(() => {
            handleToastClose();
        }, toastTimeOut);
    };

    return (
        <>
            <Navbar className="nav-bar">
                <Navbar.Brand href="#home" className="nav-bar__brand">
                    School App
                </Navbar.Brand>
                <Button onClick={() => setShowAddNewSchool(true)} className="nav-bar__btn" variant="primary"> Add New School</Button>
            </Navbar>
            <AddNewSchoolModal show={showAddNewSchool} onHide={handleShowToast} />
            {showToast &&
                <Toast
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                    }}
                    onClose={handleToastClose}
                >
                    <Toast.Header>
                        <strong className="mr-auto">{toastMessage.header}</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage.body}</Toast.Body>
                </Toast>}
        </>
    );
};

export default Header;