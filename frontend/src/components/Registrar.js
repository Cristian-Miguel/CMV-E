import '../style/Registrar.css';
import Sidebar from '../components/Sidebar';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Component } from 'react';
import qs from 'qs';

const url = 'http://localhost:4000/Agregar/Cliente'

class Registrar extends Component{
    state = {
        form:{
            nombre:'',
            apellido_paterno: '',
            apellido_materno: '',
            rfc: '',
            curp: '',
        }
    }

    insertCliente = async () => {
        console.log("url");
        //  'Content-Type': 'application/x-www-form-urlencoded'
        const config = {
            headers: {
                'X-Powered-By': 'Express',
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
          }

        await axios.post(url,qs.stringify(this.state.form), config)
        .then(res => console.log(res))
        .catch((error) => console.log(error.message));
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    render(){
        return(
          <div className="Contenido">
        
            <Sidebar/>
                
            <section id='registroCliente' className="container">
                <h1> Registrar cliente </h1>
                {/* <form id='infoCliente' action='http://localhost:3000/#/Registro' method='GET'> */}

                    <div className="row">
                        <div className="mb-3 col">
                            <label htmlFor="nombreInput" className="form-label">Nombre</label>
                            <input type="text" className="form-control" name='nombre' id="nombreInput" onChange={this.handleChange} aria-describedby="Nombre" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="apPaternoInput" className="form-label">Apellido paterno</label>
                            <input type="text" className="form-control" name='apellido_paterno' id="apPaternoInput" onChange={this.handleChange} aria-describedby="Apellido paterno" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="apMaternoInput" className="form-label">Apellido materno</label>
                            <input type="text" className="form-control" name='apellido_materno' id="apMaternoInput" onChange={this.handleChange} aria-describedby="Apellido materno" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3 col">
                            <label htmlFor="rfcInput" className="form-label">RFC</label>
                            <input type="text" className="form-control" name='rfc' id="rfcInput" onChange={this.handleChange} aria-describedby="RFC" minLength={13} maxLength={13} pattern="[A-Z]{4}[0-9]{6}[A-Z0-9]{3}" required/>
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="curpInput" className="form-label">CURP</label>
                            <input type="text" className="form-control" name='curp' id="curpInput" onChange={this.handleChange} aria-describedby="CURP" minLength={18} maxLength={18} pattern="[A-Z]{4}[0-9]{6}[H|M]{1}[A-Z]{2}[A-Z0-9]{5}" required/>
                        </div>
                    </div>

                    <div id='botones'>
                        <button type="reset" className="btn btn-secondary">Cancelar</button>
                        <button className="btn btn-success" onClick={() => this.insertCliente()} >Guardar</button>
                    </div>
                    
                {/* </form> */}

            </section>
        
        </div>  
        );
        
    }


}

// function Registrar() {

//     handleChan
    
//     const InsertCliente = async () => {
//         let headers = { headers: {'Access-Control-Allow-Origin': '*'} }
//         const nombre = document.getElementById('nombreInput').value,
//             apPaterno =  document.getElementById('apPaternoInput').value,
//             apMaterno = document.getElementById('apMaternoInput').value,
//             rfc =  document.getElementById('rfcInput').value,
//             curp = document.getElementById('curpInput').value;
//         const data = { 
//             nombre: nombre,
//             apellido_paterno: apPaterno,
//             apellido_materno: apMaterno,
//             rfc: rfc,
//             curp: curp,
//         }
//         const params = data;
//         const url  = "http://localhost:4000//Editar_Cliente";

//         const respuesta = await axios.post(url, {hola:'s'});
//         console.log(respuesta);
//         // .then( res => {console.log(res);})
//         // .catch(function (error) {console.log(error);});
//     }

//     return (
//       <div className="Contenido">
        
//         <Sidebar/>
            
//         <section id='registroCliente' className="container">
//             <h1> Registrar cliente </h1>
//             <form id='infoCliente' action='http://localhost:3000/#/Registro' >

//                 <div className="row">
//                     <div className="mb-3 col">
//                         <label htmlFor="nombreInput" className="form-label">Nombre</label>
//                         <input type="text" className="form-control" id="nombreInput" aria-describedby="Nombre" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
//                     </div>
//                     <div className="mb-3 col">
//                         <label htmlFor="apPaternoInput" className="form-label">Apellido paterno</label>
//                         <input type="text" className="form-control" id="apPaternoInput" aria-describedby="Apellido paterno" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
//                     </div>
//                     <div className="mb-3 col">
//                         <label htmlFor="apMaternoInput" className="form-label">Apellido materno</label>
//                         <input type="text" className="form-control" id="apMaternoInput" aria-describedby="Apellido materno" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="mb-3 col">
//                         <label htmlFor="rfcInput" className="form-label">RFC</label>
//                         <input type="text" className="form-control" id="rfcInput" aria-describedby="RFC" minLength={13} maxLength={13} pattern="[A-Z]{4}[0-9]{6}[A-Z0-9]{3}" required/>
//                     </div>
//                     <div className="mb-3 col">
//                         <label htmlFor="curpInput" className="form-label">CURP</label>
//                         <input type="text" className="form-control" id="curpInput" aria-describedby="CURP" minLength={18} maxLength={18} pattern="[A-Z]{4}[0-9]{6}[H|M]{1}[A-Z]{2}[A-Z0-9]{5}" required/>
//                     </div>
//                 </div>
//                 <div id='botones'>
//                     <button type="reset" className="btn btn-secondary">Cancelar</button>
//                     <button type="submit" className="btn btn-success" onClick={InsertCliente}>Guardar</button>
//                 </div>
                
//             </form>

//         </section>
        
//       </div>
//     );
//   }
  
  export default Registrar;