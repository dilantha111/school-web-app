import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../header';
import SchoolList from '../school-list';
import { fetchSchools, School } from '../../services/school-service';

const Home: React.FunctionComponent = () => {
    const [schools, setSchools] = useState<School[] | null>(null);
    const [filteredSchools, setFilteredSchools] = useState<School[] | null>(null);

    const fetchData = React.useCallback(async (): Promise<void> => {
        try {
            const schoolsData = await fetchSchools();
            setSchools(schoolsData);
            setFilteredSchools(schoolsData);
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }, []);

    const handleSearch = (searchTerm: string) => {
        if (schools) {
            if (!searchTerm || searchTerm === '') {
                setFilteredSchools(schools);
            } else {
                setFilteredSchools(schools
                    .filter(school => `${school.schoolName} ${school.street} ${school.suburb} ${school.postCode} ${school.state}`
                        .toLowerCase().includes(searchTerm.toLowerCase())));
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Container>
            <Header onSearch={handleSearch} onAddNewSchoolSuccess={fetchData} />
            <SchoolList schools={filteredSchools} />
        </Container>
    );
};

export default Home;