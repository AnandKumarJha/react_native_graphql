import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const RowEmployee = ({ item }) => {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                {/* <View >
                            <Image style={styles.imageStyle} source={imageUri}></Image>
                        </View> */}
                <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 10, justifyContent: 'center' }}>
                    <Text style={styles.row_header}>{item.name}</Text>
                    <Text style={styles.row_specialisation}>{item.specialisation}</Text>
                    <Text style={styles.row_email}>{item.email}</Text>
                </View>
                <View style={{ justifyContent: "center", }}>
                    <View style={styles.gender_text_container}>
                        <Text style={styles.gender_text}>
                            {(item.gender == null || item.gender.length == 0) ? "M" :
                                (item.gender.length == 1 ? item.gender :
                                    item.gender.substring(0, 1))}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.devider} />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 10,
    },
    devider: {
        width: '100%',
        height: .8,
        backgroundColor: '#999999'
    },
    gender_text_container: {
        justifyContent: "center",
        marginRight: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#CCCCCC',
    },
    gender_text: {
        fontSize: 22,
        fontWeight: "bold",
        margin: 10
    },
    row_header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 2
    },
    row_specialisation: {
        fontSize: 14,
        fontWeight: "normal",
        color: '#000000'
    },
    row_email: {
        fontSize: 14,
        fontWeight: "normal",
        color: '#999999'
    },
     
})

export default RowEmployee;