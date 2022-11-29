import React from "react";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import Title from "./Title/pdfTitle";
import PDFElements from "./PDFElements/PDFElements";
import UserInformation from "./UserInformation/UserInformation";
import Table from "./PDFTable/PDFTable";
import ThanksContainer from "./ThanksPDF/ThanksContainer";
const userData = {
    "nombre": "nombre Aqui",
    "email": "email Aqui"
}

const someData = {
    "item": [
        {
            "elemento_01": "information 01",
            "elemento_02": "Information 02",
            "elemento_03": "Information 02",
            "total": 50
        }
    ]
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 84,
        height: 70,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const PdfDocument = ({ data }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page} >
                <Title _title={'RECIBO'} />
                <PDFElements _id={'MongoId'} />
                <UserInformation userData={userData} />
                <Table data = {someData.item} />
                <ThanksContainer/>
            </Page>
        </Document>
    );
}

export default PdfDocument;