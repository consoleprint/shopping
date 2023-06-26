const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

async function setupDB() {
    try {
        var Product = sequelize.define('Product', {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            desc: {
                type: DataTypes.STRING,
                allowNull: false
            },
        });
        await sequelize.sync({ force: true });

    } catch (error) {
        console.error(error);
    }
}

setupDB()