import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
        fontSize: 12,
        fontStyle: 'bold',
    },
    label: {
        width: 60
    }
});

const PDFElements = ({ _id }) => {
    const date = new Date();
    return (
        <>
            <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Código:</Text>
                <Text style={styles.invoiceDate}>{_id}</Text>
            </View>
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Fecha: </Text>
                <Text>{date.toDateString()}</Text>
            </View>
        </>
    );
}

export default PDFElements;