
export const ReservaHoraPage = () => {
  return (
    <>
        <form>
            <center><h1>Reserva Horario de Visita</h1></center>
            <hr />
            <div className='row'>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Rut</label>
                        <input 
                            type="txt" 
                            className="form-control" 
                            id="txtRut" 
                            aria-describedby="emailHelp" 
                            placeholder="123456789-k"
                        />
                            <small id="emailHelp" 
                            className="form-text text-muted">Ej: 123456789-k</small>
                    </div>
                 </div>
                 <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Nombre Completo</label>
                        <input 
                            type="txt" 
                            className="form-control" 
                            id="txtNombre" 
                            aria-describedby="emailHelp" 
                            placeholder="123456789-k"
                        />
                    </div>
                 </div>   
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Correo</label>
                        <input 
                            type="txt" 
                            className="form-control" 
                            id="txtEmail" 
                            aria-describedby="emailHelp" 
                            placeholder="123456789-k"
                        />
                    </div>
                 </div>
                 <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Direccion</label>
                        <input 
                            type="txt" 
                            className="form-control" 
                            id="txtDireccion" 
                            aria-describedby="emailHelp" 
                            placeholder="123456789-k"
                        />
                    </div>
                 </div>   
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Fecha</label>
                        <input 
                            type="txt" 
                            className="form-control" 
                            id="txtRut" 
                            aria-describedby="emailHelp" 
                            placeholder="123456789-k"
                        />
                    </div>
                 </div>
                 <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Horario</label>
                        <select className="form-control" id="slHora">
                        
                        
                        
                        </select>
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
                                className="btn btn-success">
                                    Reservar
                            </button>
                        </center>
                    </div>
                 </div>   
            </div>
            <br /><br />
        </form>
    </>
  )
}
