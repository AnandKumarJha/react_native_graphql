import React from 'react';
import Modal from 'react-native-modal';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

const YesNoModal = ({isVisible, onDeleteClick, onCancelClick}) => {
    return (
        <View>
            <Modal isVisible={isVisible}>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={styles.modal_text_delete}>
                        Are you sure want to delete this employee?
                    </Text>
                    <View style={styles.devider} />
                    <View style={{ flexDirection: 'row-reverse', backgroundColor: 'white' }}>
                        <Text style={styles.delete_modal_cancel}
                            onPress={() => onCancelClick()}>
                            Cancel
                        </Text>
                        <Text style={styles.delete_modal_cancel}
                            onPress={() => onDeleteClick()}>
                            Delete
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    devider: {
        width: '100%',
        height: .8,
        backgroundColor: '#999999'
    },
    modal_text: {
        textAlign: 'center',
        backgroundColor: 'white',
        paddingVertical: 15,
        fontSize: 20
    },
    modal_header: {
        textAlign: 'center',
        backgroundColor: 'white',
        paddingVertical: 15,
        fontSize: 20,
        color: 'rgb(3, 132, 252)',
    },
    modal_cancel: {
        textAlign: 'center',
        backgroundColor: 'white',
        paddingVertical: 15,
        fontSize: 20,
        color: 'rgb(3, 132, 252)',
    },
    modal_text_delete: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 25,
        fontSize: 20
    },
    delete_modal_cancel: {
        textAlign: 'center',
        backgroundColor: 'white',
        paddingVertical: 12,
        fontSize: 20,
        color: 'rgb(3, 132, 252)',
        marginHorizontal: 20,
    }
});

export default YesNoModal;