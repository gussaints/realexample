var express = require( 'express' );
var app = express( );

var port = 12345;

app.listen( port, (err) => {
    console.log( `Escuchando en el puerto ${ port } aja` );
})