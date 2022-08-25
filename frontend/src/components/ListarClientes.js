import '../style/ListarClientes.css';
import Sidebar from '../components/Sidebar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import axios from 'axios';
import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import qs from 'qs';

let columns, data;

export default class ListarClientes extends Component{
    state = {
        data:[],
        edit:{
            nombre:'',
            apellido_paterno: '',
            apellido_materno: '',
            rfc: '',
            curp: '',
        }
    }

    handleChange = async (e) => {
        e.persist();
        await this.setState({
            edit:{
                ...this.state.edit,
                [e.target.name]: e.target.value
            }
        });
        
    }

    cargarColumnas = () => {
        columns = [
            {
                name:'CURP',
                selector: (row) => row.curp,
            },
            {
                name:'Nombre Completo',
                selector: (row) => row.nombre+" "+row.apellido_paterno+" "+row.apellido_materno,
            },
            {
                name: 'Acciones',
                cell: (row) => 
                <div className='Acciones'>
                   <button className='btn btn-secondary' data-bs-toggle="modal" data-bs-target={'#'+row.curp+'info'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 512 512">
                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/>
                        </svg>
                    </button>
                    <div className="modal fade" id={row.curp+'info'} tabIndex="-1" aria-labelledby="exampleModal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModal">Información del cliente</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label> Nombre completo:  <u> {row.nombre+" "+row.apellido_paterno+" "+row.apellido_materno} </u></label><br/>
                                    <label> CURP:             <u> {row.curp}            </u></label><br/>
                                    <label> RFC:              <u> {row.rfc}             </u></label><br/>
                                    <label> Saldo: $          <u> {row.saldo_actual}    </u></label><br/>
                                    <label> Nombre de cuenta: <u> {row.nombre_cuenta}   </u></label><br/>
                                    <label> Fecha de alta:    <u> {row.fecha_alta}      </u></label><br/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <button className='btn btn-secondary' data-bs-toggle="modal" data-bs-target={'#'+row.curp+'edit'} onClick={(e)=> this.modificarCliente(row)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 512 512">
                            <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"/>
                        </svg>
                    </button>
                    <div className="modal fade" id={row.curp+'edit'} tabIndex="-1" aria-labelledby="exampleModal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModal">Editar cliente</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form>
                                    <div className="modal-body">
                                        <div className="mb-3 col">
                                            <label htmlFor="nombreInput" className="form-label">Nombre</label>
                                            <input type="text" className="form-control" id={row.curp+"nombreInput"} name='nombre' onChange={(e) => this.handleChange(e) } aria-describedby="Nombre" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                                        </div>
                                        <div className="mb-3 col">
                                            <label htmlFor="apPaternoInput" className="form-label">Apellido paterno</label>
                                            <input type="text" className="form-control" id={row.curp+"apPaternoInput"} name='apellido_paterno' onChange={this.handleChange} aria-describedby="Apellido paterno" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                                        </div>
                                        <div className="mb-3 col">
                                            <label htmlFor="apMaternoInput" className="form-label">Apellido materno</label>
                                            <input type="text" className="form-control" id={row.curp+"apMaternoInput"} name='apellido_materno' onChange={this.handleChange} aria-describedby="Apellido materno" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                                        </div>
                                        <div className="mb-3 col">
                                            <label htmlFor="rfcInput" className="form-label">RFC</label>
                                            <input type="text" className="form-control" id={row.curp+"rfcInput"} name='rfc' onChange={this.handleChange} aria-describedby="RFC" minLength={13} maxLength={13} pattern="[A-Z]{4}[0-9]{6}[A-Z0-9]{3}" required/>
                                        </div>
                                        <div className="mb-3 col">
                                            <label htmlFor="curpInput" className="form-label">CURP</label>
                                            <input type="text" className="form-control" id={row.curp+"curpInput"} name='curp' onChange={this.handleChange} aria-describedby="CURP" minLength={18} maxLength={18} pattern="[A-Z]{4}[0-9]{6}[H|M]{1}[A-Z]{2}[A-Z0-9]{5}" required/>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="submit" className="btn btn-primary" onClick={(e)=> this.editarCliente(row)}>Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
    
                    <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target={'#'+row.curp+'delete'} onClick={(e)=> this.modificarEdit(row)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 448 512">
                            <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/>
                        </svg>
                    </button>
                    <div className="modal fade" id={row.curp+'delete'} tabIndex="-1" aria-labelledby="exampleModal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModal">Borrar cliente</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form>
                                    <div className="modal-body">
                                        <label>¿Desea eliminar el usuario con curp {row.curp}?</label>
                                        <input type='hidden' value={row.curp}></input>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-danger" onClick={(e)=> this.borrarCliente(row)}>Borrar</button>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            }
        ];
    }

    modificarCliente  = (cliente) => {
        this.state.edit = cliente;
        const Infocliente = [ this.state.edit.nombre, this.state.edit.apellido_paterno, this.state.edit.apellido_materno, this.state.edit.rfc, this.state.edit.curp ];
        const inputs = [ "nombreInput", "apPaternoInput", "apMaternoInput", "rfcInput", "curpInput" ];

        for (let i = 0; i < inputs.length; i++) {
            let id = cliente.curp+inputs[i];
            const componente = document.getElementById(id);
            componente.value = Infocliente[i];  
        }
    }

    modificarEdit = (cliente) => this.state.edit = cliente;

    borrarCliente = async () => {

        const editado = this.state.edit;
        const url = "http://localhost:4000/Borrar/Cliente"
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }

        await axios.post(url,qs.stringify(editado), config)
        .then(res => console.log(res))
        .catch((error) => console.log(error.message));
    }

    editarCliente = async () => {

        const editado = this.state.edit;
        const url = "http://localhost:4000/Editar/Cliente"
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }

        await axios.post(url,qs.stringify(editado), config)
        .then(res => console.log(res))
        .catch((error) => console.log(error.message));
    }

    datosGeneralesCliente = async () => {
        await axios.get( "http://localhost:4000/Listar_Clientes" )
        .then( res => { 
            this.setState({data: res.data}); 
            data = res.data.rows;
        })
        .catch( error => console.log(error.message));
    }

    componentDidMount(){
        this.datosGeneralesCliente();
        this.cargarColumnas();
    }

    render(){
        
        return (
            <div className="Contenido">
            
                <Sidebar/>
                    
                <section id='listaCliente'>
                    <h1>Lista de clientes</h1>
                    
                    <div id='contenedorTabla'>
                        <DataTable columns={columns} data={data} pagination/>
                    </div>
                </section>
            
            </div>
        );
    }
}

