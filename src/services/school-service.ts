import fetchClient from '../utils/fetch-client';

export interface School {
    id?: string,
    schoolName: string,
    numberOfStudents: number | '',
    street: string,
    suburb: string,
    postcode: number | '',
    state: string,
};

export const addNewSchool = async (school: School): Promise<number> => {
    const res = await fetchClient('http://localhost:3001/api/school', school);
    console.log(res);
    return 1;
};

export const fetchSchools = async (): Promise<School[]> => {
    const scholData = await fetchClient('http://localhost:3001/api/school');
    return scholData.schools;
};