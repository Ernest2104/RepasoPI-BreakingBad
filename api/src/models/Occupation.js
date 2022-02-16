const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('occupation', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
};