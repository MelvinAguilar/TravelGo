import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
        justifyContent: 'flex-start',
        width: '50%'
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
});

const UserInformation = ({ userData }) => {
    return (<View style={styles.headerContainer}>
        <Text style={styles.billTo}>Usuario:</Text>
        <Text>{userData.nombre}</Text>
        <Text>{userData.email}</Text>
    </View>
    );
};

export default UserInformation;