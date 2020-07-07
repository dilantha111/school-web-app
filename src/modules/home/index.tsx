import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../header';
import SchoolList from '../school-list';
import { fetchSchools, School } from '../../services/school-service';

const Home: React.FunctionComponent = () => {
    const [schools, setSchools] = useState<School[] | null>(null);

    const fetchData = React.useCallback(async (): Promise<void> => {
        const schoolsData = await fetchSchools();
        setSchools(schoolsData);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Container>
            <Header />
            <SchoolList schools={schools} />
        </Container>
    );
};

export default Home;