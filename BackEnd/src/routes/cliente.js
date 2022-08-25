const { Router } = require("express");
const router = Router();
const crud = require('../models/crud');

router.get('/Listar_Clientes', (req, res) => {
    let sql = "CALL InformacionGeneral";
    crud.InformacionGeneral(res,sql);
});

router.post('/Agregar/Cliente', (req, res) => {
    const { nombre } = req.body;
    const { apellido_paterno } = req.body;
    const { apellido_materno } = req.body;
    const { rfc } = req.body;
    const { curp } = req.body;

    let sql = "INSERT INTO tbl_cmv_cliente (nombre, apellido_paterno, apellido_materno, rfc, curp, fecha_alta) VALUES ('"+nombre+"', '"+apellido_paterno+"', '"+apellido_materno+"', '"+rfc+"', '"+curp+"', now());";
    crud.InsertarCliente(res, sql);
});

router.post('/Editar/Cliente', (req, res) => {
    const { nombre } = req.body;
    const { apellido_paterno } = req.body;
    const { apellido_materno } = req.body;
    const { rfc } = req.body;
    const { curp } = req.body;

    let sql = "UPDATE tbl_cmv_cliente SET nombre = '"+nombre+"', apellido_paterno = '"+apellido_paterno+"', apellido_materno = '"+apellido_materno+"', rfc = '"+rfc+"', curp = '"+curp+"' WHERE curp = '"+curp+"';";
    crud.InsertarCliente(res, sql);
});

router.post('/Borrar/Cliente', (req, res) => {
    const { curp } = req.body;

    let sql = "CALL BorrarCliente('"+curp+"');";
    crud.InsertarCliente(res, sql);
});

module.exports = router;