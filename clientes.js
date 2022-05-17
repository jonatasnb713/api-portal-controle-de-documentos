"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cliente.init(
    {
        Razão_Social:                       DataTypes.STRING,
        Nome_Fantasia:                      DataTypes.STRING, 
        Inscrição_Estadual:                 DataTypes.STRING,
        Inscrição_Municipal:                DataTypes.STRING,
        CNPJ:                               DataTypes.NUMBER,
        Endereço:                           DataTypes.STRING,
        Bairro:                             DataTypes.STRING,
        Cidade:                             DataTypes.STRING,
        Estado:                             DataTypes.STRING,
        CEP:                                DataTypes.NUMBER,
        Telefone_Para_Contato:              DataTypes.NUMBER,
        Email:                              DataTypes.STRING,
        Data_do_Cadastro:                   DataTypes.NUMBER,      
    },
    {
      sequelize,
      modelName: "Cliente",
    }
  );
  return Cliente;
};