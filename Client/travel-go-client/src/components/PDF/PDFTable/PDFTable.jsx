import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import HeaderTable from './HeaderTable/HeaderTable';
import RowTable from './RowTable/RowTable';
import FooterTable from './FooterTable/FooterTable';

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#3778C2',
    },
});

const Table = ({ data }) => {
    
    return(  
        <View style={styles.tableContainer}>
            <HeaderTable />
            <RowTable items={data} />
            <FooterTable items={data} />
        </View>
    );
};

export default Table;