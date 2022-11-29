import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#3778C2'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#3778C2',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    description: {
        width: '60%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    qty: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    amount: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
});

const RowTable = ({ items }) => {
    const rows = items.map(item =>
        <View style={styles.row} key={'id'}>
            <Text style={styles.description}>{item.elemento_01}</Text>
            <Text style={styles.qty}>{item.elemento_02}</Text>
            <Text style={styles.rate}>{item.elemento_03}</Text>
            <Text style={styles.amount}>{(item.total).toFixed(2)}</Text>
        </View>
    );
    return (
        <Fragment>
            {rows}
        </Fragment>
    );
};

export default RowTable;