
const server = require('./server');
const {conn} = require('./DB_connection')    


conn.sync({force: false}).then(() => {
const PORT = 3001;
server. listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`)
 });

 }
 )
