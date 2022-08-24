const { Router } = require("express");
const router = Router();
const crud = require('../models/crud');

router.get('/Listar_Clientes', (req, res) => {
    let sql = "CALL InformacionGeneral";
    crud.InformacionGeneral(res,sql);
});

router.get('/Info_Cliente', (req, res, next) => {
    const { curp } = req.body;
    let sql = "CALL InformacionCliente('"+curp+"')";
    crud.InformacionCliente(res,sql);
    // next();
});

router.post('/Agregar/Cliente', (req, res) => {
    // console.log( req.body );
    const { nombre } = req.body;
    const { apellido_paterno } = req.body;
    const { apellido_materno } = req.body;
    const { rfc } = req.body;
    const { curp } = req.body;

    let sql = "INSERT INTO tbl_cmv_cliente (nombre, apellido_paterno, apellido_materno, rfc, curp, fecha_alta) VALUES ('"+nombre+"', '"+apellido_paterno+"', '"+apellido_materno+"', '"+rfc+"', '"+curp+"', now());";
    // // crud.InsertarCliente(res, sql);
    console.log(sql);
    res.send("hola");
    // next();
});

router.post('/Editar_Cliente', (req, res, next) => {
    console.log(res.body);
    const { nombre } = req.body;
    const { apellido_paterno } = req.body;
    const { apellido_materno } = req.body;
    const { rfc } = req.body;
    const { curp } = req.body;

    let sql = "UPDATE tbl_cmv_cliente SET nombre = '"+nombre+"', apellido_paterno = '"+apellido_paterno+"', apellido_materno = '"+apellido_materno+"', rfc = '"+rfc+"', curp = '"+curp+"' WHERE curp = '"+curp+"';";
    crud.InsertarCliente(res, sql);
    next();
});

router.post('/Borrar_ Cliente', (req, res, next) => {
    const { curp } = req.body;

    let sql = "DELETE FROM tbl_cmv_cliente WHERE curp = '"+curp+"' ;";
    crud.InsertarCliente(res, sql);
    next();
});

module.exports = router;