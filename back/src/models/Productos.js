const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Productos', {
       id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
       },
       nombre: {
          type: DataTypes.STRING,
          allowNull: false,
          
       },
       descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
       },
        precio: {
          type: DataTypes.FLOAT,
          allowNull: true,
       },
       // FILTRADO DE CATEGORIAS Y PRECIOS (Checkbox entre rango de precios)
       CategoriasId: { 
          type: DataTypes.INTEGER,
          allowNull: true,
       },
       
       image: {
          type: DataTypes.STRING,
          allowNull: true,
       },
 
 
    }, { timestamps: false });
 };
 