import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import gql from 'graphql-tag';
import EmployeesContext from '../context/EmployeesContext';
import RowEmployee from '../component/row_employee';
import ChoiceModal from '../component/choiceModal';
import YesNoModal from '../component/yesNoModal';

const AllUser = (props) => {

    const { employees, addBulkEmployees, deleteEmployee, isToEdit } = useContext(EmployeesContext);

    const endPointUrl = 'http://10.0.2.2:9000/graphql'
    const client = new ApolloClient({
        link: new HttpLink({ uri: endPointUrl }),
        cache: new InMemoryCache()
    });

    const [modalDisplay, setModalDisplay] = useState(false);
    const [modalYesNoDisplay, setModalYesNoDisplay] = useState(false);
    const [employee, setEmployee] = useState();

    const loadData = () => {
        client.query({
            query: gql`
                query {
                    employees {
                        id,
                        name,
                        gender,
                        dob,
                        specialisation,
                        email,
                        phone_num,
                        address,
                        profile_pic
                    }
                  }
            `
        })
            .then(response => response.data)
            .then(jsonData => {
                console.log(jsonData);
                addBulkEmployees(jsonData.employees);
            });
    }

    useEffect(() => {
        loadData();
    }, [isToEdit]);

    const navigateToAddEmployee = () => {
        props.navigation.navigate('AddEmployee', { navType: 'Add_Employee' });
    }

    const navigateToEditEmployee = () => {
        hideModal();
        props.navigation.navigate('AddEmployee', { navType: 'Edit_Employee', employee: employee })
    }

    const navigateToEmpDetailEmployee = (emp) => {
        props.navigation.navigate('EmployeeDetails', { employee: emp });
    }

    const showModal = (emp) => {
        setModalDisplay(true);
        setEmployee(emp);
    }

    const hideModal = () => {
        setModalDisplay(false);
    }

    const deleteAnEmployee = () => {
        setModalYesNoDisplay(false);
        client.mutate({
            mutation: gql`
                    mutation {
                        deleteEmployee(id:"${employee.id}")
                     }
                `
        })
            .then(response => {
                console.log(response.data);
                deleteEmployee(employee.id);
            });
    }

    return (
        <View style={{ flex: 1 }}>
            <ChoiceModal isVisible={modalDisplay}
                onEditClick={() => navigateToEditEmployee()}
                onDeleteClick={() => {
                    hideModal();
                    setModalYesNoDisplay(true);
                }}
                onCancelClick={() => hideModal()}
            />

            <YesNoModal
                isVisible={modalYesNoDisplay}
                onDeleteClick={() => deleteAnEmployee()}
                onCancelClick={() => setModalYesNoDisplay(false)} />

            <FlatList data={employees}
                renderItem={({ item }) => <TouchableOpacity
                    onPress={() => navigateToEmpDetailEmployee(item)}
                    onLongPress={() => showModal(item)}
                    style={{ flexDirection: 'column' }}>
                    <RowEmployee item={item} />
                </TouchableOpacity>}>
            </FlatList>

            <TouchableOpacity style={styles.plus_container}
                onPress={() => navigateToAddEmployee()}>
                <Text style={styles.plus_style}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    plus_style: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    plus_container: {
        width: 80,
        height: 80,
        backgroundColor: 'yellow',
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
    },
})

export default AllUser;