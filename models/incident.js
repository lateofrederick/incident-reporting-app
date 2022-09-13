const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Incidents extends Model {}

  Incidents.init(
    {
      client_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      incident_desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
      },
      weather_report: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "incidents"
    }
  );

  return Incidents;
};
