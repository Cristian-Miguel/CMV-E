import '../style/ListarClientes.css';
import Sidebar from '../components/Sidebar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

function ListarClientes(){
    
    const [data, setCliente] = useState([]);

    const getCliente = async ()  => {
        try{
            const response = await axios.get("http://localhost:4000/Listar_Clientes");
            setCliente(response.data)
        }catch(error){
            console.log(error);
        }
    }

    const columns = [
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
            selector: (row) => 
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

                <button className='btn btn-secondary' data-bs-toggle="modal" data-bs-target={'#'+row.curp+'edit'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 512 512">
                        <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"/>
                    </svg>
                </button>
                <div className="modal fade" id={row.curp+'edit'} tabIndex="-1" aria-labelledby="exampleModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModal">Información del cliente</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div className="mb-3 col">
                                        <label htmlFor="nombreInput" className="form-label">Nombre</label>
                                        <input type="text" className="form-control" id="nombreInput" value={row.nombre} aria-describedby="Nombre" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                                    </div>
                                    <div className="mb-3 col">
                                        <label htmlFor="apPaternoInput" className="form-label">Apellido paterno</label>
                                        <input type="text" className="form-control" id="apPaternoInput" value={row.apellido_paterno} aria-describedby="Apellido paterno" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                                    </div>
                                    <div className="mb-3 col">
                                        <label htmlFor="apMaternoInput" className="form-label">Apellido materno</label>
                                        <input type="text" className="form-control" id="apMaternoInput" value={row.apellido_materno} aria-describedby="Apellido materno" maxLength={45} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,45}" required/>
                                    </div>
                                    <div className="mb-3 col">
                                        <label htmlFor="rfcInput" className="form-label">RFC</label>
                                        <input type="text" className="form-control" id="rfcInput" value={row.rfc} aria-describedby="RFC" minLength={13} maxLength={13} pattern="[A-Z]{4}[0-9]{6}[A-Z0-9]{3}" required/>
                                    </div>
                                    <div className="mb-3 col">
                                        <label htmlFor="curpInput" className="form-label">CURP</label>
                                        <input type="text" className="form-control" id="curpInput" value={row.curp} aria-describedby="CURP" minLength={18} maxLength={18} pattern="[A-Z]{4}[0-9]{6}[H|M]{1}[A-Z]{2}[A-Z0-9]{5}" required/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" class="btn btn-primary">Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target={'#'+row.curp+'delete'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 448 512">
                        <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/>
                    </svg>
                </button>
                <div className="modal fade" id={row.curp+'delete'} tabIndex="-1" aria-labelledby="exampleModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModal">Información del cliente</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <label>¿Desea eliminar el usuario con curp {row.curp}?</label>
                                    <input type='hidden' value={row.curp}></input>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-danger">Borrar</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>

            </div>
        }
    ];

    useEffect(() => {
        getCliente();
    }, []);

    return (
        <div className="Contenido">
        
            <Sidebar/>
                
            <section id='listaCliente'>
                <h1>Lista de clientes</h1>
                
                <div id='contenedorTabla'>
                    <DataTable columns={columns} data={data.rows} pagination/>
                </div>
            </section>
        
        </div>
    );

}

export default ListarClientes;

// import 'datatables.net'
// import 'datatables.net-dt/css/jquery.dataTables.css'
// import 'datatables.net-dt/css/jquery.dataTables.min.css'
// import 'datatables.net-dt/js/dataTables.dataTables.js'
// import 'datatables.net-dt/js/dataTables.dataTables.min.js'
// import $, { get } from "jquery";


// export default class ListarClientes extends React.Component {

//     state = {
//       clientes: [],
//     }
  
//     componentDidMount = async() => {
//       await axios.get("http://localhost:4000/Listar_Clientes")
//         .then(res => {
//           this.setState({ clientes: res.data.rows });
//         });
//     }
  
//     render() {

//         let rows = [];
//         this.state.clientes.map( cliente =>{
//             rows.push(
//                 <tr>
//                     <td className="curp">{cliente.curp}</td>
//                     <td className="nombre">{cliente.nombre_completo}</td>
//                     <td className="acciones">
//                         <button className='btn btn-outline-secondary'>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 512 512">
//                                 <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/>
//                             </svg>
//                         </button>
//                         <button className='btn btn-outline-secondary'>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 512 512">
//                                 <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"/>
//                             </svg>
//                         </button>
//                         <button className='btn btn-outline-secondary'>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 448 512">
//                             <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/>
//                             </svg>
//                         </button>
//                     </td>
//                 </tr>
//             );}
//         );

//       return (
//         <div className="Contenido">
        
//             <Sidebar/>
                
//             <section id='listaCliente'>
//                 <h1>Lista de clientes</h1>
//                 <div id='contenedorTabla'>
//                 <datatable title="cliente" columns="{columns}" data="{data}" expandablerows expandablerowscomponent="{<ExpandableComponent"></datatable>
//                     {/* <table id="clientes" className='TablaCliente'>
//                         <thead>
//                             <tr>
//                                 <th>CURP</th>
//                                 <th>Nombre</th>
//                                 <th>Acciones</th>
//                             </tr>
//                         </thead>
//                         <tbody>
                            
//                         </tbody>
//                     </table> */}
//                 </div>
                
//             </section>
        
//         </div>
//       )
//     }
// }

//   $(document).ready(function () {
//         $('#clientes').DataTable({
//             retrieve: true,
//             paging: true,
//             searching: true,
//             language: {
//                 lengthMenu: "Mostrar "+ 
//                     `<select class="custom-select custom-select-sm form-control form-control-sm form-select">
//                         <option value="10">10</option> 
//                         <option value="25">35</option>
//                         <option value="50">50</option>
//                     </select>`
//                 +" resultados",
//                 zeroRecords: "Sin datos - lo siento",
//                 info: "Mostrando pagina _PAGE_ de _PAGES_",
//                 infoEmpty: "Informacion no disponibles",
//                 infoFiltered: "(filtrado de _MAX_ registros totales)",
//                 search: "Buscar: ",
//                 paginate:{
//                     next:'Siguiente',
//                     previous:'Anterior'
//                 },
//                 data: rows
//             },
//         });
//     });
