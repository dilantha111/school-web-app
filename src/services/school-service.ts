import fetchClient from '../utils/fetch-client';

export interface School {
    id?: string,
    schoolName: string,
    numberOfStudents: number | '',
    street: string,
    suburb: string,
    postCode: number | '',
    state: string,
};

const API_URL = 'http://localhost:3020/school';

export const addNewSchool = async (school: School): Promise<void> => {
    const res = await fetchClient(API_URL, { body: school });
    if (res.error) {
        throw Error("Failed to add the school !!!\nPlease Try again !!!");
    }
};

export const fetchSchools = async (): Promise<School[]> => {
    const scholData = await fetchClient(API_URL);
    return scholData.schools;
};