import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AllEmployees from './AllEmployees';
import AddEmployee from './AddEmployee';
import EmployeeDetails from './EmployeeDetails';

import { EmployeeProvider } from '../context/EmployeesContext';

const MainNavigator = createStackNavigator({
  AllEmployees: {
    screen: AllEmployees,

    navigationOptions: {
      headerTitle: 'Employee List',
      headerShown: true,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'rgb(3, 132, 252)' },
      headerTitleAlign: 'center',
    }
  },
  AddEmployee: {
    screen: AddEmployee,
    navigationOptions: {
      headerTitle: 'Employee Details',
      headerShown: true,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'rgb(3, 132, 252)' },
      headerTitleAlign: 'center',
    }
  },
  EmployeeDetails: {
    screen: EmployeeDetails,
    navigationOptions: {
      headerTitle: 'Employee Details',
      headerShown: true,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'rgb(3, 132, 252)' },
      headerTitleAlign: 'center',
    }
  },
},
  {
    initialRouteName: 'AllEmployees',
  }
);

const App = createAppContainer(MainNavigator);
export default () => {
  return <EmployeeProvider>
    <App />
  </EmployeeProvider>
};