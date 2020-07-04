import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../header';
import SchoolList from '../school-list';

const Home: React.FunctionComponent = () => {

    return (
        <Container>
            <Header />
            <SchoolList />
        </Container>
    );
};

export default Home;