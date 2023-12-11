const server = require("./server");
const { conn } = require("./DB_connection");
const server_mp = require("./mercadopago/server")

conn.sync({ force: false }).then(() => {
  const PORT = 3001;
  server.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
  });
});


server_mp.listen(4000, () => console.log("mercadopago"))