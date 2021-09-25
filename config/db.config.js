const mysql = require('mysql')

const conexion = mysql.createConnection({ //conexion a la base de datos
    host:'sql10.freesqldatabase.com',
    user:'sql10440014',
    password:'reKBHNqqwu',
    database:'sql10440014'
})

conexion.connect((err)=>{
    if(err) throw err;
    else{
        console.log('conectado a bd')
    }
})

module.exports = conexion;