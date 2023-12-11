require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const CategoriasModel = require('./models/Categorias');
const ProductosModel = require('./models/Productos');
const UserModel = require('./models/User');
const {DB_DEPLOY} = process.env;



// const sequelize = new Sequelize(
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/luthiers`,
//    { logging: false, native: false }
// );
const sequelize = new Sequelize(
   //DB_DEPLOY != undefined ? DB_DEPLOY : `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/luthiers`,
   DB_DEPLOY,
   { logging: false, native: false }
);

CategoriasModel(sequelize);
ProductosModel(sequelize);
UserModel(sequelize);


const { Productos, Categorias, User } = sequelize.models;
Categorias.hasMany(Productos, { as: "Productos", foreignKey: 'CategoriasId', sourceKey: 'id' });
Productos.belongsTo(Categorias, { foreignKey: 'CategoriasId' , targetId: 'id' });
//https://medium.com/@diego.coder/conexi%C3%B3n-a-una-base-de-datos-postgreql-con-node-js-y-sequelize-d93b0546e4cc

module.exports = {
   User,
   Categorias,
   Productos,
   conn: sequelize,
};

