import React from 'react'
import fileDownload from 'js-file-download';
import jsonList from '../config/listCertificado.json';
import file  from '/assets/certificados/certificado-16900918-k.pdf';
import { useState } from 'react';


export const DowloadFile = ({urlPdf,namePdf}) =>{



  return (<>
  <a  
    href={urlPdf}
    target="_blank" 
    rel="noopener noreferrer" 
    className='btn btn-success stretched-link'
    download={namePdf}> 
    <span className="bi bi-box-arrow-down">&nbsp;</span> 
    <span>Descargar</span>
  </a>
</>);

}
export const CertificadosPage = () => {

  const [inputValue,setInputValue] = useState({
    status : false, 
    urlPdf : null,
    namePdf : null,
    txtBuscar : null
  });

  const  handleChange = (event) => {
    setInputValue({
      txtBuscar: event.target.value
    });
  }

  const descargarCertificado = ()=> {

    const {txtBuscar} = inputValue;
    jsonList.map(list  => {
      if(list.rut == txtBuscar){
        setInputValue({
          status: true,
          urlPdf : list.url,
          namePdf : list.name
        });
          
      }
    });
  }
  const {status,urlPdf,namePdf} = inputValue;
 
  return (
    <>
      <center><h1> CERTIFICADOS</h1></center>
      <hr />
      <form className='form mt-2'>
        <div className='cols-12'>
            <label  className="form-label">Ingresar Rut</label>
            <input 
                  type="text" 
                  className="form-control" 
                  id="txtBuscar" 
                  aria-describedby="buscar"
                  onChange={handleChange}
            />
        </div>
        <br />
        <div className='cols-12'>
            <center>
              <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={descargarCertificado}
                  >
                  Buscar
              </button>
            </center>
        </div>
        <div className='cols-12'>
        <center><br />
        {
          (status)&&
            (<DowloadFile 
              urlPdf = {urlPdf}
              namePdf = {namePdf}
            />)
           
        }
        </center>
        </div>
        <br />
      </form>
    </>
  )
}
