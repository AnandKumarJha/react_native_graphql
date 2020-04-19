import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import DetailTextView from '../component/detailTextView';

const EmployeeDetails = (props) => {

    const singleEmployee = props.navigation.state.params.employee;
   
    return (
        <View style={{ flex: 1 }}>
            <DetailTextView title="Name : " description={singleEmployee.name} />
            <DetailTextView title="Gender : " description={singleEmployee.gender} />
            <DetailTextView title="Dob : " description={singleEmployee.dob} />
            <DetailTextView title="Specialisation : " description={singleEmployee.specialisation} />
            <DetailTextView title="Email : " description={singleEmployee.email} />
            <DetailTextView title="Phone Number : " description={singleEmployee.phone} />
            <DetailTextView title="Address : " description={singleEmployee.address} />
        </View>
    );
};

const styles = StyleSheet.create({
    
    
});

export default EmployeeDetails;