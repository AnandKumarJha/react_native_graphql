import React, {useState} from 'react';

const EmployeesContext = React.createContext();

export const EmployeeProvider = ({ children }) => {

    const [employees, setEmployees] = useState([]);
    const [isToEdit, setToEdit] = useState(false);

    const addBulkEmployees = (employees1) => {
        console.log("internal asdf"+employees1.length)
        setEmployees(employees1);
    }

    const addEmployee = (emp) => {
        setEmployees([...employees, emp]);
    }

    const updateEmployee = (emp) => {
        for(var i=0;i<employees.length; i++){
            if(employees[i].id==emp.id){
                console.log(employees[i].id+" "+emp.id);
                employees[i] = emp;
                setToEdit(!isToEdit);
                break;
            }
        }
    }

    const deleteEmployee = (emp_id) => {
        for(var i=0;i<employees.length; i++){
            if(employees[i].id==emp_id){
                employees.splice(i, 1);
            }
        }
    }

    return <EmployeesContext.Provider 
    value={{employees:employees, addBulkEmployees, addEmployee, deleteEmployee, updateEmployee}}>
        {children}
    </EmployeesContext.Provider>
};

export default EmployeesContext;