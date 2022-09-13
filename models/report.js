const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Reports extends Model {}

  Reports.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
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
        defaultValue: DataTypes.NOW,
      },
      weather_report: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      tableName: "reports",
    }
  );

  return Reports;
};
