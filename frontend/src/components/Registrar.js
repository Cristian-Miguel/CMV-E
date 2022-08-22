import '../style/Registrar.css';
import Sidebar from '../components/Sidebar';
import 'bootstrap/dist/css/bootstrap.css';

function Registrar() {
    
    return (
      <div className="Contenido">
        
        <Sidebar/>
            
        <section id='registroCliente' className="container">
            <h1> Registrar cliente </h1>
            <form id='infoCliente'>

                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="nombreInput" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombreInput" aria-describedby="Nombre" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                    </div>
                    <div className="mb-3 col">
                        <label htmlFor="apPaternoInput" className="form-label">Apellido paterno</label>
                        <input type="text" className="form-control" id="apPaternoInput" aria-describedby="Apellido paterno" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                    </div>
                    <div className="mb-3 col">
                        <label htmlFor="apMaternoInput" className="form-label">Apellido materno</label>
                        <input type="text" className="form-control" id="apMaternoInput" aria-describedby="Apellido materno" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                    </div>
                </div>

                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="rfcInput" className="form-label">RFC</label>
                        <input type="text" className="form-control" id="rfcInput" aria-describedby="RFC" minLength={13} maxLength={13} pattern="[A-Z]{4}[0-9]{6}[A-Z0-9]{3}" required/>
                    </div>
                    <div className="mb-3 col">
                        <label htmlFor="curpInput" className="form-label">CURP</label>
                        <input type="text" className="form-control" id="curpInput" aria-describedby="RFC" minLength={18} maxLength={18} pattern="[A-Z]{4}[0-9]{6}[H|M]{1}[A-Z]{2}[A-Z0-9]{5}" required/>
                    </div>
                </div>
                <div id='botones'>
                    <button type="reset" className="btn btn-secondary">Cancelar</button>
                    <button type="submit" className="btn btn-success">Guardar</button>
                </div>
                
            </form>

        </section>
        
      </div>
    );
  }
  
  export default Registrar;