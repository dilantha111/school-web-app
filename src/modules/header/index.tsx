import React, { useState, ChangeEvent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import AddNewSchoolModal from '../add-new-school-modal';
import './index.scss';

interface Props {
    onSearch: (searchTerm: string) => void,
};

const toastTimeOut = 3000;

const Header: React.FunctionComponent<Props> = ({onSearch}) => {
    const [showAddNewSchool, setShowAddNewSchool] = useState<Boolean>(false);
    const [showToast, setShowToast] = useState<Boolean>(false);
    const [toastMessage, setToastMesage] = useState<{ header: string, body: string }>({ header: '', body: '' });

    const handleToastClose = (): void => {
        setToastMesage({ header: '', body: '' });
        setShowToast(false);
    };

    const handleShowToast = (toastHeader: string, message: string) => {
        setToastMesage({ header: toastHeader, body: message });
        setShowToast(true);

        setTimeout(() => {
            handleToastClose();
        }, toastTimeOut);
    };

    const handleOnSuccess = () => {
        handleShowToast("Success !!!", 'School has been added successfully !!!');
        setShowAddNewSchool(false);
    };

    const handleOnFailure = (error: string) => {
        handleShowToast("Failed !!!", error);
        setShowAddNewSchool(false);
    };

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            onSearch(event.target.value);
        }
    };

    return (
        <>
            <Navbar className="nav-bar">
                <Navbar.Brand className="nav-bar__brand">
                    School App
                </Navbar.Brand>
            </Navbar>
            <div className="nav-bar__add-or-search-container">
                <InputGroup className="nav-bar__search">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"> Search schools :  </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="ex: Name , address "
                        onChange={handleSearch}
                    />
                </InputGroup>
                <Button onClick={() => setShowAddNewSchool(true)} className="nav-bar__btn"> Add New School</Button>
            </div>
            <AddNewSchoolModal
                show={showAddNewSchool}
                onHide={() => setShowAddNewSchool(false)}
                onFailure={handleOnFailure}
                onSuccss={handleOnSuccess}
            />
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