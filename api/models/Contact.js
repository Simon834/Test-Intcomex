const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("contact", {
    clientCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cellphone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    contactType: {
      type: DataTypes.ENUM(
        "Contacto Comercial",
        "Pago de factura",
        "Representante legal",
        "Retiro de mercaderia"
      ),
      allowNull: false,
    },
    webStoreAuth: {
      type: DataTypes.BOOLEAN,
    },
    orderAuth: {
      type: DataTypes.BOOLEAN,
    },
    infoSend: {
      type: DataTypes.BOOLEAN,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
