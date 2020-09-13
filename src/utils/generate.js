import 'react-native-get-random-values';
import {times} from 'rambdax';
import {v4 as uuid} from 'uuid';
import EmployeeData from './EmployeeData';

const makeRandomEmployee = (i) => {
    const employee = EmployeeData[i];
    return {
        id: uuid(),
        ...employee,
    };
};

const generateEmployees = (employeeCount) => {
    const employees = times((i) => makeRandomEmployee(i), employeeCount);
    return employees;
};

export default generateEmployees