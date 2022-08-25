const conexion      = require('../database')();
const server_config = require('config');

function  InformacionGeneral(res, sql){
    conexion.query(sql).
    then(row => {

        if (row.length == 0) {
            res.status(200).json({
                msg: 'no hay datos'
            });
        } 
        else {
            if (!row) {
                //madamos error si hay algun problema
                res.status(401).json({
                msg : 'no existes'
                }) 
            } else {
                //madamos los datos obtenidos
                res.status(200).json({
                    rows: row[0],
                }); 
            }

        }

    }).catch(err => {
        console.log(err);
    });
}



function InsertarCliente(res, sql){
    conexion.query(sql).
    then(row => {

        if (row.length == 0) {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(404).json({
                
            });
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            //madamos los datos obtenidos
            res.status(200).json({
                //rows
            });  
            //madamos error si hay algun problema
            res.status(401).json({
                    msg : 'no existes'
            }) 

        }

    }).catch(err => {
        console.log(err);
    });
}

function EditarCliente(res, sql){
    conexion.query(sql).
    then(row => {

        if (row.length == 0) {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(404).json({
                
            });
        } else {
            // res.header("Access-Control-Allow-Origin", "*");
            //madamos los datos obtenidos
            res.status(200).json({
                msg: 'se actualizo correctamente'
            });  
        }

    }).catch(err => {
        console.log(err);
    });
}

function BorrarCliente(res, sql){
    conexion.query(sql).
    then(row => {

        if (row.length == 0) {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(404).json({
                
            });
        } else {
            //madamos los datos obtenidos
            res.status(200).json({
                msg: 'Se borró correctamente'
            });  
            //madamos error si hay algun problema
            res.status(401).json({
                    msg : 'no existes'
            }) 

        }

    }).catch(err => {
        console.log(err);
    });
}


module.exports = {
    InformacionGeneral,
    InsertarCliente,
    EditarCliente,
    BorrarCliente
}