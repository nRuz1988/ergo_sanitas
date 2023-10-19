//npm install react-datepicker --save
//https://www.npmjs.com/package/react-datepicker
//https://reactdatepicker.com/
//https://react.email/docs/integrations/nodemailer
//https://appatico.com/enviar-email-con-react/
import DatePicker from 'react-datepicker';
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)
import 'react-datepicker/dist/react-datepicker.css';
import * as React from 'react';
import { useState,useRef } from 'react';

import emailjs from 'emailjs-com';
import ApiKey from '../config/ApiKey';

export const ReservaHoraPage = () => {

    const [inputForm,setInputForm] = useState({
        status : false, 
        msg : null,
        startDate : new Date(),
        txtRut: null,
        txtNombre: null,
        txtEmail: null,
        txtDireccion: null,
        txtCelular: null,
    });
    const form = useRef();
    const handleInputChange = ({target}) => {
        const value = target.value;
        const name = target.name;
        setInputForm({
           ...inputForm, 
          [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let statusVa = false;
        let msgError = null;
        if(inputForm.txtRut==null){
            statusVa = true;
            msgError = 'Ingresar el Rut del Paciente...'
        }
        else if(inputForm.txtNombre==null){
            statusVa = true;
            msgError = 'Ingresar el Nombre del Paciente...'
        }
        else if(inputForm.txtEmail==null){
            statusVa = true;
            msgError = 'Ingresar el Correo...'
        }
        else if(inputForm.txtDireccion==null){
            statusVa = true;
            msgError = 'Ingresar la Direccion...'
        }
        else if(inputForm.startDate==null){
            statusVa = true;
            msgError = 'Ingresar la Fecha y Hora de la Reserva...'
        }
        else if(inputForm.txtCelular==null){
            statusVa = true;
            msgError = 'Ingresar el Numero de Celular...'
        }
        
        setInputForm({
            ...inputForm, 
            status : statusVa,
            msg : msgError
        });
       
       emailjs.send(ApiKey.SERVICE_ID, ApiKey.TEMPLATE_ID, form.current, ApiKey.USER_ID)
        .then(result => {
          alert('Correo enviado correctamente')
        },
        error => {
          alert(`Ocurrio un error, intente nuevamente - ${error}`)
        })
    }
    const {status,startDate,msg} = inputForm;

  return (
    <>
        <form onSubmit={handleSubmit} mathod='POST'>
            <center><h1>Reserva Horario de Visita</h1></center>
            <hr />
            <div className='row'>
                <div className='col-6'>
                    <div className="form-group">
                        <label>Rut</label>
                        <input 
                            type="txt" 
                            className="form-control" 
                            id="txtRut"
                            name="txtRut" 
                            aria-describedby="emailHelp" 
                            placeholder="123456789-k"
                            onChange={handleInputChange}
                        />
                            <small id="emailHelp" 
                            className="form-text text-muted">Ej: 123456789-k</small>
                    </div>
                 </div>
                 <div className='col-6'>
                    <div className="form-group">
                        <label>Nombre Completo</label>
                        <input 
                            type="txt" 
                            className="form-control" 
                            id="txtNombre" 
                            name="txtNombre" 
                            placeholder="juan perez peralez"
                            onChange={handleInputChange}
                        />
                    </div>
                 </div>   
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className="form-group">
                        <label>Correo</label>
                        <input 
                            type="txt" 
                            className="form-control" 
                            id="txtEmail" 
                            name="txtEmail" 
                            placeholder="ergosanitas@gmail.cl"
                            onChange={handleInputChange}
                        />
                    </div>
                 </div>
                 <div className='col-6'>
                    <div className="form-group">
                        <label>Direccion</label>
                        <input 
                            type="txt" 
                            className="form-control" 
                            id="txtDireccion"
                            name="txtDireccion" 
                            placeholder="calle en el piso 123"
                            onChange={handleInputChange}
                        />
                    </div>
                 </div>   
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className="form-group">
                        <label>Fecha Reserva</label><br />
                        <DatePicker 
                            dateFormat="dd/MM/yyyy hh:mm"
                            showIcon
                            selected={startDate} 
                            className="form-control"
                            onChange={(date) => setInputForm({
                                ...inputForm, 
                                startDate : date
                            })} 
                            showTimeSelect
                            locale="es"
                            icon="fa fa-calendar"
                            isClearable
                        >
                            <div style={{ color: "red" }}>
                            Recuerda Reservar la Fecha y Hora</div>
                        </DatePicker> 
                    </div>
                 </div>
                 <div className='col-6'>
                    <div className="form-group">
                        <label>N° celular</label>
                        <input 
                            type="txt" 
                            className="form-control" 
                            id="txtCelular"
                            name="txtCelular" 
                            placeholder="9123456789"
                            onChange={handleInputChange}
                        />
                    </div>
                 </div>   
            </div>
            <br />
            <div className='row'>
                <div className='col-12'>
                    <div className="form-group">
                        <center>
                            <button 
                                type="button" 
                                className="btn btn-success"
                                onClick={handleSubmit}
                            >
                                    Reservar
                            </button>
                        </center>
                    </div>
                 </div>   
            </div>
            <br />
            <div className='row'>
            {
                (status) &&
                <div className="alert alert-danger" role="alert">
                    <span className="bi bi-x-octagon-fill">&nbsp;</span>&nbsp;        
                    {msg}
                </div>
            }
                
            </div>
            <br />
        </form>
    </>
  )
}
