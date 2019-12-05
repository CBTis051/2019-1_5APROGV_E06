const Sequelize = require('sequelize');

// Conexión a la BD con sequelize
const sequelize = new Sequelize('proyecto', 'root', 'Juanitoo16.', {
    host: 'al17557.systems',
    dialect: 'mysql',
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successflly.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:',err);
    });

module.exports = sequelize;