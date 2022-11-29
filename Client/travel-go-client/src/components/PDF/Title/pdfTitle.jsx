import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 24,
    },
    reportTitle: {
        color: '#3778C2',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});

const Title = ({_title})=>{
    return(
        <View style={styles.titleContainer}>
            <Text style={styles.reportTitle}>{_title}</Text>
        </View>
    );
}

export default Title;