const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Trip extends Model {}

Trip.init(
    {
        id: {
            type: Datatypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_budget: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        traveller_amount: {
            type: DataTypes.INTERGER,
            allowedNull: false,
        },
        traveller_id: {
            type: DataTypes.INTERGER,
            references: {
                model: 'traveller',
                key: 'id',
            },
        },
        location_id: {
            type: DataTypes.INTERGER,
            references: {
                model: 'location',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip',
    }
);

module.exports = Trip;