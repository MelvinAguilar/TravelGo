import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React, {Fragment} from 'react';
import "./PDFView.scss";
//import './App.css';
//import InvoiceData from './jsonData/InvoiceData';
import PDF from "../../components/PDF/PDF";


const PDFView = ()=>{
  const fileName = "Recibo.pdf";

  return (
    <div className={"container"}>    
    <PDFViewer width={800} height={500} showToolbar={false}>
       <PDF data={'some data'} />
    </PDFViewer>
      <div className={'download-link'}>
        <PDFDownloadLink document={<PDF data={'some data'}/>} fileName={fileName} >
          {({ blob, url, loading, error }) => loading ? "Loading..." : "Download Invoice"}
        </PDFDownloadLink>
      </div>
    </div> 

      );
}

export default PDFView;