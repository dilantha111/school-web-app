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

    const handleSearch = (searchTerm: string) => {
        console.log(searchTerm);
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Container>
            <Header onSearch={handleSearch} />
            <SchoolList schools={schools} />
        </Container>
    );
};

export default Home;