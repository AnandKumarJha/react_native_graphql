import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const detailTextVeiw = (props) => {
    return (
        <View style={styles.container_row}>
            <Text style={styles.title}>{props.title} </Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container_row: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
        color:'#999999',
        fontWeight : 'bold'
    },
    description: {
        fontSize: 18,
    }
});

export default detailTextVeiw;